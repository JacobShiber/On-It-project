import React from 'react';
import './App.css';
import Register from './components/features/register/register-component';
import Login from './components/features/login/login-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <Register/>
        {/* <Login/> */}
      </header>
    </div>
  );
}

export default App;
