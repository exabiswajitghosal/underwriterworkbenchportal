import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from "react-router-dom";

import Dashboard from './SidebarComponents/Dashboard';
import DocumentScreen from './SidebarComponents/DocumentScreen';
import ClearanceScreen from './SidebarComponents/ClearanceScreen';
import SearchInsured from './SidebarComponents/SearchInsured';
import { MenuFoldOutlined, MenuUnfoldOutlined, SettingFilled, HomeOutlined, InfoCircleOutlined, EditFilled, FileTextOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import HeaderDesign from './layout/HeaderDesign';

import { Divider } from 'antd';
import Sublob2 from './layout/Sublob2';
import AuditTrail from './SidebarComponents/AuditTrail';
import AccountInfo from './SidebarComponents/AccountInfo';
import AccountDashboard from './SidebarComponents/AccountDashboard';
import Login from './layout/Login';

const { Sider, Content, Footer } = Layout;

const MyMenu = ({ collapsed }) => {
  const location = useLocation();

  const pathToKey = {
    '/dashboard': '1',
    '/accountdashboard': '2',
    '/accountinfo': '3',
    '/createsubmission': '4',
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[pathToKey[location.pathname] || '1']}
    >
      <Menu.Item key="1" icon={<HomeOutlined />} title={"Dashboard"}>
        {!collapsed ? <Link to="/dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link> : <Link to="/dashboard" style={{ textDecoration: 'none' }}/>}
      </Menu.Item>
      <Menu.Item key="2" icon={<InfoCircleOutlined />} title={"Account Information"}>
        {!collapsed ? <Link to="/accountdashboard" style={{ textDecoration: 'none' }}>Account Information</Link> : <Link to="/accountdashboard" style={{ textDecoration: 'none' }}/>}
      </Menu.Item>
      <Menu.Item key="3" icon={<FileTextOutlined />} title={"Account Details"}>
        {!collapsed ? <Link to="/accountinfo" style={{ textDecoration: 'none' }}>Account Details</Link> : <Link to="/accountinfo" style={{ textDecoration: 'none' }}/>}
      </Menu.Item>
      <Menu.Item key="4" icon={<EditFilled />} title={"Create Submission"}>
        {!collapsed ? <Link to="/createsubmission" style={{ textDecoration: 'none' }}>Create Submission</Link> : <Link to="/createsubmission" style={{ textDecoration: 'none' }}/>}
      </Menu.Item>
    </Menu>
  );
};

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();

  const isLoginPage = location.pathname === '/';

  return (
    <Layout>
      {!isLoginPage && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ backgroundColor: '#2457d3', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined style={{ color: "white" }} /> : <MenuFoldOutlined style={{ color: "white" }} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '46px',
              width: '50px',
              height: '60px',
            }}
          />
          {!collapsed && <h4 style={{ color: 'white', textAlign: 'center' }}>Underwriting Workbench</h4>}
          <Divider
            variant="dotted"
            style={{
              borderColor: 'black',
              width: '100%',
            }}
          />
          <div className="demo-logo-vertical" />
          <MyMenu collapsed={collapsed} />
        </Sider>
      )}
      <Layout>
        {!isLoginPage && <HeaderDesign />}
        <Content
          style={{
            margin: '5px 9px',
            padding: 24,
            minHeight: 560,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="createsubmission" element={<Sublob2 />} />
            <Route path="audit-trail" element={<AuditTrail />} />
            <Route path="accountdashboard" element={<AccountDashboard />} />
            <Route path="accountinfo" element={<AccountInfo />} />
            <Route path="documentscreen" element={<DocumentScreen />} />
            <Route path="clearancescreen" element={<ClearanceScreen />} />
            <Route path="searchinsured" element={<SearchInsured />} />
          </Routes>
        </Content>
        {!isLoginPage && (
          <Footer style={{ textAlign: 'center' }}>
            Underwriter Workbench {new Date().getFullYear()}
          </Footer>
        )}
      </Layout>
    </Layout>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
