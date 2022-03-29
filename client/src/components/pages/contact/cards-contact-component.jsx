import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import CardContact from "./card-contact-component";
import { GetAllUsers } from '../../../services/users/users.service';
import { LoadingContext } from '../../../context/loading/loading-context';

const CardsContact = () => {
  let { loading, setLoading } = useContext(LoadingContext);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    setLoading(true);
    GetAllUsers()
      .then((res) => setUserData(res))
      .finally(() => setLoading(false))
  }, [])
  console.log(userData);
  return (
    <>
      {
        loading ? <img className='gifLoading' src='https://cdn.dribbble.com/users/46511/screenshots/1756041/loader-spinning.gif' alt='gifContact' /> :
          <div className='main'>
              <h1>Manegment</h1>
            <div className='cardWrapper' style={{display: 'flex', justifyContent: 'space-around', marginTop: '5%', marginBottom: '3%'}}>
              {
                userData.map((user) => user.role !== 'Student'? <CardContact key={user.firstName} userItem={user} /> : null)
              }
            </div>
            <h1>Students</h1>
            <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '5%'}}>
            {
                userData.map((user) => user.role == 'Student'? <CardContact key={user.firstName} userItem={user} /> : null)
              }
            </div>
          </div>
      }</>);
};
export default CardsContact;
