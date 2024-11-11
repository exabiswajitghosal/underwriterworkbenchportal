import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from './SidebarComponents/Dashboard'
import DocumentScreen from './SidebarComponents/DocumentScreen';
import ClearanceScreen from './SidebarComponents/ClearanceScreen';
import SearchInsured from './SidebarComponents/SearchInsured';
import {  MenuFoldOutlined,  MenuUnfoldOutlined,SettingFilled, HomeOutlined, AuditOutlined, InfoCircleOutlined,} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import HeaderDesign from './layout/HeaderDesign';

import { Divider } from 'antd'
import { Link } from 'react-router-dom';
import Sublob2 from './layout/Sublob2';
import AuditTrail from './SidebarComponents/AuditTrail';
import AccountInfo from './SidebarComponents/AccountInfo';
import AccountDashboard from './SidebarComponents/AccountDashboard';
const { Sider, Content, Footer } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: '#2457d3', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined style={{ color: "white" }} /> : <MenuFoldOutlined style={{ color: "white" }} />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '46px',
              width: '50px', height: '60px'
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
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              {!collapsed ? <Link to="/">Dashboard</Link> : ''}
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingFilled />} >
              {!collapsed ? <Link to="/submission">Submission</Link> : ''}
            </Menu.Item>
            {/* <Menu.Item key="3" icon={<AuditOutlined />}>
              {!collapsed ? <Link to="/audit-trail">Audit Trail</Link> : ''}
            </Menu.Item> */}
            <Menu.Item key="3" icon={<InfoCircleOutlined />}>
              {!collapsed ? <Link to="/accountdashboard">Account Dashboard</Link> : ''}
            </Menu.Item>
            <Menu.Item key="4" icon={<InfoCircleOutlined />}>
              {!collapsed ? <Link to="/accountinfo">Account Details</Link> : ''}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <HeaderDesign />
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
              <Route exact path="/" element={<Dashboard />} />

              {/* Define other routes for different screens */}
              <Route path="createsubmission" element={<Sublob2 />} />
              <Route path="audit-trail" element={<AuditTrail />} />
              <Route path="accountdashboard" element={<AccountDashboard />} />
              <Route path="accountinfo" element={<AccountInfo />} />
              <Route path="documentscreen" element={<DocumentScreen />} />
              <Route path="clearancescreen" element={<ClearanceScreen />} />
              <Route path='submission' element={<SearchInsured />} />
              {/* <PolicyCards /> */}
              {/* <Sublob /> */}
              {/* <Outlet /> */}
            </Routes>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Underwriter Workbench  {new Date().getFullYear()}
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};
export default App;