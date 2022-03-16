import React , {useState , useEffect} from "react";
import { GetAllGrades } from "../../../services/userGrades/uses-grades-service";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const UserGradesTable = () => {

    let [users, setUsers] = useState([]);

    let [id , setUserId] = useState("");

    const user = JSON.parse(localStorage.getItem("user"));

    setUserId(user.userId);

    useEffect(() => {
        GetAllGrades()
        .then(data => setUsers(data))
    } , []);  

   return (
    <div style={{width:"70vw" , height:"30vh" , marginLeft:"15vw" , marginTop:"15vh" }}>
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
        {users.filter((user) => user.userId === id ).map((user , index) => 
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
        )}
        </TableBody>
    </Table>
  </TableContainer>
  </div>
   )
}

export default UserGradesTable ;