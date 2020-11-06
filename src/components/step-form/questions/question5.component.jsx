import React, { Component } from 'react'
import { Button, Card, Col, Form, Input, Layout, Rate, Row, Space, Typography } from 'antd';
import {ArrowRightOutlined,CheckOutlined} from '@ant-design/icons';
import '../index.styles.scss';

const { Title } = Typography;
const desc = ['at own pace', 'not urgent', 'normal', 'urgent', 'extremely urgent'];

export class Question5Component extends Component {
    state = {
        ratevalue: 3,
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    handleRatingChange = ratevalue => {
        this.setState({ ratevalue });
    };

    render() {
        const {values, handleChange } = this.props;
        const { ratevalue } = this.state;
        return (
            <>
            <div className='question-card-component'>
                <Title level={3}> 5 <ArrowRightOutlined /> How urgent is your project? </Title>
                {/* <Form.Item
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
                </Form.Item> */}
                <Row style={{ marginBottom: 30 }}>
                    <Col>
                    <span>
                        <Rate tooltips={desc} onChange={this.handleRatingChange} value={ratevalue} />
                        {ratevalue ? <span className="ant-rate-text">{desc[ratevalue - 1]}</span> : ''}
                    </span>
                    </Col>
                </Row>
                <Row>
                    <Col>
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
                    </Col>
                </Row>
            </div>
            </>
        )
    }
}

export default Question5Component;
