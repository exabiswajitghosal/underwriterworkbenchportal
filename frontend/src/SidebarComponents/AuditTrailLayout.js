import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined, SettingFilled, HomeOutlined, AuditOutlined, InfoCircleOutlined, SearchOutlined, FileAddOutlined,
    VideoCameraOutlined, BellTwoTone
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import HeaderDesign from '../layout/HeaderDesign';

import { Divider } from 'antd'

import { Col, Row } from 'antd';
import { Link, Outlet } from 'react-router-dom'; 

import AuditTrail from './AuditTrail';

const { Header, Sider, Content, Footer } = Layout;
const AuditTrailLayoutDesign = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        
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

                <Menu theme="dark" mode="inline"  >
                    
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        {!collapsed ? <Link to="/dashboard">Dashboard</Link> : ''}
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FileAddOutlined />}>
                        {!collapsed ? <Link to="/submission">Create Submission</Link> : ''}
                    </Menu.Item>
                    <Menu.Item key="3" icon={<AuditOutlined />}>
                        {!collapsed ? <Link to="/audit-trail">Audit Trail</Link> : ''}
                    </Menu.Item>
                    <Menu.Item key="4" icon={<InfoCircleOutlined />}>
                        {!collapsed ? <Link to="/accountinfo">Account Information</Link> : ''}
                    </Menu.Item>
                    <Menu.Item key="5" icon={<SettingFilled />}>
                        {!collapsed ? <Link to="/createsubmission">Submission</Link> : ''}
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
                  
                    <AuditTrail/>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                   UW Portal {new Date().getFullYear()} 
                </Footer>
                
            </Layout>
        </Layout>
    );
};
export default AuditTrailLayoutDesign;