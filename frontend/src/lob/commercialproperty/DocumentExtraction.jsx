import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../layout/Tab.css';
import { Card, Typography, Alert, Spin, Select, Image, Radio, Button } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import inspectionReport from '../../assets/documents/Sample Inspection Report.pdf'
import corelogicReport from '../../assets/documents/riskmeter_report.pdf'

const { Title, Paragraph } = Typography;
const { Option } = Select;

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const openAiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

function DocumentExtraction() {
  const [insights, setInsights] = useState(null);
  const [refImage, setRefImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const [doc, setDoc] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(false);


  const inspectionOptions = [
    { value: 'overall-summary', label: 'Overall Summary' },
    { value: 'front-side', label: 'Front Side' },
    { value: 'sidewalk', label: 'Sidewalk' },
    { value: 'roof', label: 'Roof' },
    { value: 'electric-panel', label: 'Electric Panel' },
    { value: 'neighborhood', label: 'Neighborhood' },
  ];

  const corelogicOptions = [
    { value: 'overall-summary', label: 'Overall Summary' },
    { value: 'storm', label: 'Storm' },
    { value: 'earthquake', label: 'Earthquake' },
    { value: 'hail', label: 'Hail' },
    { value: 'tornado', label: 'Tornado' },
    { value: 'wind', label: 'Wind' },
    { value: 'flood', label: 'Flood' },
    { value: 'distance-to-shore', label: 'Distance to Shore' },
  ];

  const payload = {
    query: `
      Provide a detailed assessment for the ${query} of the location in the following format:

      **Summary**:
      - <Bullet 1>
      - <Bullet 2>
      - <Bullet 3>

      ** Highlights**:
      - <Bullet 1>
      - <Bullet 2>
      - <Bullet 3>

      **Underwriting Risks (if applicable)**:
      - <Bullet 1>
      - <Bullet 2>
      - <Bullet 3>
    `,
    model: "gpt-4o",
  };
  const handleUploadFile = async (selectedDoc) => {
    try {
      // Determine which file to upload
      const doc_url = selectedDoc === "inspectionReport"
        ? inspectionReport
        : corelogicReport;

      if (!doc_url) {
        setErrorMessage("Invalid document selected");
        return;
      }

      setLoading(true);
      setErrorMessage('');

      // Fetch the file as a blob
      const response = await fetch(doc_url);
      const blob = await response.blob();
      const file = new File([blob], `${selectedDoc}.pdf`, { type: 'application/pdf' });

      // Create FormData and append the file
      const data = new FormData();
      data.append('file', file);

      // Upload the file
      const uploadResponse = await axios.post(`${API_BASE_URL}/upload`, data);

      console.log("File uploaded successfully:", uploadResponse.data);
      setUploadStatus(true)
    } catch (error) {
      console.error("Error uploading file:", error);
      setErrorMessage("File upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };



  useEffect(() => {
    if (!query) return; // Avoid API call if query is null or undefined.

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(`${API_BASE_URL}/query`,
          {
            query: 'Give me the image of ' + query + ' from the document.',
            model: "gpt-4o",
          });
        if (response.status === 200 && response.data.result) {
          const imageBase64 = `data:image/png;base64,${response.data.result}`;
          setRefImage(imageBase64);
        }

        const aiResponse = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: payload.model,
            messages: [{
              role: "user", content: [
                { "type": "text", "text": payload.query },
                {
                  "type": "image_url",
                  "image_url": { "url": `data:image/png;base64,${response.data.result}` }
                },
              ],
            }
            ],
            max_tokens: 2000,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${openAiApiKey}`,
            },
          }
        );

        if (aiResponse.status === 200) {
          // console.log(aiResponse.data.choices[0].message.content)
          setInsights(aiResponse.data.choices[0].message.content);
        } else {
          setErrorMessage("No insights available at this moment.");
        }
      } catch (error) {
        setErrorMessage("Error fetching data: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);  // Dependency on `query` only, not `payload`

  return (
    <div style={{ padding: '20px' }}>
      {/* <Title level={3} style={{ textAlign: 'left', marginBottom: '20px' }}>Document Extraction</Title> */}
      <Button 
      type="primary" 
      className={"tablinks"}
      onClick={() => setUploadStatus(false)}
      style={{
        borderRadius: '8px', 
        fontSize: '16px', 
        padding: '8px 16px'
      }}
    >
      Reset
    </Button>
      <div>
        <label htmlFor="docs">Select Document</label>
        <Radio.Group
          style={{ padding: "20px" }}
          id='docs'
          value={doc}
          onChange={(e) => {
            setDoc(e.target.value);
            handleUploadFile(e.target.value); // Call the function inside onChange
          }}
          disabled={uploadStatus}
        >
          <Radio value="inspectionReport">Inspection Report</Radio>
          <Radio value="corelogicReport">Corelogic Report</Radio>
        </Radio.Group>
      </div>
      <Select
        placeholder="Select an option"
        style={{ width: '100%', marginBottom: '20px' }}
        value={query}
        onChange={(value) => setQuery(value)}
        disabled={!uploadStatus}
      >
        {(doc === 'inspectionReport' ? inspectionOptions : corelogicOptions).map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      {loading ? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      ) : errorMessage ? (
        <Alert message={errorMessage} type="error" showIcon />
      ) : (
        <Card
          title="Document Insights"
          bordered
          style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
          }}

        >
          <div style={{ display: 'flex', width: '100%' }}>
            {refImage && (
              <div style={{ flex: '1', width: '50%' }}>
                <Image src={refImage} alt="Reference" style={{ width: '100%', height: 'auto' }} />
              </div>
            )}
            <div style={{ flex: '1', width: '50%', padding: '0 10px' }}>
              {insights
                ? insights.split("\n\n").map((paragraph, index) => (
                  <Card key={index}>
                    {paragraph.split("\n").map((point, pointIndex) => (
                      <p key={pointIndex}>{point}</p>
                    ))}
                  </Card>
                ))
                : 'Select the document to generate Insights'}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

export default DocumentExtraction;
