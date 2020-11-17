import React from 'react';

import { PageHeader, Space, Input, Button, Row, Col, Card} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, MailOutlined } from '@ant-design/icons';

import { config } from '../../config/config';

import './login-form.styles.scss';
import { withRouter, Link } from 'react-router-dom';
import Axios from 'axios';

import { setCurrentUser } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


class LoginFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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
        <Card hoverable bordered={true} style={{ paddingRight: 20 }}>
          <Row>
              <Col span={10}>

              </Col>
              <Col span={14}>
                  <PageHeader
                  className="login-form-header"
                  onBack={() => history.goBack()}
                  title="Login"
                  >
                <Row>
                <Space direction="vertical" size="large">
                  <TextField
                      id="standard-full-width"
                      className="login-input"
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
                      onClick={this.handleLogin}
                  >
                      Log in
                  </Button>
                  or
                  <Link to="/register">
                      Register
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

export default withRouter(connect(null, mapDispatchToProps)(LoginFormComponent));
