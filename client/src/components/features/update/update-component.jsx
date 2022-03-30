import React, { useContext, useEffect, useState } from 'react'
import { LoadingContext } from '../../../context/loading/loading-context';
import { GetAllUsers, PutUser } from '../../../services/users/users.service';
import './update.css';
 const UserUpdate=()=> {
  let [userToUpdate, setUserToUpdate] = useState({});
  // let { loading, setLoading } = useContext(LoadingContext);
  let [usersData, setUsersData] = useState([]);
  useEffect(() => {
    // setLoading(true);
    GetAllUsers()
      .then(data => setUsersData(data))
      .catch(err => console.log(err))
      // .finally(() => setLoading(false))
  }, []);
  const updateValue = (e) => {
    userToUpdate[e.target.name] = e.target.value;
  };
  const user = JSON.parse(localStorage.getItem('user'));

    const updateUser = () => {
        // setLoading(true);
        setUserToUpdate({ ...userToUpdate });
        // console.log({ requestedUser, newUser });
        PutUser( user._id, userToUpdate )
          .then(res => console.log(res))
          // .then(data => setUsersData(data))
          // .catch(err => console.log(err))
          // .finally(() => setLoading(false))
  };
  return (<><h1>Update</h1>
  <br/>
  <div className='formUpdate'>
  <label>Name : </label><br/>
  <input name='firstName' onChange={updateValue}/><br/>
  <label>Id : </label><br/>
  <input name='id' onChange={updateValue}/><br/>
  <label >Img : </label><br/>
  <input name='img'onChange={updateValue}/><br/>
  <label>Number : </label><br/>
  <input name='phone'onChange={updateValue}/><br/>
  <label>Course : </label><br/>
  <input name='course'onChange={updateValue}/><br/>
  <label>Email : </label><br/>
  <input name='email'onChange={updateValue}/><br/>
  <label>Role : </label><br/>
  <input name='role'onChange={updateValue}/><br/>
  <label>School : </label><br/>
  <input name='school'onChange={updateValue}/><br/>
  <button onClick={()=>updateUser()}>click</button>
  </div>
  </>
  )
}
export default UserUpdate;