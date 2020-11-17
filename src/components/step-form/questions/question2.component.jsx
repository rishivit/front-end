import React, { Component } from 'react'
import { Button, Card, Col,Divider, Form, Input, Layout, Row, Space, Typography } from 'antd';
import {ArrowRightOutlined,CheckOutlined} from '@ant-design/icons';
import '../index.styles.scss';

const { Title } = Typography;

export class Question2Component extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const {values, handleChange } = this.props;
        return (
            <>
            <div className='question-card-component'>

            <Title level={4} style={{textAlign: "left"}}> 2 <ArrowRightOutlined /> What is the Art Direction for? </Title>
            <Divider orientation="left"></Divider>
                <Row gutter={16} style= {{ padding: '0px 0px 20px 0px'}}>
                <Col span={6}>
                    <Card title="Packaging" hoverable={true} style={{ height: 200}}>
                        Product Packaging
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Poster" hoverable={true} style={{ height: 200}}>
                    Poster or Infographic
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Brand Identity" hoverable={true} style={{ height: 200}}>
                    Brand Identity
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Marketing" hoverable={true} style={{ height: 200}}>
                    Online Marketing
                    </Card>
                </Col>
                </Row>

                <Space >
                <Button
                type="primary"
                onClick={this.continue}>
                    Continue
                </Button>

                <Button
                onClick={this.back}>
                    Back
                </Button>
                </Space>
            </div>
            </>
        )
    }
}

export default Question2Component;
