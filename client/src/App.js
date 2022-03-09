import React from 'react';
import './App.css';
import Register from './components/features/register/register-component';
import Login from './components/features/login/login-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Register/>
        <img src={logo} className="App-logo" alt="logo" />
        <Login/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
