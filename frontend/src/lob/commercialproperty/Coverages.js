import React, { useState } from 'react';
import { Table, Input, Typography } from 'antd';
const { Text, Title } = Typography;
const Coverages = () => {

    const [editingRow, setEditingRow] = useState(null);
    const [rowData, setRowData] = useState([
        { key: 1, label: 'Property damage', coverageAmount: '', deductible: '', approvedCoverage: '', approvedDeductible: '', override: true },
        { key: 2, label: 'Annual Rental and Fees', coverageAmount: '', deductible: '', approvedCoverage: '', approvedDeductible: '', override: true},
        { key: 3, label: 'Flood Coverages', coverageAmount: '', deductible: '', approvedCoverage: '', approvedDeductible: '', override: true },
        { key: 4, label: 'Earthquake coverage', coverageAmount: '', deductible: '', approvedCoverage: '', approvedDeductible: '', override: true },
        { key: 5, label: 'Ord/Law Blanket Limits', coverageAmount: '', deductible: '', approvedCoverage: '', approvedDeductible: '', override: true },
        { key: 6, label: 'BPP Limit', coverageAmount: '', deductible: '', approvedCoverage: '', approvedDeductible: '', override: true },
    ]);

    // const toggleEditMode = (index) => {
    //     setEditableRows((prevState) => ({
    //         ...prevState,
    //         [index]: !prevState[index],
    //     }));
    // };

    const handleInputChange = (e, rowIndex, fieldName) => {
        const newData = [...rowData];
        newData[rowIndex][fieldName] = e.target.value;
        setRowData(newData);
    };

    // Define columns for the Ant Design table
    const columns = [
        {
            title: '',
            dataIndex: 'label',
            render: (text) => <span className="header-label">{text}</span>,
        },
        {
            title: 'Client Requested Coverage Amount',
            dataIndex: 'coverageAmount',
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
            title: 'Client Requested Deductible',
            dataIndex: 'deductible',
            render: (text, record) => (
                editingRow === record.key ? (
                  <Input
                    value={text}
                    onChange={(e) => handleFieldChange(record.key, 'deductible', e.target.value)}
                  />
                ) : (
                  text
                )
              ),
            },
        {
            title: 'Approved Coverage Amount',
            dataIndex: 'approvedCoverage',
            render: (text, record) => (
                editingRow === record.key ? (
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
                editingRow === record.key ? (
                  <Input
                    value={text}
                    onChange={(e) => handleFieldChange(record.key, 'approvedDeductible', e.target.value)}
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
    const toggleEditRow = (key) => {
        if (editingRow === key) {
          setEditingRow(null); // Save changes and exit edit mode
        } else {
          setEditingRow(key); // Enter edit mode for the selected row
        }
      };
    
      // Updates data for the specific row and field
      const handleFieldChange = (key, field, value) => {
        setRowData((prevData) =>
          prevData.map((item) =>
            item.key === key ? { ...item, [field]: value } : item
          )
        );
      };
    
    return (
        <div className="coverages-screen" id="coverages">
            <h5 style={{ textAlign: 'center', backgroundColor: '#1d4ed8', color: 'white', padding: '5px', borderRadius: '5px', marginTop: '20px' }}>Location 1</h5>
           
              <Table
        dataSource={rowData}
        columns={columns}
        pagination={false}
        size="small"
        className="custom-table-header"
        bordered
        style={{ marginTop: 30 }}
      />


            <h5 style={{ textAlign: 'center', backgroundColor: '#1d4ed8', color: 'white', padding: '5px', borderRadius: '5px', marginTop: '20px' }}>Location 2</h5>
            <Table
        dataSource={rowData}
        columns={columns}
        pagination={false}
        size="small"
        className="custom-table-header"
        bordered
        style={{ marginTop: 30 }}
      />

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

export default Coverages;
