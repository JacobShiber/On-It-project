import React from 'react';
import './App.css';
import PageRouting from './components/Routing/PageRouting';
import AdminRegister from './components/features/register/admin-register-component';
import Login from './components/features/login/login-component';
import MainRegister from './components/features/register/main-register-component';
import {UsersContextProvider} from './context/users-context/users-context';
import UsersGrades from './components/features/user-grades-table/user-grade-table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersContextProvider>
          {/* <PageRouting/> */}
          <UsersGrades/>
          {/* { <UsersGrades/> } */}
           {/* <MainRegister/> */}
          {/* <Login /> */}
        </UsersContextProvider>
      </header>
    </div>
  );
}

export default App;
