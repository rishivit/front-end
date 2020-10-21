
import React from 'react';

import './register-page.styles.scss';

import { Typography } from 'antd';
import RegistrationForm from '../../components/register-form/register-form.component';

const { Title } = Typography;

const RegisterPage = () => (
  <div style={{ padding: '10vh' }}>
      <RegistrationForm />
  </div>
);

export default RegisterPage;
