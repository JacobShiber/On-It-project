import logo from './Logo-text-white.png';
import React, { useContext } from 'react'

 const Login=()=> {
  const { user, setUsers } = useContext();
  return (
    <div className='Login'>
      <img src= {logo} alt = "logo" width="90px" height="50px"/><br/>
      <label>Email : </label><br/>
      <input type="text" /><br/>
      <label>Password : </label><br/>
      <input type="text" /><br/>
      <button >Log in</button>
    </div>
  )
}
export default Login;