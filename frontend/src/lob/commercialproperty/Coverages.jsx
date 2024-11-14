import React, { useState } from 'react';
import { Table, Input, Typography, Button, Select, Row, Col, Tooltip } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import styles from './LocationComponent.module.css';
const { Title } = Typography;
const { Option } = Select;

const Coverages = ({ onNext }) =>{
  const [editing, setEditing] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Define table data for each location
  const locationData = {
    'Location 1': [
      { key: 1, label: 'Property Damage Coverage', coverageAmount: '$400,000', deductible: '$40000', approvedCoverage: '', approvedDeductible: '' },
      { key: 2, label: 'Business Personal Property', coverageAmount: '$500,000', deductible: '$50000', approvedCoverage: '', approvedDeductible: '' },
      { key: 3, label: 'Business Income Coverage', coverageAmount: '$500,000', deductible: '$50000', approvedCoverage: '', approvedDeductible: '' },
      { key: 4, label: 'Flood Coverage', coverageAmount: '$300,000', deductible: '$30000', approvedCoverage: '', approvedDeductible: '' },
      { key: 5, label: 'Earthquake Coverage', coverageAmount: '$500,000', deductible: '$50000', approvedCoverage: '', approvedDeductible: '' },
      { key: 6, label: 'Annual Rental and fees', coverageAmount: '$400,000', deductible: '$40000', approvedCoverage: '', approvedDeductible: '' },
      { key: 7, label: 'Ord/ Law Blanket Limits', coverageAmount: '$400,000', deductible: '$40000', approvedCoverage: '', approvedDeductible: '' },
      
    ],
    'Location 2': [
      { key: 1, label: 'Property Damage Coverage', coverageAmount: '$400,000', deductible: '$40000', approvedCoverage: '', approvedDeductible: '' },
      { key: 2, label: 'Business Personal Property', coverageAmount: '$500,000', deductible: '$50000', approvedCoverage: '', approvedDeductible: '' },
      { key: 3, label: 'Business Income Coverage', coverageAmount: '$500,000', deductible: '$50000', approvedCoverage: '', approvedDeductible: '' },
      { key: 4, label: 'Flood Coverage', coverageAmount: '$300,000', deductible: '$30000', approvedCoverage: '', approvedDeductible: '' },
      { key: 5, label: 'Earthquake Coverage', coverageAmount: '$500,000', deductible: '$50000', approvedCoverage: '', approvedDeductible: '' },
      { key: 6, label: 'Annual Rental and fees', coverageAmount: '$400,000', deductible: '$40000', approvedCoverage: '', approvedDeductible: '' },
      { key: 7, label: 'Ord/ Law Blanket Limits', coverageAmount: '$400,000', deductible: '$40000', approvedCoverage: '', approvedDeductible: '' },
      
    ],
  };

  // State to hold current table data based on selected location
  const [rowData, setRowData] = useState([]);

  const toggleEditing = () => setEditing(!editing);

  const handleFieldChange = (key, field, value) => {
    setRowData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, [field]: value } : item
      )
    );
  };

  // Update table data when location is selected
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setRowData(locationData[location] || []); // Set data based on selected location
  };

  const columns = [
    {
      title: '',
      dataIndex: 'label',
      render: (text) => <span className="header-label">{text}</span>,
    },
    {
      title: 'Client Requested Coverage Amount',
      dataIndex: 'coverageAmount',
      render: (text) => <span className="coverageAmount">{text}</span>,
      // render: (text, record) => (
      //   editing ? (
      //     <Input
      //       value={text}
      //       onChange={(e) => handleFieldChange(record.key, 'coverageAmount', e.target.value)}
      //     />
      //   ) : (
      //     text
      //   )
      // ),
    },
    {
      title: 'Client Requested Deductible',
      dataIndex: 'deductible',
      render: (text) => <span className="deductible">{text}</span>,
      // render: (text, record) => (
    
    
    },
    {
      title: 'Approved Coverage Amount',
      dataIndex: 'approvedCoverage',
      render: (text, record) => (
        editing ? (
          <Input
            value={text}
            onChange={(e) => handleFieldChange(record.key, 'approvedCoverage', e.target.value)}
          />
        ) : (
          text
        )
      ),
    },
    {
      title: 'Approved Deductible Amount',
      dataIndex: 'approvedDeductible',
      render: (text, record) => (
        editing ? (
          <Input
            value={text}
            onChange={(e) => handleFieldChange(record.key, 'approvedDeductible', e.target.value)}
          />
        ) : (
          text
        )
      ),
    },
  ];

  return (
    <div className={styles.container}>
    <div className="coverages-screen" id="coverages">
      {/* Location selection dropdown */}
      <span style={{ marginRight: "10px", fontSize: "18px" }}>Please select the location:</span>
      <Select
        placeholder="Select Location"
        onChange={handleLocationChange}
        style={{ width: 250, height: 50, marginTop: 40 }}
      >
        <Option value="Location 1">123-05 84th Avenue, Kew Gardens, NY 11415</Option>
        <Option value="Location 2">1234 Elm Street,Apt 101,California,90210,USA</Option>
      </Select>

      {/* Edit/Save button */}
      {selectedLocation && (
        <>
        <Row gutter={16}>
        <Col span={22}>
        </Col>
        <Col span={2}>
        
          <Button
            shape="circle"
            icon={editing ?<Tooltip title="Save"><SaveOutlined style={{ fontSize: "20px" }}  /> </Tooltip>  : <Tooltip title="Edit"><EditOutlined style={{ fontSize: "20px" }}/></Tooltip> }
            onClick={toggleEditing}
            style={{ marginBottom: 16, marginLeft: 16, fontSize: 20 }}
            
          >
            {editing ? '' : ''}
          </Button>
          </Col>
          </Row>
          {/* Table for the selected location */}
          <Table
            dataSource={rowData}
            columns={columns}
            pagination={false}
            size="small"
            className="custom-table-header"
            bordered
            style={{ marginTop: 2 }}
          />
        
      

      {/* UW Notes section */}
      <div style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Title level={4}>Notes:</Title>
        <Input.TextArea
          placeholder="Enter notes here"
          rows={4}
          style={{ marginTop: 10, width: '100%', border: '2px solid gray' }}
        />
      </div>
      <Row gutter={16}>
                        <Col span={20}></Col>
                        <Col span={4}>
                            <div >
                                <button type="submit"  onClick={onNext} style={{ width: "10rem", marginBottom: "1rem", marginTop: "1rem" }}><b>Next</b></button></div></Col>
                        {/*} <Col span={4}>
            <div >
            <button type="account" style={{width: "10rem"}} onClick={() => handleClick()}><b>Go To Account</b></button>
          </div></Col>*/}
                    </Row>
      </>
      )}
    </div>
    </div>
  );
};

export default Coverages;
