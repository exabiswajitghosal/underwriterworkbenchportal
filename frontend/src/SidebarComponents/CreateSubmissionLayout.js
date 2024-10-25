import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SettingFilled,
    HomeOutlined,
    AuditOutlined,
    InfoCircleOutlined,
    FileAddOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import HeaderDesign from '../layout/HeaderDesign';

import { Divider } from 'antd';
import { Link, Outlet } from 'react-router-dom'; 
import Sublob from '../layout/Sublobs';
import CreateSubmission from './CreateSubmission';
import Sublob2 from '../layout/Sublob2';

const { Header, Sider, Content, Footer } = Layout;

const CreateSubmissionLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [showCreateSubmission, setShowCreateSubmission] = useState(true); // Add state to control visibility of CreateSubmission
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
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
                        height: '60px'
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

                <Menu theme="dark" mode="inline"  >
                    
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        {!collapsed ? <Link to="/dashboard">Dashboard</Link> : ''}
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FileAddOutlined />}>
                        {!collapsed ? <Link to="/createsubmission">Create Submission</Link> : ''}
                    </Menu.Item>
                    <Menu.Item key="3" icon={<AuditOutlined />}>
                        {!collapsed ? <Link to="/audit-trail">Audit Trail</Link> : ''}
                    </Menu.Item>
                    <Menu.Item key="4" icon={<InfoCircleOutlined />}>
                        {!collapsed ? <Link to="/accountinfo">Account Information</Link> : ''}
                    </Menu.Item>
                    <Menu.Item key="5" icon={<SettingFilled />}>
                        {!collapsed ? <Link to="/createsubmission">Create Submission</Link> : ''}
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
                    {/* Removed PolicyCards component */}
                    {/* Keeping AccountInfo and other components */}
                    {/*showCreateSubmission && <CreateSubmission />*/}
                    <Sublob2/>
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Underwriter Portal {new Date().getFullYear()} 
                </Footer>
            </Layout>
        </Layout>
    );
};

export default CreateSubmissionLayout;