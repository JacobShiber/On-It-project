import React, { useContext, useState } from 'react'
import { UsersContext } from '../../../context/users-context/users-context';
import { userLogin, GetAllUsers } from '../../../services/users/users.service';
import { useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {
  const { user, setUser } = useContext(UsersContext);
  const [loginMessage, setLoginMessage] = useState('');
  const [loginStatus, setLoginStatus] = useState(false);
  let navigate = useNavigate();

  const ifUser = JSON.parse(localStorage.getItem('user'));

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

  const sendUser = (e) => {
    e.preventDefault();
    userLogin(user)
      .then(result => result.json())
      .then(res => {
        if(res.login_success === true){
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user))
          setUser(res.user);
          navigate('/home');
          window.location.reload();
        }
        else {
          setLoginStatus(true);
          setLoginMessage(res.message);
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="container" id='loginContainer'>  
 <form id="contact" action="" method="post">
    <h3>Login</h3>
    {
      loginStatus === true? <div><p className='loginMessage'>{loginMessage}</p></div> : null
    }
    <fieldset>
      <input name="email" autocomplete placeholder="Your Email Address" type="email" tabIndex="2" required onChange = {(e) => {defineUser(e.target.name, e.target.value)}}/>
    </fieldset>
    <fieldset>
      <input name="password" autocomplete = "off" placeholder="Your password" type="password" tabIndex="4" required onChange = {(e) => {defineUser(e.target.name, e.target.value)}}/>
    </fieldset>
    <fieldset>
      <button onClick = {sendUser} type="submit" id="contact-submit" data-submit="...Sending">Login</button>
    </fieldset>
  </form>
</div>
  )
}
export default Login;