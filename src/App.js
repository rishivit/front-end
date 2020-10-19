import React from 'react';
import {Button} from 'antd';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button type="primary">Button</Button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
