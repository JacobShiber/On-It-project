import React , {useState} from "react";
import AdminRegister from "./admin-register-component";
import UserRegister from "./user-register-component";


const MainRegister = () => {
const [registerType, setRegisterType] = useState('user')
 return (
     <div className="registerComponents">
         <div className="registerButtons">
         <button onClick = {() => setRegisterType('admin')}>Admin</button> 
         <button onClick = {() => setRegisterType('user')}>User</button>
         </div>
         {registerType == 'admin' ? <AdminRegister /> : <UserRegister/>}
     </div>
 )
}

export default MainRegister ;