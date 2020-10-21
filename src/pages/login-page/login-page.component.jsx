import React from 'react';

import NormalLoginForm from '../../components/login-form/login-form.component';

import './login-page.styles.scss';

import { Typography } from 'antd';

const { Title } = Typography;

const LoginPage = () => (
    <div style={{ padding: '10vh' }}>
        <NormalLoginForm/ >
    </div>
);

export default LoginPage;
