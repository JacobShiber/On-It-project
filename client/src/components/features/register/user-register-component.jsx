import React from "react";
import { useState } from "react";
import {userRegister} from '../../../services/users/users.service';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";
import defultUser from './defultPicUser.jpg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-125%, -50%)',
  width: 410,
  borderRadius: "5px" ,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const UserRegister = () => {

  // let navigator = useNavigate() ;

  let [user , setUser] = useState({isAdmin : false, role: "Student"});

  const [open, setOpen] = useState(false);

  const getValues = (e) => {
    user[e.target.name] = e.target.value ;
  }

  const addUser = (e) => {
    e.preventDefault();
    if(user.img == undefined) user.img = {defultUser};
    setUser({...user});
    userRegister(user);
    setOpen(!open);
  };
    // console.log(user);
  
  
  return (  
    <div className="container">
     <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <p> Hey {user.firstName} ,  You Registered Successfully !</p>
           <button onClick={() => window.location.reload()}>Log-in</button>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> 
        </Box>
      </Modal>
  <form id="contact" action="" method="post">
    <h3>User Register</h3>
    <fieldset>
      <input  name="firstName" placeholder="Your name" type="text" tabIndex="1" required autoFocus  onChange={getValues} />
    </fieldset>
    <fieldset>
      <input  name="id" placeholder="Your id" type="text" tabIndex="1" required autoFocus  onChange={getValues} />
    </fieldset>
    <fieldset>
      <input name="email" placeholder="Your Email Address" type="email" tabIndex="2" required  onChange={getValues}/>
    </fieldset>
    <fieldset>
      <input name="phone" placeholder="Your Phone Number (optional)" type="text" tabIndex="3" required  onChange={getValues}/>
    </fieldset>
    <fieldset>
      <input name="password" placeholder="Your password" type="text" tabIndex="4" required  onChange={getValues}/>
    </fieldset>
    <fieldset>
      <input name="course" placeholder="Your course" type="text" tabIndex="4" required  onChange={getValues}/>
    </fieldset>
    <fieldset>
      <input  name="school"  placeholder="Your school" type="text" tabIndex="4" required  onChange={getValues}/>
    </fieldset>
    <fieldset>
      <input  name="img" placeholder="Your img" type="text" tabIndex="4" onChange={getValues}/>
    </fieldset>
    <fieldset>
      <button onClick = {addUser} type="submit" id="contact-submit" data-submit="...Sending">Register</button>
    </fieldset>
  </form>
</div>
  )
};

export default UserRegister;
