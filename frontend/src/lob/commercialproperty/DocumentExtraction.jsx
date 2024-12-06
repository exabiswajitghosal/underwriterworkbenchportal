import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Typography, Alert, Spin, Select, Image } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

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

  const payload = {
    query: `for the ${query} of the building give me: \n` +
      `Summary:\n` +
      `• Point 1\n• Point 2\n• Point 3\n\n` +
      `Inspection highlights:\n` +
      `• Point 1\n• Point 2\n• Point 3\n\n` +
      `Risks (if any):\n` +
      `• Point 1\n• Point 2\n• Point 3\n`,
    model: "gpt-4o",
  };

  useEffect(() => {
    if (!query) return; // Avoid API call if query is null or undefined.

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(`${API_BASE_URL}/query`, payload);
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
            max_tokens: 1000,
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
      <Title level={3} style={{ textAlign: 'left', marginBottom: '20px' }}>Document Extraction</Title>
      <Select
        placeholder="Select an option"
        style={{ width: '100%', marginBottom: '20px' }}
        value={query}
        onChange={(value) => setQuery(value)}
      >
        <Option value="overall-summary">Overall Summary</Option>
        <Option value="front-side">Front Side</Option>
        <Option value="sidewalk">Sidewalk</Option>
        <Option value="roof">Roof</Option>
        <Option value="electric-panel">Electric Panel</Option>
        <Option value="neighborhood">Neighborhood</Option>
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
                : 'No insights available'}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

export default DocumentExtraction;
