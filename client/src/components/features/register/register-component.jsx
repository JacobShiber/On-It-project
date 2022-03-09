import React  from "react";
import { useState } from "react";
import {userRegister} from '../../../services/users/users.service';
import AdminRegister from './admin-register';



const Register = () => {
  let [userType, setUserType] = useState('student')
   let [user , setUser] = useState({isAdmin : false, role: "Student"});

  const getValues = (e) => {
    user[e.target.name] = e.target.value ;
  }
  const addUser = () => {
    setUser({...user})
    userRegister(user);
  }

  if(userType == 'student')
  return (  
    <div className="form">
      <button onClick = {setUserType('admin')}>Admin Register</button>
      <button onClick = {setUserType('student')}>Student Register</button>
      <label></label>
      
     <input className="input" placeholder="firstName"  name="firstName" onChange={getValues}></input>
     <input className="input" placeholder="email" name="email" onChange={getValues}></input>
     <input className="input" placeholder="phone" name="phone" onChange={getValues}></input>
     <input className="input" placeholder="password" name="password" onChange={getValues}></input>
     <input className="input" placeholder="course" name="course" onChange={getValues}></input>
     <input className="input" placeholder="school" name="school" onChange={getValues}></input>
     <input className="input" placeholder="Image" name="img" onChange={getValues}></input>
     <button onClick = {addUser}>Register</button>
    </div>
  )
  else{
    return (
      <AdminRegister/> 
    )
  }
};

export default Register;
