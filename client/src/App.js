import React from 'react';
import './App.css';
import PageRouting from './components/Routing/PageRouting';
import AdminRegister from './components/features/register/admin-register-component';
import Login from './components/features/login/login-component';
import MainRegister from './components/features/register/main-register-component';
import { UsersContextProvider } from './context/users-context/users-context';
import ResponsiveAppBar from './components/features/navbar/navbar-component';
import Footer from './components/features/footer/footer-component';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <UsersContextProvider>

          <ResponsiveAppBar />
          <PageRouting />
          {/* <MainRegister/>
          <Login /> */}

        </UsersContextProvider>
        <Footer />
      </header>
    </div>
  );
}

export default App;
