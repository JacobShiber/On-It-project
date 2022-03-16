import React, {useContext} from 'react';
// import {UsersContext} from '../../../context/users-context/users-context';
import NewsAdmin from './news-admin';
import NewsUser from './news-user';
import './news.css';

 const News=()=> {
  //  const {user} = useContext(UsersContext);

   const user = JSON.parse(localStorage.getItem('user'));
  return (
    <>
    <h1 className='mainTitle'>New Updates</h1>
    <div>{user.isAdmin === true? <NewsAdmin /> : <NewsUser/>}</div>
    {/* // <button onClick = {}>Click</button> */}
   </> 
  )
}
export default News;