import React, {useState} from 'react'
// import { Link } from "react-router-dom";
import logo from './Logo-text-white.png';
import Login from '../../features/login/login-component';
import MainRegister from '../../features/register/main-register-component'
// import Login from '../../features/login/login-component'

 const LoginPage=()=> {
   const [authState, setAuthState] = useState('login')
  return (
    <div className='loginPage'>
      <section className='leftSize'>
      {
        authState === 'login' ? <Login /> : <MainRegister/>
      }
      </section> 
      <section className='rightSize'>
        <img src={logo} alt="logo"/>
        <h2>Welcome to a place that will put you <br/>
          in order for your studies</h2>
          <button className='navigateButtons' onClick={() => {setAuthState('login')}}>Login</button>
      <button  className='navigateButtons' onClick={() => {setAuthState('register')}}>Register</button>
      </section>
    </div>
  )
}
export default LoginPage;