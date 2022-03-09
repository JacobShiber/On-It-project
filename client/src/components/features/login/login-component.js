import logo from './Logo-text-white.png';
import React from 'react'

 const Login=()=> {
  return (
    <div className='Login'>
      <img src= {logo} alt = "logo" width="90px" height="50px"/><br/>
      <label>Email : </label><br/>
      <input type="text" /><br/>
      <label>Password : </label><br/>
      <input type="text" /><br/>
      <button>Log in</button>
    </div>
  )
}
export default Login;