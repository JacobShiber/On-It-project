import logo from './Logo-text-white.png';
import React, { useContext } from 'react'
import { UsersContext } from '../../../context/users-context/users-context';
import { userLogin } from '../../../services/users/users.service';


const Login = () => {
  const { user, setUser } = useContext(UsersContext);
  


  const defineUser = (name, value) => {
    switch (name) {
      case "email":
        user.email = value;
        break;
      case "password":
        user.password = value;
        break;
      default:
        return user;
    }
  }

  const sendUser = () => {
    userLogin(user)
      .then(result => result.json())
      .then(res => {
        localStorage.setItem('token', res.token);
        setUser(res.user);
        console.log(res.user);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='Login'>
      {/* <img src= {logo} alt = "logo" width="200px" height="90px"/><br/> */}
      <label>Email : </label><br/>
      <input type="text" name={"email"} onChange = {(e) => {defineUser(e.target.name, e.target.value)}}/><br/>
      <label>Password : </label><br/>
      <input type="text" name={"password"} onChange = {(e) => {defineUser(e.target.name, e.target.value)}}/><br/><br/>
      <button onClick = {sendUser}>Log in</button>
      
    </div>
  )
}
export default Login;