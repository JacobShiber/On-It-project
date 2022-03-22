// import React from "react"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../features/login/login-component";
import Contact from "../pages/contact/contact-component";
// import Register from "../features/register/register-component";
import Home from "../pages/home/home-component";
import LoginPage from "../pages/login/loginPage-component";
import News from "../pages/news/news-component";
import Schedule from "../pages/schedule/schedule-component";

const PageRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/register" element={<Register />} /> */}
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/schedule" element={<Schedule />} />
          {/* <Route exact path="/footer" element={<Footer />} /> */}
          {/* <Route exact path="/home" element={<Footer />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default PageRouting;

