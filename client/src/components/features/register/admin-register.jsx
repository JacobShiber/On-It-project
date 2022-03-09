import React from "react";
// import { useState } from "react";
import {userRegister} from '../../../services/users/users.service';

const AdminRegister = () => {
    // let [user , setUser] = useState({isAdmin : true});

    // const getValues = (e) => {
    //   user[e.target.name] = e.target.value ;
    // }
    // const addUser = () => {
    //   setUser({...user})
    //   userRegister(user);
    // }
  
    return (
      <div className="form">
        <label></label>
       <input className="input" placeholder="firstName"  name="firstName" onChange={getValues}></input>
       <input className="input" placeholder="email" name="email" onChange={getValues}></input>
       <input className="input" placeholder="phone" name="phone" onChange={getValues}></input>
       <select>
           <option value ="teacher">Teacher</option>
           <option value = "course-manager">Course Manager</option>
       </select>
       <input className="input" placeholder="password" name="password" onChange={getValues}></input>
       <input className="input" placeholder="course" name="course" onChange={getValues}></input>
       <input className="input" placeholder="school" name="school" onChange={getValues}></input>
       <input className="input" placeholder="Image" name="img" onChange={getValues}></input>
       <button onClick = {addUser}>Register</button>
      </div>
    );
}

export default AdminRegister ;