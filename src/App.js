import React from 'react';
import {Button} from 'antd';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import RegisterPage from './pages/register-page/register-page.component';
import LoginPage from './pages/login-page/login-page.component';
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
