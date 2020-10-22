import React from 'react';
import {Button} from 'antd';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import RegisterPage from './components/register-form/register-form.component';
import LoginPage from './components/login-form/login-form.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div><RegisterPage/ ></div>
        <div><LoginPage/ ></div>
      </header>
    </div>

  );
}

export default App;