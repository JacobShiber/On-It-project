import React, { useEffect, useState } from "react";
import { GetAllGrades } from "../../../services/userGrades/uses-grades-service";
import {PutGrade} from "../../../services/userGrades/uses-grades-service"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const UsersGrades = () => {

  let [userToUpdate , setUserToUpdate ] = useState({}) ;

  let [ users, setUsers ] = useState([]);

  useEffect(() => {
  GetAllGrades()
  .then(data => setUsers(data))
 } , []);  

 const updateValue = (e) => {
  userToUpdate[e.target.name] = e.target.value ;
 }

 const updateUser = () => {
   setUserToUpdate({...userToUpdate});
   PutGrade(userToUpdate)
  .then(res => res.json())
  .then(data => setUsers(data))
 }

  return (
    <div style={{width:"70vw" , height:"30vh" , marginLeft:"15vw" , marginTop:"15vh" }}>
    <select name="userName" onChange={updateValue} >
      {users.map((user) => 
        <option key={user.userName} value={user.userName}>{user.userName}</option>
      )}
    </select>
    <input type='number' name="grade" onChange={updateValue}></input>
    <button type="button" onClick={updateUser}>update</button>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Class</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Note</TableCell>
            <TableCell align="right">School</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.userName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{user.userName}</TableCell>
              <TableCell align="right">{user.class}</TableCell>
              <TableCell align="right">{user.grade}</TableCell>
              <TableCell align="right">{user.note}</TableCell>
              <TableCell align="right">{user.school}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default UsersGrades ;



