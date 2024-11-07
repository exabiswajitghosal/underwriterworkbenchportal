import React, { useState } from 'react';
import { Layout, Button, Table, Checkbox, Typography, message, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import FormInput from '../components/FormInput';
import DropdownSelect from '../components/FormDropdown';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;
const { Title } = Typography;

const SearchInsured = () => {
    // const [insuredType, setInsuredType] = useState('Individual');
    const [searchCriteria, setSearchCriteria] = useState({
        name: '',
        programName: null,
        productName: null,
        occupancyType: null,
        agencyName: '',
        primaryRisk: null,
        primaryRiskState: null
    });
    const [results, setResults] = useState([]);
    const [showNoResultsMessage, setShowNoResultsMessage] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setSearchCriteria((prev) => ({ ...prev, [id]: value }));
    };
    const performSearch = () => {
        // Sample data for testing
        const sampleData = [
            {
                account: 'Exasure',
                name: 'John Doe',
                type: 'Individual',
                address: '123 Main St',
                lobs: 'CP, GL',
                effective: '01/01/2024',
                expiry: '12/31/2024',
                status: 'Bound',
                city: 'New York',
                state: 'NY',
                programName: 'ayspre',
                productName: 'habitational_risk',
                occupancyType: 'office',
                primaryRiskState: 'new york',
                primaryRisk: 'commercial property'
            },
            {
                account: 'Exasure',
                name: 'John H',
                type: 'Individual',
                address: '123 Main St',
                lobs: 'CP, GL',
                effective: '01/01/2024',
                expiry: '12/31/2024',
                status: 'Bound',
                city: 'New York',
                state: 'NY',
                programName: 'pentium',
                productName: 'habitational_risk',
                occupancyType: 'office',
                primaryRiskState: 'new york',
                primaryRisk: 'commercial property'
            },
            {
                account: 'Exasure',
                name: 'Exavalu',
                type: 'Entity',
                address: '123 Main St',
                lobs: 'CP, GL',
                effective: '01/01/2024',
                expiry: '12/31/2024',
                status: 'Bound',
                city: 'New York',
                state: 'NY',
                programName: 'ayspre',
                productName: 'builders_risk',
                occupancyType: 'office',
                primaryRiskState: 'new york',
                primaryRisk: 'commercial property'
            }
        ];

        const filteredData = sampleData.filter((item) => {
            const nameMatch = !searchCriteria.name || item.name.toLowerCase().includes(searchCriteria.name.trim().toLowerCase());
            const programMatch = !searchCriteria.programName || item.programName === searchCriteria.programName;
            const productMatch = !searchCriteria.productName || item.productName === searchCriteria.productName;
            const occupancyMatch = !searchCriteria.occupancyType || item.occupancyType === searchCriteria.occupancyType;
            const agencyMatch = !searchCriteria.agencyName || item.agencyName?.toLowerCase().includes(searchCriteria.agencyName.trim().toLowerCase());
            const primaryRiskMatch = !searchCriteria.primaryRisk || item.primaryRisk === searchCriteria.primaryRisk;
            const primaryRiskStateMatch = !searchCriteria.primaryRiskState || item.primaryRiskState === searchCriteria.primaryRiskState;

            return nameMatch && programMatch && productMatch && occupancyMatch && agencyMatch && primaryRiskMatch && primaryRiskStateMatch;
        });

        setResults(filteredData);
        setShowNoResultsMessage(filteredData.length === 0);
        setSearchCriteria({
            name: '',
            programName: null,
            productName: null,
            occupancyType: null,
            agencyName: '',
            primaryRisk: null,
            primaryRiskState: null
        })
        if (filteredData.length === 0) {
            message.warning('No results found. Please try again.');
        }
    };

    const columns = [
        { title: 'Select', dataIndex: 'select', key: 'select', render: () => <Checkbox /> },
        { title: 'Account', dataIndex: 'account', key: 'account' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        { title: 'Current LOBs', dataIndex: 'lobs', key: 'lobs' },
        { title: 'Effective Date', dataIndex: 'effective', key: 'effective' },
        { title: 'Expiry Date', dataIndex: 'expiry', key: 'expiry' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
        { title: 'Action', key: 'action', render: () => <Button type="link" onClick={() => navigate('/accountinfo')}>View Account</Button> }
    ];

    return (
        <Layout>
            <Header style={{ background: '#fff', padding: '16px 0' }}>
                <Title level={2}>Search Insured</Title>
            </Header>
            <Content style={{ margin: '16px' }}>
                {/* <div className="insured-type">
                    <label htmlFor='insuredType'>Insured Type</label>
                    <br />
                    <Radio.Group
                        id='insuredType'
                        onChange={(e) => toggleInsuredFields(e.target.value)}
                        value={insuredType}
                        style={{ marginBottom: 16 }}
                    >
                        <Radio value="Individual">Individual</Radio>
                        <Radio value="Entity">Entity</Radio>
                    </Radio.Group>

                </div> */}

                {/* Conditional Fields Section */}

                <Row gutter={16} style={{ marginBottom: 16 }}>
                    <Col span={8}>
                        <FormInput
                            id="name"
                            label="Insured Name"
                            value={searchCriteria.name}
                            onChange={handleInputChange}
                            placeholder="Enter Insured Name"
                        />
                        {/* {insuredType === 'Individual' && (
                            <>
                                <FormInput
                                    id="firstName"
                                    label="First Name"
                                    value={searchCriteria.firstName}
                                    onChange={handleInputChange}
                                    placeholder="Enter First Name"
                                />
                                <FormInput
                                    id="middleName"
                                    label="Middle Name"
                                    value={searchCriteria.middleName}
                                    onChange={handleInputChange}
                                    placeholder="Enter Middle Name"
                                />
                                <FormInput
                                    id="lastName"
                                    label="Last Name"
                                    value={searchCriteria.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Enter Last Name"
                                />
                                <FormInput
                                    id="ssn"
                                    label="SSN"
                                    value={searchCriteria.ssn}
                                    onChange={handleInputChange}
                                    placeholder="Enter SSN"
                                />
                            </>
                        )}
                        {insuredType === 'Entity' && (
                            <>
                                <FormInput
                                    id="entityName"
                                    label="Entity/Business Name"
                                    value={searchCriteria.entityName}
                                    onChange={handleInputChange}
                                    placeholder="Enter Entity/Business Name"
                                />
                                <FormInput
                                    id="fein"
                                    label="FEIN"
                                    value={searchCriteria.fein}
                                    onChange={handleInputChange}
                                    placeholder="Enter FEIN"
                                />
                            </>
                        )} */}
                    </Col>
                </Row>
                <Row>
                    {/* General Search Criteria Fields */}
                    {/* <Col span={24}>
                        <FormInput
                            label="Address Line 1"
                            value={searchCriteria.addressLine1}
                            onChange={handleInputChange}
                            placeholder="Enter Address Line 1"
                        />
                        <FormInput
                            label="Address Line 2"
                            value={searchCriteria.addressLine1}
                            onChange={handleInputChange}
                            placeholder="Enter Address Line 2"
                        />
                        <FormInput
                            label="City"
                            value={searchCriteria.city}
                            onChange={handleInputChange}
                            placeholder="Enter City"
                        />
                        <FormInput
                            label="State"
                            value={searchCriteria.state}
                            onChange={handleInputChange}
                            placeholder="Enter State"
                        />
                        <FormInput
                            label="Country"
                            value={searchCriteria.country}
                            onChange={handleInputChange}
                            placeholder="Enter Country"
                        />
                    </Col> */}
                </Row>
                <Row gutter={16}>
                    <Col span={4}>
                        <label style={{ marginBottom: '17px' }}>Program Name</label>
                        <DropdownSelect
                            // label="Program Name"
                            id='programName'
                            value={searchCriteria.programName}
                            onChange={(value) => setSearchCriteria((prev) => ({ ...prev, programName: value }))}
                            placeholder="Select Program"
                            options={[
                                { label: "Ayspre", value: "ayspre" },
                                { label: "Pentium", value: "pentium" },
                                { label: "Impulse", value: "impulse" },
                                { label: "Archer", value: "archer" }
                            ]}
                        />
                    </Col>
                    <Col span={4}>
                        <label style={{ marginBottom: '17px' }}>Product Name</label>
                        <DropdownSelect
                            // label="Product Name"
                            id="productName"
                            value={searchCriteria.productName}
                            onChange={(value) => setSearchCriteria((prev) => ({ ...prev, productName: value }))}
                            placeholder="Select Product"
                            options={[
                                { label: "Habitational Risk", value: "habitational_risk" },
                                { label: "Builder's Risk", value: "builders_risk" },
                                { label: "Fine Arts", value: "fine_arts" },
                                { label: "Commercial Property", value: "commercial_property" }
                            ]}
                        />
                    </Col>
                    <Col span={4}>
                        <label style={{ marginBottom: '17px' }}>Occupancy Type</label>
                        <DropdownSelect
                            // label="Occupancy Type"
                            id="occupancyType"
                            value={searchCriteria.occupancyType}
                            onChange={(value) => setSearchCriteria((prev) => ({ ...prev, occupancyType: value }))}
                            placeholder="Select Occupancy Type"
                            options={[
                                { label: "Office", value: "office" },
                                { label: "Retail", value: "retail" },
                                { label: "Residential", value: "residential" },
                                { label: "Industrial/Manufacturing", value: "industrial/manufacturing" },
                                { label: "Warehouse/Storage", value: "warehouse/storage" },
                                { label: "Hospitality", value: "hospitality" },
                                { label: "Healthcare", value: "healthcare" },
                                { label: "Educational", value: "educational" },
                                { label: "Mixed-use", value: "mixed-use" },
                                { label: "Vacant or Unoccupied", value: "vacant or unoccupied" }
                            ]}
                        />
                    </Col>
                    <Col span={4}>
                        <FormInput
                        id="agencyName"
                            label="Agency Name"
                            value={searchCriteria.agencyName}
                            onChange={handleInputChange}
                            placeholder="Enter Agency Name"
                        />
                    </Col>
                    <Col span={4}>
                        <label style={{ marginBottom: '17px' }}>Primary Risk State</label>
                        <DropdownSelect
                            // label="Primary Risk State"
                            id="primaryRiskState"
                            value={searchCriteria.primaryRiskState}
                            onChange={(value) => setSearchCriteria((prev) => ({ ...prev, primaryRiskState: value }))}
                            placeholder="Select State"
                            options={[
                                { label: "New York", value: "new york" },
                                { label: "New Jersey", value: "new jersey" },
                                { label: "Texas", value: "texas" },
                                { label: "California", value: "california" }
                            ]}
                        />
                    </Col>
                    <Col span={4}>
                        <label style={{ marginBottom: '17px' }}>Primary Risk</label>
                        <DropdownSelect
                            // label="Primary Risk"
                            id="primaryRisk"
                            value={searchCriteria.primaryRisk}
                            onChange={(value) => setSearchCriteria((prev) => ({ ...prev, primaryRisk: value }))}
                            placeholder="Select Primary Risk"
                            options={[
                                { label: "Commercial Property", value: "commercial property" },
                                { label: "Commercial Auto", value: "commercial auto" },
                                { label: "Inland Marine", value: "inland marine" }
                            ]}
                        />
                    </Col>
                </Row>

                <Button type="primary" icon={<SearchOutlined />} onClick={performSearch} style={{ marginTop: 16, marginBottom: 16 }}>
                    Search
                </Button>

                <Table
                    columns={columns}
                    dataSource={results}
                    rowKey={(record) => record.account}
                    pagination={{ pageSize: 5 }}
                />

                {showNoResultsMessage && <p style={{ color: 'red' }}>No results found. Please try again.</p>}
                <h2>
                    Add LOB
                </h2>
                <Col span={6}>
                    <DropdownSelect
                        label="LOB"
                        options={[{ label: 'Commercial Property', value: 'cp' }, { label: 'Commercial Auto', value: 'ca' }, { label: 'General Liability', value: 'gl' }]}
                    />
                </Col>
                <Button type="primary" onClick={() => navigate('/createsubmission')} style={{ padding: '25px 75px', margin: '10px' }} >
                    Create Submission
                </Button>
                <Button type="primary" onClick={() => navigate('/accountinfo')} style={{ padding: '25px 75px', margin: '10px' }}>
                    Clearance Information
                </Button>
            </Content>
        </Layout >
    );
};

export default SearchInsured;
