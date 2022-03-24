import React, { useContext } from 'react';
// import {UsersContext} from '../../../context/users-context/users-context';
import NewsAdmin from './news-admin';
import NewsUser from './news-user';
import './news.css';
import UserCardInfo from '../../features/user-card/user-card';


const News = () => {
  //  const {user} = useContext(UsersContext);

  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="newsContainer">
    <h1 className='mainTitle'>New Updates</h1>
    <div className = "userCardInfo">
        <UserCardInfo />
      </div>
    <div>{user.isAdmin === true? <NewsAdmin /> : <NewsUser/>}</div>
    {/* // <button onClick = {}>Click</button> */}
   </div> 
  )
}
export default News;