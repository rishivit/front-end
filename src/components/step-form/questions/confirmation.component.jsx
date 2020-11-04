import React, { Component } from 'react'
import { Button, Card, Col, Form, Input, Layout, List, Row, Space, Typography } from 'antd';
import {ArrowRightOutlined,CheckOutlined} from '@ant-design/icons';
import '../index.styles.scss';

const { Title } = Typography;

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values: {ques1, ques2, ques3, ques4, ques5, ques6 } } = this.props;
        return (
            <>
            <div className='question-card-component'>
                <Title level={3}> Confirm Data </Title>
                {ques1} <br />
                {ques2} <br />
                {ques3} <br />
                {ques4} <br />
                {ques5} <br />
                {ques6} <br />

            <Space >
            <Button 
            type="primary" 
            onClick={this.continue}>
                Confirm and Continue
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

export default Confirm;
