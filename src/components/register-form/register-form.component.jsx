import React from 'react';

import { PageHeader, Space, Input, Button, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, MailOutlined } from '@ant-design/icons';

import { config } from '../../config/config';

import './register-form.styles.scss';
import { withRouter, Link } from 'react-router-dom';
import Axios from 'axios';

import { setCurrentUser } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class RegisterFormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
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
                <PageHeader
                    className="register-form-header"
                    onBack={() => history.goBack()}
                    title="Register"
                >
                    <Row>
                        <Space direction="vertical" size="large">
                            <Input
                                className="register-input"
                                size="large"
                                name="name"
                                placeholder="Enter your name"
                                prefix={<UserOutlined />}
                                onChange={this.handleChange}
                            />
                            <Input
                                className="register-input"
                                size="large"
                                name="email"
                                placeholder="Enter your email"
                                prefix={<MailOutlined />}
                                onChange={this.handleChange}
                            />
                            <Input.Password
                                className="register-input"
                                size="large"
                                name="password"
                                placeholder="Enter your password"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                onChange={this.handleChange}
                            />
                            <Button
                                type="primary"
                                size="large"
                                onClick={this.handleRegister}
                            >
                                Register
                            </Button>
                            <Link to="/login">
                                Login?
                            </Link>
                        </Space>
                    </Row>
                </PageHeader>
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