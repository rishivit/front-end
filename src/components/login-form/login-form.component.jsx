import React from 'react';

import { PageHeader, Space, Input, Button, Row } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, MailOutlined } from '@ant-design/icons';

import { config } from '../../config/config';

import './login-form.styles.scss';
import { withRouter, Link } from 'react-router-dom';
import Axios from 'axios';

import { setCurrentUser } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class LoginFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  handleLogin = async () => {
    const { setCurrentUser, history } = this.props;

    try {
      const response = await Axios.post(
        config.apiUrl + 'auth/login',
        { ...this.state }
      );
      const { data } = response;
      alert('Login successful');
      await setCurrentUser(data);
      history.push('/');
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  render() { 
    const { history } = this.props;

    return (
      <div className="login-form-component">
        <PageHeader
          className="login-form-header"
          onBack={() => history.goBack()}
          title="Login"
        >
          <Row>
            <Space direction="vertical" size="large">
              <Input 
                className="login-input"
                size="large" 
                name="email" 
                placeholder="Enter your email" 
                prefix={<MailOutlined />} 
                onChange={this.handleChange}
              />
              <Input.Password
                className="login-input"
                size="large" 
                name="password" 
                placeholder="Enter your password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={this.handleChange}
              />
              <Button 
                type="primary" 
                size="large"
                onClick={this.handleLogin}
              >
                Login
              </Button>
              <Link to="/register">
                Register?
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
 
export default withRouter(connect(null, mapDispatchToProps)(LoginFormComponent));