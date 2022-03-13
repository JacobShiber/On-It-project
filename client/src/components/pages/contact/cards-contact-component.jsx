import React, { useEffect } from 'react'
import { useState } from 'react';
import CardContact from "./card-contact-component";
import { GetAllUsers } from '../../../services/users/users.service';

const CardsContact = () => {
  const [userData,setUserData]=useState([]);
  useEffect(()=>{
    GetAllUsers()
    .then((res)=>setUserData(res)) 
  },[])
  console.log(userData);
  return (
    <div className='cardWrapper'>
        {
          userData.map((user) => <CardContact key={user.firstName} userItem={user}/>)
        }
    </div>
  );
};
export default CardsContact;
