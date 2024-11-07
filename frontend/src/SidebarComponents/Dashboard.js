import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Chart } from 'chart.js/auto';
import { Table, Button, Space, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import './Dashboard.css';
import './Table.css';

const data = {
  myteamscases: [
    { id: '001', client: 'Client A', lob: 'Commercial Auto', status: 'Clearance UW', substatus: 'Senior UW', limit: '$500,000', date: '2024-08-20', underwriter: 'John Doe', priority: 'High' },
    { id: '002', client: 'Client B', lob: 'Professional Liability', status: 'Clearance UW', substatus: 'Senior UW', limit: '$250,000', date: '2024-08-18', underwriter: 'Jane Smith', priority: 'Medium' }
  ],
  myassignedcases: [
    { id: '003', client: 'Client C', lob: 'Commercial Auto', status: 'Open', limit: '$300,000', date: '2024-08-19', underwriter: 'John Doe', priority: 'Low' },
    { id: '004', client: 'Client D', lob: 'Commercial Property', status: 'UW Review', limit: '$900,000', date: '2024-08-16', underwriter: 'John Doe', priority: 'High' },
    { id: '005', client: 'Client E', lob: 'Commercial Auto', status: 'Clearance Review', substatus: 'Clarification', limit: '$500,000', date: '2024-08-12', underwriter: 'John Doe', priority: 'Low' }
  ],
  senttobroker: [
    { id: '006', client: 'Client E', lob: 'Professional Liability', status: 'Broker Review', substatus: 'Document', limit: '$450,000', date: '2024-08-17', underwriter: 'Charlie Black', priority: 'Medium' },
    { id: '007', client: 'Client F', lob: 'Commercial Auto', status: 'Broker Review', substatus: 'Quote', limit: '$100,000', date: '2024-08-09', underwriter: 'Charlie Black', priority: 'High' }
  ],
  close: [
    { id: '009', client: 'Client F', lob: 'Professional Liability', status: 'Approved', limit: '$700,000', date: '2024-08-10', underwriter: 'Daisy White', priority: 'Low' },
    { id: '010', client: 'Client I', lob: 'Commercial Auto', status: 'Rejected', limit: '$300,000', date: '2024-08-11', underwriter: 'Daisy White', priority: 'High' }
  ]
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);

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
          <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button type="link" size="small" onClick={() => close()}>
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
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
  const policiesChartRef = useRef(null);
  const submissionsChartRef = useRef(null);
  const donutChartRef = useRef(null);

  useEffect(() => {
    createBarChart(policiesChartRef, 'Policies Issued', ['Auto', 'Property', 'Liability', 'Health', 'Life'], [30, 25, 40, 35, 20]);
    createBarChart(submissionsChartRef, 'Submission in Progress', ['Auto', 'Property', 'Liability', 'Health', 'Life'], [15, 18, 22, 20, 17]);
    createDonutChart();

    return () => {
      [policiesChartRef, submissionsChartRef, donutChartRef].forEach(ref => {
        if (ref.current) ref.current.chartInstance.destroy();
      });
    };
  }, []);

  const createBarChart = (chartRef, title, labels, data) => {
    const ctx = chartRef.current.getContext('2d');
    chartRef.current.chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{ label: title, data, backgroundColor: '#36A2EB' }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } },
      },
    });
  };

  const createDonutChart = () => {
    const ctx = donutChartRef.current.getContext('2d');
    donutChartRef.current.chartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['New Business', 'Renewal Premium'],
        datasets: [{ data: [700, 300], backgroundColor: ['#FF6384', '#FFCE56'] }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
      },
    });
  };

  const handleRowClick = (record) => {
    navigate('/accountinfo', { state: { account: record } });
  };

  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const handleNewSubmission = (record) => {
    console.log("New Submission data:", record);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'client',
      key: 'client',
      ...getColumnSearchProps('client'),
      filters: [...new Set(data.myteamscases.concat(data.myassignedcases, data.senttobroker, data.close).map(item => ({ text: item.client, value: item.client })))],
      filteredValue: filteredInfo.client || null,
      onFilter: (value, record) => record.client.includes(value),
    },
    {
      title: 'LOB',
      dataIndex: 'lob',
      key: 'lob',
      ...getColumnSearchProps('lob'),
      filters: [...new Set(data.myteamscases.concat(data.myassignedcases, data.senttobroker, data.close).map(item => ({ text: item.lob, value: item.lob })))],
      filteredValue: filteredInfo.lob || null,
      onFilter: (value, record) => record.lob.includes(value),
    },
    { title: 'Limit', dataIndex: 'limit', key: 'limit' },
    { title: 'Status', dataIndex: 'status', key: 'status', ...getColumnSearchProps('status') },
    { title: 'Sub-Status', dataIndex: 'substatus', key: 'substatus' },
    { title: 'Date Submitted', dataIndex: 'date', key: 'date', sorter: (a, b) => new Date(a.date) - new Date(b.date), sortOrder: sortedInfo.columnKey === 'date' ? sortedInfo.order : null },
    { title: 'Underwriter', dataIndex: 'underwriter', key: 'underwriter', ...getColumnSearchProps('underwriter') },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      filters: [{ text: 'High', value: 'High' }, { text: 'Medium', value: 'Medium' }, { text: 'Low', value: 'Low' }],
      filteredValue: filteredInfo.priority || null,
      onFilter: (value, record) => record.priority.includes(value),
      // Render with custom styles based on priority level
      // render: (priority) => {
      //   let backgroundColor;
      //   if (priority === 'High') backgroundColor = '#ff4d4f';    // Red
      //   else if (priority === 'Medium') backgroundColor = '#fa8c16'; // Orange
      //   else if (priority === 'Low') backgroundColor = '#28a745';   // Green
  
      //   return (
      //     <span
      //     style={{
      //       backgroundColor,
      //       color: 'black',
      //       padding: '6px 12px',
      //       borderRadius: '4px',
      //       display: 'inline-block',
      //       minWidth: '80px',    // Fixed width for uniformity
      //       textAlign: 'center', // Centers text within the box
      //     }}
      //   >
      //       {priority}
      //     </span>
      //   );
      // },
    },
    {
      title: 'New Submission',
      key: 'newSubmission',
      render: (_, record) => (
        <Button type="primary" onClick={() => handleNewSubmission(record)}>
          <div style={{ fontSize: '12px' }}>
            New Submission
          </div>
        </Button>
      ),
    }
  ];

  const combinedData = [
    ...data.myteamscases,
    ...data.myassignedcases,
    ...data.senttobroker,
    ...data.close
  ];

  return (
    <div className="content">
      <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '5px', flexWrap: 'nowrap' }}>
        <div className="chart-container" style={{ width: '23%', flexDirection: 'column' }}>
          <div style={{ textAlign: 'center', fontSize: '16px', marginBottom: '5px' }}>Policies Issued</div>
          <canvas ref={policiesChartRef} style={{ maxHeight: '200px', width: '100%' }}></canvas>
        </div>
        <div className="chart-container" style={{ width: '23%', flexDirection: 'column' }}>
          <div style={{ textAlign: 'center', fontSize: '16px', marginBottom: '5px' }}>Submission in Progress</div>
          <canvas ref={submissionsChartRef} style={{ maxHeight: '200px', width: '100%' }}></canvas>
        </div>
        <div className="chart-container" style={{ width: '23%', flexDirection: 'column' }}>
          <div style={{ textAlign: 'center', fontSize: '16px', marginBottom: '5px' }}>New Business vs Renewal Premium $</div>
          <canvas ref={donutChartRef} style={{ maxHeight: '200px', width: '100%' }}></canvas>
        </div>
        <div className="chart-container" style={{ width: '23%', flexDirection: 'column' }}>
          <div style={{ textAlign: 'center', fontSize: '16px', marginBottom: '5px' }}>Map</div>
          <img src="./usa.svg" alt="Map of USA" style={{ width: '100%', height: '70%', objectFit: 'contain' }} />
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={combinedData}
        onChange={handleChange}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
        pagination={{ pageSize: 5 }}
      />
      <Button type="primary" onClick={() => navigate('/submission')}>Submission</Button>
    </div>
  );
};

export default Dashboard;
