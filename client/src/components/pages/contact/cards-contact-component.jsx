import React, { useEffect } from 'react'
import { useState } from 'react';
import CardContact from "./card-contact-component";
import { GetAllUsers } from '../../../services/users/users.service';

const CardsContact = () => {
  let [loading , setLoading] = useState(false);
  const [userData,setUserData]=useState([]);
  useEffect(()=>{
  setLoading(true);
    GetAllUsers()
    .then((res)=>setUserData(res)) 
  .finally(() => setLoading(false))
  },[])
  console.log(userData);
  return (
    <>
    {
       loading ?  <img className='gifLoading' src='https://thumbs.gfycat.com/AmpleTenderArkshell-size_restricted.gif' alt='gifContact'/> : 
    <div className='cardWrapper'>
        {
          userData.map((user) => <CardContact key={user.firstName} userItem={user}/>)
        }
    </div>
}</>);
};
export default CardsContact;
