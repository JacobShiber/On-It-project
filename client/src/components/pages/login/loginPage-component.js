import React, {useState} from 'react'
import { Link } from "react-router-dom";
import logo from './Logo-text-white.png';
import Login from '../../features/login/login-component';
import Register from '../../features/register/register-component'
// import Login from '../../features/login/login-component'

 const LoginPage=()=> {
   const [authState, setAuthState] = useState('login')
  return (
    <div className='loginPage'>
      <section className='leftSize'>
      <button onClick={() => {setAuthState('login')}}>Login</button>
      <button onClick={() => {setAuthState('register')}}>Register</button>
      {
        authState === 'login' ? <Login /> : <Register/>
      }
      </section> 
      <section className='rightSize'>
        <img src={logo} alt="logo"/>
        <h3>Welcome to a place that will put you <br/>
          in order for your studies</h3>
      </section>
    </div>
  )
}
export default LoginPage;