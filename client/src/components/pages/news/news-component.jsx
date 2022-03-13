import React, {useContext} from 'react';
import {UsersContext} from '../../../context/users-context/users-context';
import NewsAdmin from './news-admin';
import './news.css';

 const News=()=> {
   const {user} = useContext(UsersContext);

  return (
    <div>{user.isAdmin === true? <NewsAdmin /> : null}</div>
  )
}
export default News;