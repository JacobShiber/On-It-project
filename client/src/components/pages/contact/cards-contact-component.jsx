import React, { useContext } from 'react'
import { UsersContext } from "../../../context/users-context/users-context";
import CardContact from "./card-contact-component";

const CardsContact = () => {
  const { user } = useContext(UsersContext);
  const userItem={firstName:"keren",email:"sfdv",phone:"054254",course:"web",role:"student",img:"aa"};
  
  console.log(user);
  return (
    <div className='cardWrapper'>
        {/* {
          user.map((userItem)=>{
            <CardContact userItem={userItem} />

          })
        } */}
        <h1>{user.firstName}</h1>
      
      <CardContact userItem={userItem} />
    </div>
  );
};
export default CardsContact;
