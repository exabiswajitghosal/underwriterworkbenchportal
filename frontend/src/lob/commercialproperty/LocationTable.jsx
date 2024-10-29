import React, { useRef, useState } from 'react';
import { Button, Space, Table, Input, Row, Col, Form, Modal, Select } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import MapView from './Map';
import LocationCard from './LocationCard';
import styles from './LocationComponent.module.css';
import '../../components/TableStyles.css';

const { Option } = Select;

const LocationTable = () => {
  const [data, setData] = useState([]);
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [selectionType] = useState('radio');
  const [selectedRow, setSelectedRow] = useState(null);
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const searchInput = useRef(null);

  const usStates = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 
    'Wisconsin', 'Wyoming'
  ];

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => { close(); }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const rowSelection = {
    type: selectionType,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRow(selectedRows[0]);
    },
  };

  const columns = [
    // {
    //   title: 'Location',
    //   dataIndex: 'location',
    //   key: 'location',
    //   ...getColumnSearchProps('location'),
    //   sorter: (a, b) => a.location.length - b.location.length,
    //   sortOrder: sortedInfo.columnKey === 'location' ? sortedInfo.order : null,
    //   ellipsis: true,
    // },
    {
      title: 'AddressLine 1',
      dataIndex: 'address1',
      key: 'address1',
      ...getColumnSearchProps('address1'),
      sorter: (a, b) => a.address1.length - b.address1.length,
      sortOrder: sortedInfo.columnKey === 'address1' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'AddressLine 2',
      dataIndex: 'address2',
      key: 'address2',
      ...getColumnSearchProps('address2'),
      sorter: (a, b) => a.address2?.length - b.address2?.length,
      sortOrder: sortedInfo.columnKey === 'address2' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      ...getColumnSearchProps('state'),
      sorter: (a, b) => a.state.length - b.state.length,
      sortOrder: sortedInfo.columnKey === 'state' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'ZIP',
      dataIndex: 'zip',
      key: 'zip',
      ...getColumnSearchProps('zip'),
      sorter: (a, b) => a.zip.length - b.zip.length,
      sortOrder: sortedInfo.columnKey === 'zip' ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      ...getColumnSearchProps('country'),
      sorter: (a, b) => a.country.length - b.country.length,
      sortOrder: sortedInfo.columnKey === 'country' ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(values => {
        form.resetFields();
        const newData = [...data, { key: data.length + 1, ...values }];
        setData(newData);
        setCurrentRowIndex(currentRowIndex + 1);
        setIsModalVisible(false);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={`${styles.container} tableContainer`}>
      <Row gutter={16} style={{ marginBottom: 8, marginTop: 8 }}>
        <Col span={24}>
          <Button type="primary" onClick={showModal}>
            Add Location
          </Button>
        </Col>
      </Row>
      <Row gutter={16} style={{ flexGrow: 1, width: "100%" }}>
        <Col span={selectedRow ? 14 : 24} style={{ width: '100%' }}>
          <Table
            rowSelection={{ ...rowSelection }}
            columns={columns}
            dataSource={data}
            onChange={handleChange}
            style={{ width: '100%' }}
            pagination={{ pageSize: 4 }}
            className="custom-table-header"
            tableLayout="fixed"
          />
        </Col>

        {selectedRow && (
          <>
            <Col span={10}>
              <MapView />
            </Col>
            <Col span={14} style={{ marginTop: 16 }}>
              <LocationCard />
            </Col>
            <Col span={10} style={{ marginTop: 16 }}>
              <div
                className={styles.widgetBox}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  height: '320px',
                  width:"480px"
                }}
              >
                <h2 className={styles.blinkingText}>Red Flags!</h2>
                <h3>e.g. High flood risk</h3>
              </div>
            </Col>
          </>
        )}
      </Row>

      <Modal
        title="Add Location"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          {/* <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, message: 'Please input the location!' }]}
          >
            <Input />
          </Form.Item> */}
          <Form.Item
            name="address1"
            label="AddressLine 1"
            rules={[{ required: true, message: 'Please input Address Line 1!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="address2"
            label="AddressLine 2"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="state"
            label="State"
            rules={[{ required: true, message: 'Please select the state!' }]}
          >
            <Select placeholder="Select a state">
              {usStates.map(state => (
                <Option key={state} value={state}>
                  {state}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="zip"
            label="ZIP"
            rules={[{ required: true, message: 'Please input the ZIP code!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="country"
            label="Country"
            initialValue="USA"
          >
            <Input disabled />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default LocationTable;
