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

                <Title level={4} style={{textAlign: "left"}}> 1 <ArrowRightOutlined /> How can we help you? </Title>
                <Divider orientation="left"></Divider>
                    <Row gutter={16} style= {{ padding: '0px 0px 20px 0px'}}>
                      <Col span={6}>
                          <Card title="Art Direction" hoverable={true} style={{ height: 200}}>
                          Art Direction
                          </Card>
                      </Col>
                      <Col span={6}>
                          <Card title="Web" hoverable={true} style={{ height: 200}}>
                          Website Production
                          </Card>
                      </Col>
                      <Col span={6}>
                          <Card title="App" hoverable={true} style={{ height: 200}}>
                          App Development
                          </Card>
                      </Col>
                      <Col span={6}>
                          <Card title="Video" hoverable={true} style={{ height: 200}}>
                          Video Production
                          </Card>
                      </Col>
                    </Row>

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
