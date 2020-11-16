import React from 'react';

import { Card, Col, PageHeader, Space, Input, Button, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, MailOutlined } from '@ant-design/icons';

import { config } from '../../config/config';

import './register-form.styles.scss';
import { withRouter, Link } from 'react-router-dom';
import Axios from 'axios';

import { setCurrentUser } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';

class RegisterFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            visible: false,
        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    handleRegister = async () => {
        const { setCurrentUser, history } = this.props;

        try {
        const response = await Axios.post(
            config.apiUrl + 'auth/register',
            { ...this.state }
        );
        const { data } = response;
        await setCurrentUser(data);
        alert('Registration successful');
        history.push('/');
        } catch (error) {
        console.error(error);
        }
    }

    render() {
        const { history } = this.props;

        return (
            <div className="register-form-component">
                <Card hoverable bordered={true} style={{ paddingRight: 30 }}>
                <Row>
                    <Col span={10}>

                    </Col>
                    <Col span={14}>
                        <PageHeader
                        className="register-form-header"
                        onBack={() => history.goBack()}
                        title="Register"
                        >
                        <Row>
                            <Space direction="vertical" size="large">
                                <TextField
                                    id="standard-full-width"
                                    className="register-input"
                                    label = {<span style={{ fontSize: '1.1rem' }}>Name</span>}
                                    style={{ margin: 8 }}
                                    placeholder="Enter your name"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            <UserOutlined />
                                          </InputAdornment>
                                        ),
                                    }}
                                    prefix={<UserOutlined />}
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    id="standard-full-width"
                                    className="register-input"
                                    size="large"
                                    name="email"
                                    label = {<span style={{ fontSize: '1.1rem' }}> Email</span>}
                                    style={{ margin: 8 }}
                                    placeholder="Enter your email"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                          <InputAdornment position="start">
                                            <MailOutlined />
                                          </InputAdornment>
                                        ),
                                    }}
                                    onChange={this.handleChange}
                                />
                                {/* <Input.Password
                                    className="register-input"
                                    size="large"
                                    name="password"
                                    placeholder="Enter your password"
                                    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    onChange={this.handleChange}
                                /> */}
                                <TextField
                                    id="standard-full-width"
                                    className="register-input"
                                    size="large"
                                    name="password"
                                    label = {<span style={{ fontSize: '1.1rem' }}> Password</span>}
                                    style={{ margin: 8 }}
                                    placeholder="Enter your password"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    // InputProps={{
                                    //     endAdornment: (
                                    //       <InputAdornment position="end">
                                    //        {this.visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                                    //       </InputAdornment>
                                    //     ),
                                    // }}
                                    InputProps={{
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            {}
                                          </InputAdornment>
                                        ),
                                    }}
                                    onChange={this.handleChange}
                                />
                                <Space size={15}>
                                <Button
                                    type="primary"
                                    size="large"
                                    onClick={this.handleRegister}
                                >
                                    Sign up
                                </Button>
                                or
                                <Link to="/login">
                                    Log in
                                </Link>
                                </Space>
                            </Space>
                        </Row>
                        </PageHeader>
                    </Col>
                </Row>
                </Card>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: user => {
            dispatch(setCurrentUser(user));
        },
    };
};

export default withRouter(connect(null, mapDispatchToProps)(RegisterFormComponent));
