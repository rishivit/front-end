import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import RegisterPage from './components/register-form/register';
import LoginPage from './components/login-form/login';
import Navigation from './components/navigation/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <RegisterPage/ >
        <LoginPage/ >
      </header>
    </div>

  );
}

export default App;