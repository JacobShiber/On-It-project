import React from "react";

const CardContact = ({userItem}) => {
  return (
    <div className="cardUser">
        <h1>caed</h1>
        <img src={userItem.img} width="100px" height="100px" alt="picUser"/> 
      <h3>firstName : {userItem.firstName}</h3>
      <h3>email : {userItem.email}</h3>
      <h3>phone : {userItem.phone}</h3>
      <h3>course :{userItem.course}</h3>
      <h3>role : {userItem.role}</h3>

    </div>
  );
};
export default CardContact;
