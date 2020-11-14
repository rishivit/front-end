import React, { Component } from 'react'
import { Button, Card, Col, Form, Input, Layout, Row, Space, Typography } from 'antd';
import {ArrowRightOutlined,CheckOutlined} from '@ant-design/icons';
import '../index.styles.scss';

const { Title } = Typography;

export class Question6Component extends Component {
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
                <Title level={3}> 6 <ArrowRightOutlined /> What's your budget? </Title>
                <Form.Item
                    label="Answer 6"
                    name="answer6"
                    style={{ marginBottom: 30 }}
                    rules={[
                    {
                        required: true,
                        message: 'Please input your answer!',
                    },
                    ]}
                    onChange = {handleChange('ques6')}
                    defaultValue ={values.ques6}
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

export default Question6Component;
