import React, { useState } from 'react';
import { Table, Input, Typography, Button, Tooltip, Row, Col, Select, Collapse } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;
const { Panel } = Collapse;
const PremiumSummary = ({ onNext }) => {
  const [editing, setEditing] = useState(false); // Global editing state
  const [selectedBuilding, setSelectedBuilding] = useState(null); // Selected building state

  // Data for each building
  const buildingData = {
    'Location 1': [
      { key: 1, description: 'Property Damage Coverage', coverageAmount: '$4000', premium: '' },
      { key: 2, description: 'Business Personal Property', coverageAmount: '$5000', premium: '' },
      { key: 3, description: 'Business Income Coverage', coverageAmount: '$5000', premium: '' },
      { key: 4, description: 'Flood Coverage', coverageAmount: '$3000', premium: '' },
      { key: 5, description: 'Earthquake Coverage', coverageAmount: '$5000', premium: '' },
      { key: 6, description: 'Annual Rental and fees', coverageAmount: '$4000', premium: '' },
      { key: 7, description: 'Ord/ Law Blanket Limits', coverageAmount: '$4000', premium: '' },
    ],
    'Location 2': [
      { key: 1, description: 'Property Damage Coverage', coverageAmount: '$5000', premium: '' },
      { key: 2, description: 'Business Personal Property', coverageAmount: '$4000', premium: '' },
      { key: 3, description: 'Business Income Coverage', coverageAmount: '$4000', premium: '' },
      { key: 4, description: 'Flood Coverage', coverageAmount: '$3000', premium: '' },
      { key: 5, description: 'Earthquake Coverage', coverageAmount: '$3000', premium: '' },
      { key: 6, description: 'Annual Rental and fees', coverageAmount: '$5000', premium: '' },
      { key: 7, description: 'Ord/ Law Blanket Limits', coverageAmount: '$4000', premium: '' },
    ],
  };

  // Display data for the selected building or an empty array if none is selected
  const [data, setData] = useState([]);

  // Toggles editing mode for the entire table
  const toggleEditing = () => setEditing(!editing);

  // Updates data for the specific row and field
  const handleFieldChange = (key, field, value) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, [field]: value } : item
      )
    );
  };

  // Handles building selection change
  const handleBuildingChange = (value) => {
    setSelectedBuilding(value);
    setData(buildingData[value] || []);
  };

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
      render: (text, record) =>
        editing ? (
          <Input
            value={text}
            onChange={(e) =>
              handleFieldChange(record.key, 'coverageAmount', e.target.value)
            }
          />
        ) : (
          text
        ),
    },
    {
      title: 'Premium',
      dataIndex: 'premium',
      key: 'premium',
      render: (text, record) =>
        editing ? (
          <Input
            value={text}
            onChange={(e) =>
              handleFieldChange(record.key, 'premium', e.target.value)
            }
          />
        ) : (
          text
        ),
    },
  ];

  return (
    <div className="premium-summary" id="premiumSummary">
      <span style={{ marginRight: '10px', fontSize: '18px' }}>Select Location:</span>
      <Select
        placeholder="Select Building Number"
        onChange={handleBuildingChange}
        style={{ width: 200, height: 50, marginTop: 40 }}
      >
                <Option value="Location 1">1234 Elm Street,Apt 101,California,90210,USA</Option>
                <Option value="Location 2">123 Innovation Drive,Suite 200,CA,90210,USA</Option>
      </Select>

      {/* Edit/Save button */}
      {selectedBuilding && (
      <Row gutter={16}>
        <Col span={22}></Col>
        <Col span={2}>
          <Button
            shape="circle"
            icon={
              editing ? (
                <Tooltip title="Save">
                  <SaveOutlined style={{ fontSize: '20px' }} />
                </Tooltip>
              ) : (
                <Tooltip title="Edit">
                  <EditOutlined style={{ fontSize: '20px' }} />
                </Tooltip>
              )
            }
            onClick={toggleEditing}
            style={{ marginBottom: 10, marginLeft: 16, fontSize: 20, marginTop: 1 }}
          />
        </Col>
      </Row>)}

      {/* Table */}
      {selectedBuilding && (
        <Collapse defaultActiveKey={['1']} style={{ marginTop: '20px' }}>
           <Panel header="Building 1" key="1">
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          size="small"
          className="custom-table-header"
          bordered
          style={{ marginTop: 2 }}
        />
        </Panel>
        <Panel header="Building 2" key="2">
        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          size="small"
          className="custom-table-header"
          bordered
          style={{ marginTop: 2 }}
        />
        </Panel>
        </Collapse>
      
      
      
      
      
      
      
      )}
     
     {selectedBuilding && (
      <Table
        dataSource={[
          { key: 'totalPremium', label: 'Total Premium', value: '' },
          { key: 'feeTaxes', label: 'Fees & Taxes', value: '' },
          { key: 'totalPayable', label: 'Total Payable', value: '' },
        ]}
        columns={[
          { title: '', dataIndex: 'label', key: 'label' },
          { title: '', dataIndex: 'value', key: 'value' },
        ]}
        pagination={false}
        size="small"
        style={{marginTop: "30px"}}
        bordered
      /> )}

      {/* Underwriter Notes */}
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Title level={4}>Notes:</Title>
        <TextArea
          placeholder="Enter notes here"
          rows={4}
          style={{ marginTop: 10, width: '100%', border: '2px solid gray' }}
        />
      </div>
      <Row gutter={16}>
        <Col span={20}></Col>
        <Col span={4}>
          <div>
            <button
              
              onClick={onNext}
              type="submit"
              style={{ width: '10rem', marginBottom: '1rem', marginTop: '1rem' }}
            >
              <b>Next</b>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PremiumSummary;
