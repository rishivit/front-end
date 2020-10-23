import React from 'react';
import { Layout, Menu } from 'antd';
import './navigation.css';

const { Header } = Layout;

const Navigation = () => {
    return (
        <Layout className="layout">
            <Header>
            <div className="navplace" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2">Login/Register</Menu.Item>
                <Menu.Item key="3">About us </Menu.Item>
            </Menu>
            </Header>
        </Layout>
    );
}

export default Navigation;