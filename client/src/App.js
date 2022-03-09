import React from 'react';
import './App.css';
import Register from './components/features/register/register-component';
import Login from './components/features/login/login-component';
import {UsersContextProvider} from './context/users-context/users-context';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersContextProvider>
    <Register/>
        {/* <Login/> */}
        </UsersContextProvider>
      </header>
    </div>
  );
}

export default App;
