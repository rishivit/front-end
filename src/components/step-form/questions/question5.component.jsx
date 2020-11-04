import React, { Component } from 'react'
import { Button, Card, Col, Form, Input, Layout, Row, Space, Typography } from 'antd';
import {ArrowRightOutlined,CheckOutlined} from '@ant-design/icons';
import '../index.styles.scss';

const { Title } = Typography;

export class Question5Component extends Component {
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
                <Title level={3}> 5 <ArrowRightOutlined /> How urgent is your project? </Title>
                <Form.Item
                    label="Answer 5"
                    name="answer5"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your answer!',
                    },
                    ]}
                    onChange = {handleChange('ques5')}
                    defaultValue ={values.ques5}
                >
                    <Input />
                </Form.Item>

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

export default Question5Component;
