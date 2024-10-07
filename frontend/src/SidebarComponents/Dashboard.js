import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import './Dashboard.css';
import "./Table.css";

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
  const [selectedGrid, setSelectedGrid] = useState([]);
  const chartRef = useRef(null); // Reference to the canvas element
  let myPieChartInstance = useRef(null); // Reference to store chart instance

  // Function to create the Pie Chart
  const createPieChart = () => {
    const ctx = chartRef.current.getContext('2d');

    // If chart already exists, destroy it before creating a new one
    if (myPieChartInstance.current) {
      myPieChartInstance.current.destroy();
    }

    // Create the new Pie Chart
    myPieChartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['My Teams Cases', 'My Assigned Cases', 'Sent to Broker', 'Closed'],
        datasets: [{
          data: [40, 25, 5, 10],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      }
    });
  };

  useEffect(() => {
    createPieChart();

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (myPieChartInstance.current) {
        myPieChartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array to run the effect only once after the component mounts

  const showGrid = (type) => {
    setSelectedGrid(data[type]);
  };

  return (
    <div className="content">
      <div style={{ display: 'flex' }}>
        <div className="dashboard-card-container">
          <div className="dashboardcard" onClick={() => showGrid('myteamscases')}>
            <h3>My Teams Cases</h3>
            <p>(40)</p>
          </div>
          <div className="dashboardcard" onClick={() => showGrid('myassignedcases')}>
            <h3>My Assigned Cases</h3>
            <p>(25)</p>
          </div>
          <div className="dashboardcard" onClick={() => showGrid('senttobroker')}>
            <h3>Sent to Broker</h3>
            <p>(5)</p>
          </div>
          <div className="dashboardcard" onClick={() => showGrid('close')}>
            <h3>Closed</h3>
            <p>(10)</p>
          </div>
        </div>
        <div className="chart-container"  style={{border: '2px solid grey', padding:'5px',marginLeft:'120px'}}>
          <canvas id="myPieChart" ref={chartRef}></canvas>
        </div>
      </div>

      <div className="main-content">
        <div className="grid-container">
          <table>
            <thead>
              <tr>
                <th>Case ID</th>
                <th>Client Name</th>
                <th>LOB</th>
                <th>Limit</th>
                <th>Status</th>
                <th>Sub-Status</th>
                <th>Date Submitted</th>
                <th>Underwriter</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              {selectedGrid.map((row, index) => (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.client}</td>
                  <td>{row.lob}</td>
                  <td>{row.limit}</td>
                  <td>{row.status}</td>
                  <td>{row.substatus || 'N/A'}</td>
                  <td>{row.date}</td>
                  <td>{row.underwriter}</td>
                  <td><div className={`priority-box ${row.priority.toLowerCase()}`}>{row.priority}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
