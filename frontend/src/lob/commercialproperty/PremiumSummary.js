import React, { useState } from 'react';
import { Table, Input, Typography,  } from 'antd';
import { Color } from 'antd/es/color-picker';


const { Text, Title } = Typography;

const PremiumSummary = () => {
  const [editingRow, setEditingRow] = useState(null);
  const [data, setData] = useState([
    { key: 1, description: 'Customer request', coverageAmount: '', premium: '', override: false },
    { key: 2, description: 'Building No', coverageAmount: '', premium: '', override: false },
    { key: 3, description: 'Building Limit', coverageAmount: '', premium: '', override: true },
    { key: 4, description: 'Annual Rents and Fees', coverageAmount: '', premium: '', override: true },
    { key: 5, description: 'Flood Coverage', coverageAmount: '', premium: '', override: true },
    { key: 6, description: 'Earthquake Coverage', coverageAmount: '', premium: '', override: true },
    { key: 7, description: 'Ord/Law Blanket Limits', coverageAmount: '', premium: '', override: true },
    { key: 8, description: 'BPP Limit', coverageAmount: '', premium: '', override: true },
    { key: 9, description: 'Property Deductible', coverageAmount: '', premium: '', override: true },
    { key: 10, description: 'Total Premium', coverageAmount: '', premium: '', override: false },
    { key: 11, description: 'Fees & Taxes', coverageAmount: '', premium: '', override: false },
    { key: 12, description: 'Total Payable', coverageAmount: '', premium: '', override: false },
  ]);

  // Column configuration for the table
  const columns = [
    {
      title: '',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Coverage Amount',
      dataIndex: 'coverageAmount',
      key: 'coverageAmount',
      render: (text, record) => (
        editingRow === record.key ? (
          <Input
            value={text}
            onChange={(e) => handleFieldChange(record.key, 'coverageAmount', e.target.value)}
          />
        ) : (
          text
        )
      ),
    },
    {
      title: 'Premium',
      dataIndex: 'premium',
      key: 'premium',
      render: (text, record) => (
        editingRow === record.key ? (
          <Input
            value={text}
            onChange={(e) => handleFieldChange(record.key, 'premium', e.target.value)}
          />
        ) : (
          text
        )
      ),
    },
    {
      title: '',
      dataIndex: 'override',
      key: 'override',
      
      render: (override, record) => (
        override ? (
          <Text
            style={{ color: '#1d4ed8', cursor: 'pointer' }} // Blue color and pointer cursor for link effect
            onClick={() => toggleEditRow(record.key)}
          >
            {editingRow === record.key ? 'Save' : 'Override'}
          </Text>
        ) : null
      ),
    },
  ];

  // Toggles editing state for a row
  const toggleEditRow = (key) => {
    if (editingRow === key) {
      setEditingRow(null); // Save changes and exit edit mode
    } else {
      setEditingRow(key); // Enter edit mode for the selected row
    }
  };

  // Updates data for the specific row and field
  const handleFieldChange = (key, field, value) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div className="premium-summary" id="premiumSummary">
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        size="small"
        className="custom-table-header"
        bordered
        style={{ marginTop: 30 }}
      />

      {/* Underwriter Notes */}
     
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Title level={4}>UW Notes:</Title>
        <Input.TextArea
          placeholder="Enter notes here"
          rows={4}
          style={{ marginTop: 10, width: '100%', border: '2px solid gray' }}
        />
      </div>
    </div>
  );
};

export default PremiumSummary;
