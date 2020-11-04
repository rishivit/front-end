import React from 'react';
import { Layout, Menu } from 'antd';
import { Row, Col } from 'antd';
import './navigation.styles.scss';

const { Header } = Layout;

const NavigationComponent = () => {
    return (
        <Layout className="layout">
            <Header>
            <Row>
                <Col span={18}></Col>
                <Col span={6}>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><a href="#home" > Home </a></Menu.Item>
                    <Menu.Item key="2"><a href="#login" > Login/Register </a></Menu.Item>
                    <Menu.Item key="3"><a href="#about" > About Us </a></Menu.Item>
                    <Menu.Item key="4"><a href="#question" > Questionnaire </a></Menu.Item>
                    </Menu>
                </Col>
            </Row>
            </Header>
        </Layout>
    );
}

export default NavigationComponent;