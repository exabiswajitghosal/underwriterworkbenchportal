import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Alert, Spin, Select, Image, Button, Switch } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import inspectionReport from '../../assets/documents/Sample Inspection Report.pdf'
import corelogicReport from '../../assets/documents/riskmeter_report.pdf'

const { Option } = Select;

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const openAiApiKey = process.env.REACT_APP_OPENAI_API_KEY;

function OverallInsights() {
  const [insights, setInsights] = useState(null);
  const [refImages, setRefImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    value: null,
    label: null
  });
  const [doc, setDoc] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(false);
  const [publicData, setPublicData] = useState(false);

  const inspectionOptions = [
    { value: 'overall-summary such as building details, inspection summary and risks', label: 'Inspection Details' },
    { value: 'construction-information such as roof material, floor construction, interior walls, exterior walls, sidewalk, stairs', label: 'Construction Information' },
    { value: 'protection-information', label: 'Protection Information' },
    { value: 'heating-system-information', label: 'Heating System' },
    { value: 'electrical-information such as electrical panel', label: 'Electrical' },
    { value: 'plumbing-information', label: 'Plumbing' },
    { value: 'roof', label: 'Roof' },
    { value: 'stairs', label: 'Stairs' },
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
    publicDataQuery: `
    You are a {Commercial Property} Insurance Underwriter's Assistant that can quickly find potential risks and issues with the building based on the inspection report.
      Please Provide Summary, Highlights, Underwriting Risks of ${query.value} of the building, refer the public data which is given as  charts and graphs provided in the image and corelate the inspection
      report with it specific data points and highlight in case anything that's not inspected with respect to underwriting a {Commercial Property} in the following format:
      **Summary of ${query.label}**:
      - <Bullet 1>
      - <Bullet 2>
      - <Bullet 3>
      - <Bullet 4>
      - <Bullet 5>
      ** Highlights of ${query.label}**:
      - <Bullet 1>
      - <Bullet 2>
      - <Bullet 3>
      - <Bullet 4>
      - <Bullet 5>
      **Underwriting Risks of ${query.label}**:
      - <Bullet 1>
      - <Bullet 2>
      - <Bullet 3> 
      - <Bullet 4>
      - <Bullet 5>
      **Comparison of ${query.label} with public risk data(top 10 causes of fire)**:
      - <Risk 1> < e.g. % of fire caused by risk 1 (refer chart) for that particular location(borough)> <inspected/not inspected> 
      - <Risk 2> < e.g. % of fire caused by risk 2 (refer chart) for that particular location(borough)> <inspected/not inspected> 
      - <Risk 4> < e.g. % of fire caused by risk 3 (refer chart) for that particular location(borough)> <inspected/not inspected>
      - <Risk 5> < e.g. % of fire caused by risk 4 (refer chart) for that particular location(borough)> <inspected/not inspected>
      - <Risk 6> < e.g. % of fire caused by risk 5 (refer chart) for that particular location(borough)> <inspected/not inspected>
      - <Risk 3> < e.g. % of fire caused by risk 6 (refer chart) for that particular location(borough)> <inspected/not inspected>
      - <Risk 7> < e.g. % of fire caused by risk 7 (refer chart) for that particular location(borough)> <inspected/not inspected>
    `,
    query: `
      You are a {Commercial Property} Insurance Underwriter's Assistant that can quickly find potential risks and issues with the building based on the inspection report.
      Please Provide Summary, Highlights, Underwriting Risks of ${query.value} of the building that would be helpful in underwriting a {Commercial Property} in the following format:
      **Summary of ${query.label}**:
      - <Bullet 1>
      - <Bullet 2>
      - <Bullet 3>
      - <Bullet 4>
      - <Bullet 5>
      ** Highlights of ${query.label}**:
      - <Bullet 1>
      - <Bullet 2>
      - <Bullet 3>
      - <Bullet 4>
      - <Bullet 5>
      **Underwriting Risks of ${query.label}**:
      - <Bullet 1>
      - <Bullet 2>
      - <Bullet 3> 
      - <Bullet 4>
      - <Bullet 5>
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

  // const llama3Api = async () => {
  //   const response = await fetch(
  //     'https://api-inference.huggingface.co/models/meta-llama/Llama-3.2-3B-Instruct',
  //     {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Bearer ${process.env.REACT_APP_HF_TOKEN}`,
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         inputs: 'What is the capital of France?',
  //         parameters: { max_length: 2000, temperature: 0.7 },
  //       }),
  //     }
  //   );

  //   const result = await response.json();
  //   console.log("llama api call: " + result);
  // }


  useEffect(() => {
    // llama3Api()
    if (!query.value) return; // Avoid API call if query is null or undefined.

    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch images from the custom API
        const response = await axios.post(`${API_BASE_URL}/query`, {
          query: 'Give me the images of ' + query.value + ' along with the overall summary mentioned in the non image text about the ' + query.value + ' from the document.',
          model: "gpt-4o",
        });

        let images = [];
        if (response.status === 200) {
          // Assuming `response.data.results` contains an array of Base64 images
          images = response.data.results.map((imageBase64) =>
            `data:image/png;base64,${imageBase64}`
          );
          if (publicData) {
            // Fetch images from the localStorage
            const capturedVisualizations = JSON.parse(localStorage.getItem('capturedVisualizations') || '[]');
            const publicDataImages = capturedVisualizations.map((data) => data.image);
            images = [...images, ...publicDataImages];
          }
          // console.log("Images received:", images);
          setRefImages(images); // Set the array of images in the state
        }

        // Construct the OpenAI payload
        let messages = [];
        if (publicData) {
          messages = [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: payload.publicDataQuery, // Add the query as the first part of the payload
                },
              ],
            },
          ];
        } else {
          messages = [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: payload.query, // Add the query as the first part of the payload
                },
              ],
            },
          ];
        }

        // Loop through images and add them to the payload
        images.forEach((imageBase64, index) => {
          messages[0].content.push({
            type: "image_url",
            image_url: { url: imageBase64 },
          });
        });

        const data = {
          model: payload.model,
          messages,
          max_tokens: 2000,
          temperature: 0,
        };

        const aiResponse = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          data,
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
          // console.log(insights)
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
  }, [query.value, publicData]);  // Dependency on `query` only, not `payload`

  return (
    <div style={{ padding: '20px' }}>
      <Switch
        checked={publicData}
        onChange={() => setPublicData(!publicData)}
        style={{ width: '1%', marginBottom: '20px' }}
      />
      <span style={{ marginLeft: '10px' }}>Include Public Data</span>
      <br />
      <Button
        type="primary"
        className={"tablinks"}
        onClick={() => {
          setUploadStatus(false);
          setInsights(null);
          setRefImages(null);
          setLoading(false);
          setErrorMessage("");
          setDoc(null);
          setQuery({
            value: null,
            label: null
          });
          setPublicData(false);
        }}
        style={{
          borderRadius: '8px',
          fontSize: '16px',
          padding: '8px 16px',
          marginBottom: '20px'
        }}
      >
        Reset
      </Button>
      <div style={{ display: "flex" }}>
        <Select
          placeholder="Select Document"
          style={{ width: '100%', marginBottom: '20px' }}
          value={doc}
          onChange={(value) => {
            setDoc(value);
            handleUploadFile(value); // Call the function inside onChange
          }}
          disabled={uploadStatus}
        >
          <Option value="inspectionReport">Inspection Report</Option>
          <Option value="corelogicReport">Corelogic Report</Option>
        </Select>
        <Select
          placeholder="Select an option"
          style={{ width: '100%', marginBottom: '20px' }}
          value={query.value}
          onChange={(value) => {
            const options = doc === 'inspectionReport' ? inspectionOptions : corelogicOptions;
            const selectedOption = options.find(option => option.value === value);
            setQuery({
              value: value,
              label: selectedOption ? selectedOption.label : "",
            });
          }}
          disabled={!uploadStatus}
        >
          {(doc === 'inspectionReport' ? inspectionOptions : corelogicOptions).map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </div>
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
          disabled={!uploadStatus}
        >
          <div style={{ display: 'flex', width: '100%' }} >
            {refImages && (
              <div style={{ flex: '1', width: '50%', maxHeight: '600px', overflowY: 'scroll' }}>
                {refImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Reference ${index + 1}`}
                    style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                  />
                ))}
              </div>
            )}
            <div style={{ flex: '1', width: '50%', maxHeight: '600px', overflowY: 'scroll', padding: '0 10px' }}>
              {insights
                ? insights.split("\n\n").map((paragraph, index) => (
                  <Card key={index}>
                    {paragraph.split("\n").map((point, pointIndex) => (
                      <p key={pointIndex}>{point}</p>
                    ))}
                  </Card>
                ))
                : 'Select the document and then query from dropdown to generate Insights'}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

export default OverallInsights;
