import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetAllSchedules } from '../../../services/schedule/schedule.service';

function createData(name, Sunday, Monday, Tuesday, Wednesday,Thursday,Friday) {
  return { name, Sunday, Monday, Tuesday, Wednesday,Thursday,Friday };
}

const rows = [
  createData('8:00', 159, 6.0, 24, 4.0,8,"k"),
  createData('9:00', 237, 9.0, 37, 4.3),
  createData('10:00', 262, 16.0, 24, 6.0),
  createData('11:00', 305, 3.7, 67, 4.3),
  createData('12:00', 356, 16.0, 49, 3.9),
  createData('13:00', 356, 16.0, 49, 3.9),
  createData('14:00', 356, 16.0, 49, 3.9),
  createData('15:00', 356, 16.0, 49, 3.9),
  createData('16:00', 356, 16.0, 49, 3.9),
  createData('17:00', 356, 16.0, 49, 3.9),
  createData('18:00', 356, 16.0, 49, 3.9),
  createData('19:00', 356, 16.0, 49, 3.9),
  createData('20:00', 356, 16.0, 49, 3.9),
  createData('21:00', 356, 16.0, 49, 3.9),
];

export default function UserSchedule() {
  const [scheduleData,setScheduleData]=useState([]);
  useEffect(()=>{
    GetAllSchedules()
    .then((res)=>setScheduleData(res)) 
    
  },[])
  // console.log(scheduleData);
  return (
    <div>
      <button onClick={()=>console.log(scheduleData)}>click</button>
    {/* {
      scheduleData.map(schedule=> 
     <h1>Friday {schedule.Monday}</h1>  
      )
    } */}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hours </TableCell>
            <TableCell align="right">Sunday</TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Sunday}</TableCell>
              <TableCell align="right">{row.Monday}</TableCell>
              <TableCell align="right">{row.Tuesday}</TableCell>
              <TableCell align="right">{row.Wednesday}</TableCell>
              <TableCell align="right">{row.Thursday}</TableCell>
              <TableCell align="right">{row.Friday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>);
  
}

