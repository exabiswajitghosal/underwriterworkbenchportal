import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Typography, Table, Alert, Spin } from 'antd';

const { Title } = Typography;

function Insights({ id="980d35d0-5f48-467b-54e5-90fb5bd3fb7d" }) {
  const [insights, setInsights] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://underwriting-assessment.onrender.com/api/v1/insights?submission_id=${id}`);

        if (response.status === 200) {
          setInsights(response.data); // Assuming data is a JSON object
        } else {
          setErrorMessage("No insights available at this moment.");
        }
      } catch (err) {
        setErrorMessage("Unable to fetch insights: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const getColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'red';
      case 'medium':
        return 'orange';
      case 'low':
        return 'green';
      default:
        return 'black'; // Default color if priority is unknown
    }
  };

  const columns = [
    {
      title: 'Insight',
      dataIndex: 'insight',
      key: 'insight',
      render: (text, record) => (
        <span style={{ color: getColor(record.priority.toLowerCase()) }}>{text}</span>
      ),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (text, record) =>(
        <span style={{ color: getColor(record.priority.toLowerCase()) }}>{text}</span>
      )
    },
  ];

  // Prepare data for the table
  const tableData = insights ? insights.flatMap(insight => 
    insight.key_insights.map((keyInsight, index) => ({
      key: `${insight.id}-${index}`, // Unique key for each row
      insight: keyInsight.insight,
      priority: keyInsight.priority,
    }))
  ) : [];

  return (
    <Card className="max-w-screen-lg mx-auto" title={<Title level={2}>Insights</Title>} bordered>
      {loading ? (
        <Spin tip="Loading insights..." />
      ) : (
        <>
          {errorMessage && (
            <Alert message={errorMessage} type="error" showIcon className="mb-4" />
          )}
          {tableData.length > 0 ? (
            <Table
              dataSource={tableData}
              columns={columns}
              pagination={{
                pageSize: 10, // Set the number of items per page
                showSizeChanger: true, // Allows users to change the page size
                pageSizeOptions: [5, 10, 20], // Options for page size
              }}
            />
          ) : (
            <Typography type="secondary">No insights available.</Typography>
          )}
        </>
      )}
    </Card>
  );
}

export default Insights;
