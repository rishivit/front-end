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
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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

    handleClickShowPassword = () => {
        this.setState({ ...this.state, visible: !this.state.visible });
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
                                <TextField
                                    id="standard-adornment-password"
                                    className="register-input"
                                    name="password"
                                    type={this.state.visible ? 'text' : 'password'}
                                    value={this.state.password}
                                    label = {<span style={{ fontSize: '1.1rem' }}> Password</span>}
                                    style={{ margin: 8 }}
                                    placeholder="Enter your password"
                                    fullWidth
                                    margin="normal"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                          <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                            >
                                                {this.state.visible ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                          </InputAdornment>
                                        ),
                                    }}
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