import React, { useEffect, useState } from "react";
import { GetAllGrades } from "../../../services/userGrades/uses-grades-service";
import {PutGrade , PostGrade , DeleteGrade} from "../../../services/userGrades/uses-grades-service"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const AdminGradesTable = () => {

  let [userToUpdate , setUserToUpdate] = useState({}) ;

  let [adminAction , setAdminAction] = useState("");

  let [users, setUsers] = useState([]);

  let tests = ["react" , "typescript" , "js" , ".net" , "html" , "css"]

  let courses = ["full stack" , "dev-net" , "cyber" , "qa"]


  useEffect(() => {
  GetAllGrades()
  .then(data => setUsers(data))
 } , []);  

 const updateValue = (e) => {
  userToUpdate[e.target.name] = e.target.value ;
 }

 const updateAction = (e) => {
  setAdminAction(e.target.value);
 }

 const updateUser = () => {
   setUserToUpdate({...userToUpdate});
  //  console.log(userToUpdate);
   PutGrade(userToUpdate)
  .then(res => res.json())
  .then(data => setUsers(data))
  .catch(err => console.log(err))
 }

 const addGrade = () => {
   setUserToUpdate({...userToUpdate})
  //  console.log(userToUpdate);
   PostGrade(userToUpdate)
  .then(res => res.json())
  .then(data => setUsers(data))
  .catch(err => console.log(err))
 }

 const deleteUserGrade = () => {
  setUserToUpdate({...userToUpdate})
  // console.log(userToUpdate);
  DeleteGrade(userToUpdate)
 .then(res => res.json())
 .then(data => setUsers(data))
 .catch(err => console.log(err))
 }


 const invokeAction = () => {
   switch (adminAction) {
      case "add" :
        return addGrade();

      case "update" : 
        return updateUser();

      case "delete" : 
       return deleteUserGrade();
   }
 }
 

 const getAllId = (usersArray) => {
    let userIdArray = [] ;
    for (let user of usersArray) {
      if (userIdArray.indexOf(user.userId) === -1)userIdArray.push(user.userId) ;
    }
    return userIdArray ;
 }

 const getAllNames = (usersArray) => {
  let userNamesArray = [] ;
  for (let user of usersArray) {
    if (userNamesArray.indexOf(user.userName) === -1)userNamesArray.push(user.userName) ;
  }
  return userNamesArray ;
}

 let IdList = getAllId(users) ;

 let NamesList = getAllNames(users) ;


return (
    <div style={{width:"70vw" , height:"30vh" , marginLeft:"15vw" , marginTop:"15vh" }}>

      <select  onChange={updateAction}>
        <option> action</option>
        <option value="add">add</option>
        <option value="delete">delete</option>
        <option value="update">update</option>
      </select>
       
      <select name="userName" onChange={updateValue}>
        <option> student</option>
        {
          NamesList.map((name , index) => 
               <option key={index} value={name}>{name}</option>
          )
        }

      </select>

    <select name="userId" onChange={updateValue} >
    <option> Id</option>
      {
         IdList.map((userId , index) => 
           <option key={index} value={userId}>{userId}</option>
         )
      }
    </select>
      <select name="test"  onChange={updateValue}>
      <option> test</option>
        {
          tests.map((test , index) => 
               <option key={index} value={test}>{test}</option>
          )
        }

      </select>
      <select name="course" onChange={updateValue}>
      <option> course</option>
        {
          courses.map((course , index) => 
               <option key={index} value={course}>{course}</option>
          )
        }

      </select>
    <input type='number' name="grade" onChange={updateValue}></input>
    <button type="button" onClick={invokeAction}>finish</button>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Test</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Course</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user , index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{user.userName}</TableCell>
              <TableCell align="right">{user.userId}</TableCell>
              <TableCell align="right">{user.test}</TableCell>
              <TableCell align="right">{user.grade}</TableCell>
              <TableCell align="right">{user.course}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default AdminGradesTable ;



