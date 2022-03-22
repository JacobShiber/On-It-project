import React , { useState , useEffect} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../features/login/login-component";
import Contact from "../pages/contact/contact-component";
import GradesTable from "../pages/grades-table/grades-table";
import Home from "../pages/home/home-component";
import LoginPage from "../pages/login/loginPage-component";
import News from "../pages/news/news-component";
import Schedule from "../pages/schedule/schedule-component";
import Footer from "../features/footer/footer-component";

import Navbar from "../features/navbar/navbar-component";

const user = JSON.parse(localStorage.getItem('user'));


const PageRouting = () => {
 
 const [user , setUser] = useState({});

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  } , []);
  
  console.log(user);
  return (
    <div> 
      <BrowserRouter>
      {user? <Navbar/> : null}
        <Routes>
          <Route exact path="/" element={<LoginPage />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/home" element={<Home />}/>
          <Route exact path="/news" element={<News />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/schedule" element={<Schedule />}/>
          <Route exact path="/grades" element={<GradesTable />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
     </div> 
  );
};
export default PageRouting;
