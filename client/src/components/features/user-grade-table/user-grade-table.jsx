import React , {useState , useEffect, useContext} from "react";
import { GetAllGrades } from "../../../services/userGrades/uses-grades-service";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import {LoadingContext} from "../../../context/loading/loading-context"


const UserGradesTable = () => {

    let [userData, setUserData] = useState([]);
    let {loading,setLoading} = useContext(LoadingContext);
    const userFromMemory = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
      setLoading(true);
        GetAllGrades()
        .then(data => setUserData(data))
        .finally(() => setLoading(false));
    } , []);  
   return (
     <>
     {
       loading ? <Stack sx={{ color: 'grey.500' , marginLeft:"50vw" , marginTop:"30vh" }} spacing={2} direction="row">
       <CircularProgress color="secondary" />
     </Stack> : 
    <div style={{width:"70vw" , height:"30vh" , marginLeft:"15vw" , marginTop:"15vh" }}>
    <table className="table-fill">
<thead>
<tr>
<th className="text-left">Name</th>
<th className="text-left">Id</th>
<th className="text-left">Grade</th>
<th className="text-left">Test</th>
<th className="text-left">Course</th>
</tr>
</thead>
<tbody className="table-hover">
{
userData.filter(user => user.userId === userFromMemory.id).map((user , index) => 
 <tr key={index}>
 <td className="text-left">{user.userName}</td>
 <td className="text-left">{user.userId}</td>
 <td className="text-left">{user.grade}</td>
 <td className="text-left">{user.test}</td>
 <td className="text-left">{user.course}</td>
</tr> 
)
}
</tbody>
</table>
  </div>
     }
</>
)
}

export default UserGradesTable ;

