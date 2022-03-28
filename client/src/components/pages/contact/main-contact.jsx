import React , { useState } from "react";
import ContactTable from "./contact-table";
import CardsContact from "./cards-contact-component";

const MainContact = () => {

let [contactCards , setContactCards] = useState(true) ;

   const changeComponent = () => {
    setContactCards(!contactCards);
   }

   return (
       <>
       <h1>TO CONTACT :</h1>
       <button onClick={changeComponent}> {contactCards ? "search for students" : "get all details"}  </button>
       {
           contactCards ? <CardsContact/> : <ContactTable/> 
       }
       </>
   )

}

export default MainContact ;

