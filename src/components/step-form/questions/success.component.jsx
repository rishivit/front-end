import React, { Component } from 'react'
import { Button, Card, Col, Form, Input, Layout, List, Row, Space, Typography } from 'antd';
import '../index.styles.scss';

const { Title } = Typography;

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <>
            <div className='question-card-component'>
                <Title level={3}> Thank you! </Title>
                <p> You will get an email with further instructions</p>
            <Button 
            type="primary" 
            onClick={this.continue}>
                Next
            </Button>

            </div>
            </>
        )
    }
}

export default Success;
