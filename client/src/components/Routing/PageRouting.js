import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../features/login/login-component";
import Register from "../features/register/register-component";
import LoginPage from "../pages/login/loginPage-component";

const PageRouting=()=> {
  return (
    <div>
<BrowserRouter>
{/* <LoginPage/> */}
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}
export default PageRouting;
