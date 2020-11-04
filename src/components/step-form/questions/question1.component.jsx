import React, { Component } from 'react'
import { Button, Card, Col, Divider, Form, Input, Layout, Row, Typography, Space } from 'antd';
import {ArrowRightOutlined,CheckOutlined} from '@ant-design/icons';
import '../index.styles.scss';

const { Title, Text } = Typography;

export class Question1Component extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange } = this.props;
        return (
            <>
            <div className='question-card-component'> 
                <Title level={3}> 1 <ArrowRightOutlined /> How can we help you? </Title>
                <Form.Item 
                    label="Answer 1"
                    name="answer1"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your answer!',
                    },
                    ]}
                    onChange = {handleChange('ques1')}
                    defaultValue ={values.ques1}
                >
                    <Input />
                </Form.Item>

                {/* <Title level={4} style={{textAlign: "center"}}> 1 <ArrowRightOutlined /> How can we help you? </Title>
                <Divider orientation="left"></Divider>
                    <Row gutter={16} justify="center">
                    <Col span={4}>
                        <Card title="Art Direction" hoverable={true}>
                        Art Direction
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card title="Web" hoverable={true}>
                        Website Production
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card title="App" hoverable={true}>
                        App Development
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card title="Video" hoverable={true}>
                        Video Production
                        </Card>
                    </Col>
                    </Row> */}

            <Button 
            type="primary" 
            onClick={this.continue}>
                Continue 
            </Button> 
            </div>
            </>
        )
    }
}

export default Question1Component;
