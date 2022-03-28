import React, { useContext, useEffect, useState } from "react";
import { GetAllGrades , PutGrade , PostGrade , DeleteGrade } from "../../../services/userGrades/uses-grades-service" ;
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { themeContext } from "../../../context/theme-context/theme-context";
import { LoadingContext } from "../../../context/loading/loading-context";

const AdminGradesTable = () => {

  let [userToUpdate , setUserToUpdate] = useState({}) ;

  let {loading,setLoading} = useContext(LoadingContext);

  let [usersData, setUsersData] = useState([]);

  let tests = ["React" , "Typescript" , "JS" , ".Net" , "HTML" , "Css" , "Node.js" , "MongoDB"]

  let courses = ["Full Stack" , "Dev-net" , "Cyber" , "Qa"];

  const {themeColor ,  setThemeColor , purpleMode , setPurpleMode } = useContext(themeContext);

  useEffect(() => {
  setLoading(true);
  GetAllGrades()
  .then(data => setUsersData(data))
  .catch(err => console.log(err))
  .finally(() => setLoading(false))
 } , []);  

 const updateValue = (e) => {
  userToUpdate[e.target.name] = e.target.value ;
 };

 const updateUser = (requestedGrade , newGrade) => {
   setLoading(true);
   setUserToUpdate({...userToUpdate});
   console.log({requestedGrade,newGrade});
   PutGrade({requestedGrade,newGrade})
  .then(res => res.json())
  .then(data => setUsersData(data))
  .catch(err => console.log(err))
  .finally(() => setLoading(false))
 };

 const addGrade = () => {
   setLoading(true);
   setUserToUpdate({...userToUpdate})
   console.log(userToUpdate);
   PostGrade(userToUpdate)
  .then(res => res.json())
  .then(data => setUsersData(data))
  .catch(err => console.log(err))
  .finally(() => setLoading(false))
 };

 const deleteUserGrade = (user) => {
  setLoading(true);
  DeleteGrade(user)
 .then(res => res.json())
 .then(data => setUsersData(data))
 .catch(err => console.log(err))
 .finally(() => setLoading(false))
 };

 
return (
    <>
     {
       loading ?  <Stack sx={{ color: 'grey.500' , marginLeft:"50vw" , marginTop:"30vh" }} spacing={2} direction="row">
       <CircularProgress color="secondary" />
     </Stack> : 
      <div style={{width:"70vw" , height:"30vh" , marginTop:"5vh" , marginLeft:"15vw"}}>

<input style={purpleMode ? themeColor.purpleSelect : themeColor.cyanSelect} className="table-Inputs" name="userName" onChange={updateValue} placeholder="Enter Student Name"/>
<input style={purpleMode ? themeColor.purpleSelect : themeColor.cyanSelect} className="table-Inputs" name="userId" onChange={updateValue}  placeholder="Enter Student Id"/>
<input style={purpleMode ? themeColor.purpleSelect : themeColor.cyanSelect} className="table-Inputs" type="number"  name="grade" onChange={updateValue}  placeholder="Enter Student Grade"/>
<input style={purpleMode ? themeColor.purpleSelect : themeColor.cyanSelect} className="table-Inputs" type="text"  name="test" onChange={updateValue}  placeholder="Enter Student test"/>

 {/* <select  style={purpleMode ? themeColor.purpleSelect : themeColor.cyanSelect} className="table-select" name="test"  onChange={updateValue}>
 <option>Test</option>
   {
     tests?.map((test , index) => 
          <option key={index} value={test}>{test}</option>
     )
   }

 </select> */}

 <select style={purpleMode ? themeColor.purpleSelect : themeColor.cyanSelect} className="table-select"  name="course" onChange={updateValue}>
 <option>Course</option>
   {
     courses?.map((course , index) => 
          <option key={index} value={course}>{course}</option>
     )
   }

 </select>
<button style={purpleMode ? themeColor.purpleButton : themeColor.cyanButton} className="table-button" type="button" onClick={addGrade}>Add Grade</button>

<table className="table-fill">
<thead>
<tr>
<th className="text-left" style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>Name</th>
<th className="text-left" style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>Id</th>
<th className="text-left" style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>Grade</th>
<th className="text-left" style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>Test</th>
<th className="text-left" style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>Course</th>
<th className="text-left" style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}></th>
</tr>
</thead>
<tbody className="table-hover">
{
usersData?.map((user , index) => 
<tr key={index}>
 <td className="text-left">{user.userName}</td>
 <td className="text-left">{user.userId}</td>
 <td className="text-left">{user.grade}</td>
 <td className="text-left">{user.test}</td>
 <td className="text-left">{user.course}</td>
 <td><UpdateIcon className="admin-Buttons" onClick={() => updateUser(user,userToUpdate)}/> <DeleteIcon  className="admin-Buttons" onClick={() => deleteUserGrade(user)}/></td>
</tr>
)
}
</tbody>
</table>
</div> 
}
    </>
     
  );
}

export default AdminGradesTable ;





