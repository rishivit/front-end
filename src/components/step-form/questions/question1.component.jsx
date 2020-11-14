import React, { Component } from 'react'
import { Button, Card, Col, Divider, Form, Input, Layout, Row, Typography, Space } from 'antd';
import {ArrowRightOutlined,CheckOutlined} from '@ant-design/icons';
import '../index.styles.scss';
import Box from '@material-ui/core/Box';

const { Title, Text } = Typography;
const { Meta } = Card;

export class Question1Component extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChange } = this.props;
        return (
          // <div className="back-property">
            <Card className="custom-card" bordered={false} hoverable >
            <div className='question-card-component'>

                <Title level={4} style={{textAlign: "left",color: 'white'}}> 1 <ArrowRightOutlined /> How can we help you? </Title>
                <Divider orientation="left"></Divider>
                    <Row gutter={16} style= {{ padding: '0px 0px 20px 0px'}}>
                      <Col span={6}>
<<<<<<< HEAD
                          <Card title="Art Direction" hoverable={true} style={{ height: 200}}>
                          Art Direction
                          </Card>
=======
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                       >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                      </Card>
>>>>>>> ad173322d6b0508bcb842f8ecd2b08111f28f5a7
                      </Col>
                      <Col span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                       >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                      </Card>
                      </Col>
                      <Col span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                       >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                      </Card>
                      </Col>
                      <Col span={6}>
                      <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                       >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                      </Card>
                      </Col>
                    </Row>

              <Button
              type="primary"
              onClick={this.continue}>
                  Continue
              </Button>
            </div>
            </Card>
          // </div>
        )
    }
}

export default Question1Component;
