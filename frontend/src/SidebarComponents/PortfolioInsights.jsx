import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const { Title, Text } = Typography;

// Sample data - replace with your actual data
const yearlyData = [
  { year: '2017', premium: 23000, margin: 34 },
  { year: '2018', premium: 29000, margin: 42 },
  { year: '2019', premium: 31000, margin: 38 },
  { year: '2020', premium: 27000, margin: 24 },
  { year: '2021', premium: 35000, margin: 32 },
  { year: '2022', premium: 34000, margin: 19.2 },
];

const productData = [
  { name: 'Product 01', value: 40 },
  { name: 'Product 02', value: 25 },
  { name: 'Product 03', value: 20 },
  { name: 'Product 04', value: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PortfolioInsights = () => {
  return (
    <div style={{ padding: '1.5rem' }}>
      {/* Top Row - Premium Graph */}
      <Row gutter={[16, 16]}>
        <Col span={15}>
          <Card
            style={{
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              background: 'linear-gradient(to right, #1890ff, #40a9ff)',
              color: 'white',
              padding: '1rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <Title level={5} style={{ color: 'white' }}>Written Premium By Year</Title>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={yearlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" stroke="white" />
                <YAxis type="number" domain={[0, 'dataMax']} stroke="white" />
                <Tooltip />
                <Bar dataKey="premium" fill="#ffffff" />
                <Bar dataKey="margin" fill="#ff4d4f" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={9}>
          <Card
            style={{
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              background: 'linear-gradient(to right, #1890ff, #40a9ff)',
              color: 'white',
              padding: '1rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <Title level={5} style={{ color: 'white' }}>Product Distribution</Title>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={productData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="white"
                >
                  {productData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      {/* Bottom Row - Key Metrics */}
      <Row gutter={[16, 16]} style={{ marginTop: '1rem' }}>
        {/* Products List */}
        <Col xs={24} md={8}>
          <Card
            style={{
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              background: 'linear-gradient(to right, #1890ff, #40a9ff)',
              color: 'white',
              padding: '1rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <Title level={5} style={{ color: 'white' }}>Products</Title>
            </div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>Commercial Automobile</li>
              <li style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>Cyber Liability</li>
              <li style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>Commercial Package Policy (CPP)</li>
              <li style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>General Liability</li>
              <li style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>Workers Compensation</li>
            </ul>
          </Card>
        </Col>

        {/* Statistics */}
        <Col xs={24} md={8}>
          <Card
            style={{
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
              background: 'linear-gradient(to right, #1890ff, #40a9ff)',
              color: 'white',
              padding: '1rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <Title level={5} style={{ color: 'white' }}>Key Metrics</Title>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <p style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#ffffff' }}>$151,367,801</p>
                <Text type="secondary" style={{ color: '#e6f7ff' }}>Written Premium</Text>
              </div>
              <div>
                <p style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#ffffff' }}>43,358</p>
                <Text type="secondary" style={{ color: '#e6f7ff' }}>Policy Count</Text>
              </div>
              <div>
                <p style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#ffffff' }}>63.99%</p>
                <Text type="secondary" style={{ color: '#e6f7ff' }}>Hit Ratio</Text>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PortfolioInsights;