import React from "react";
import logoGithub from './homePicture/gifGithub.jpg';
import logoLinkedin from './homePicture/linkedin.png';
import logoEmail from './homePicture/email.png';
import logoCheck from './homePicture/PinkCheck.png';
// import mainPic from './homePicture/computerAndCoffe.png';
import computerPic from './homePicture/computerMain.jpg';
import LogoPic from './homePicture/Logo-white.png';

import './home.css'
import { Link } from "react-router-dom";

const sendMassage=()=>{
  alert("Thank you for your time to massage us")
}
const Home = () => {
  return (
    <div className="home">
<section className="textOnPicMain">
  <h1><img src={LogoPic} className="picOnIt"/>n It
  </h1>
  <h3>Be stronger than your excuse</h3>
</section><img className="mainPic" src={computerPic}
  alt="computer"/>

<section className="ourService">
      <h1>OUR SERVICES</h1>
        <article className="Service">
          <img
            src="https://thumbs.dreamstime.com/b/icon-support-customer-service-call-center-vector-icons-help-phone-contact-business-line-symbol-communication-telephone-technology-140921371.jpg"
            alt="picService"
          />
          <Link to="/contact"><h2>Contact</h2></Link>
          <h3>
            In this page you can
            <br />
            contact to all your
            <br />
            friends and admins.
          </h3>
        </article>
        <article className="Service">
          <img
            src="https://thumbs.gfycat.com/BlindZigzagGreatargus-max-1mb.gif"
            alt="picService"
          />
             <Link to="/news"><h2>News</h2></Link>
          <h3>
            In this page you can
            <br />
            see your news in live
            <br />
            And not to hear from others
          </h3>
        </article>
        <article className="Service">
          <img
            src="https://i.pinimg.com/originals/36/1a/f8/361af8ea19b3ae80d06922bb2a314afd.jpg"
            alt="picService"
          />
          <Link to="/schedule"><h2>Schedule</h2></Link>
          <h3>
            In this page you can
            <br />
            see your schedule anytime
            <br />
            Without being late for class
          </h3>
        </article>
      </section>

      <section className="aboutUs">
        <article className="aboutUsPic">
          <img
            src="https://media.istockphoto.com/photos/concept-against-racism-or-racial-discrimination-by-showing-with-hand-picture-id1252564431?s=2048x2048"
            alt="us"
          />
        </article>
        <article className="aboutUsArticle">
          <h1>ABOUT US</h1>
          <h3>
            We are four Tech-Career's students from israel and this is our final
            Project. <br/>
            We chose this idea for students to aid them to be more arranged.
            The main goal is to have all the details of their studies arranged in one place. <br/>
            We do it because
            we did not have this platform , and we think that every student should have it.
          </h3>
          <br />
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <img
                src={logoCheck}
                alt="vi"
                width="18px"
                height="18px"
              />
              Quick updates
            </li>
            <li>
              <img
                src={logoCheck}
                alt="vi"
                width="18px"
                height="18px"
              />
              Scheduling
            </li>
            <li>
              <img
                src={logoCheck}
                alt="vi"
                width="18px"
                height="18px"
              />
              Completion of lessons
            </li>
            <li>
              <img
                src={logoCheck}
                alt="vi"
                width="18px"
                height="18px"
              />
              Concentrated grades
            </li>
            <li>
              <img
                src={logoCheck}
                alt="vi"
                width="18px"
                height="18px"
              />
              news
            </li>
          </ul>
        </article>
      </section>

{/* <section>
  <h1>ABOUT THE WEB </h1>
<h3>
  This side established to target students in the institution they are.<br/>
  Show them their scores are focused in one place. <br/>
  Their updates on a separate and clear page.
</h3>
</section> */}







      <h1>MEET THE TEAM</h1>
      <section className="theTeam">
        <article className="student">
          <img className="picStudents"
            src="https://cdn.pixabay.com/photo/2019/12/09/08/14/celebrity-4682972_960_720.jpg"
            alt="picStudent"
          />
          <br />
          <h2>Shimon Samay</h2>
          <h4>graduate Tech-Career</h4>
          <a href="shimonsamay7@gmail.com" target="_blank">
          <img src={logoEmail}
          width="38px" height="30px" alt="gifEmail"/></a>
          <a href="https://github.com/ShimonSamay" target="_blank">
           <img src={logoGithub}
          width="41px" height="30px" alt="gifGithub"/></a>
          <a href="https://www.linkedin.com/in/shimon-samay-363a27217/" target="_blank">
           <img src={logoLinkedin}
          width="38px" height="30px" alt="gifLinkedin"/></a>
        </article>


        <article className="student">
          <img  className="picStudents"
            src="https://cdn.pixabay.com/photo/2019/12/09/08/14/celebrity-4682972_960_720.jpg"
            alt="picStudent"
          />
          <br />
          <h2>Jacob Shiber</h2>
          <h4>graduate Tech-Career</h4>
          <a href="Yaakovshiber@gmail.com" target="_blank">
          <img src={logoEmail}
          width="38px" height="30px" alt="gifEmail"/></a>
          <a href="https://github.com/JacobShiber" target="_blank">
           <img src={logoGithub}
          width="41px" height="30px" alt="gifGithub"/></a>
          <a href="https://www.linkedin.com/in/yaakov-shiber-31a466226/" target="_blank">
           <img src={logoLinkedin}
          width="38px" height="30px" alt="gifLinkedin"/></a>
        </article>


        <article className="student">
          <img  className="picStudents"
            src="https://cdn.pixabay.com/photo/2019/12/09/08/14/celebrity-4682972_960_720.jpg"
            alt="picStudent"
          />
          <br />
          <h2>Keren Hailu</h2>
          <h4>graduate Tech-Career</h4>
          <a href="keren4509@gmail.com" target="_blank">
          <img src={logoEmail}
          width="38px" height="30px" alt="gifEmail"/></a>
          <a href="https://github.com/kerenhailu" target="_blank">
           <img src={logoGithub}
          width="41px" height="30px" alt="gifGithub"/></a>
          <a href="https://www.linkedin.com/in/keren-hailu-58bb07218/" target="_blank">
           <img src={logoLinkedin}
          width="38px" height="30px" alt="gifLinkedin"/></a>
        </article>

        <article className="student">
          <img  className="picStudents"
            src="https://cdn.pixabay.com/photo/2019/12/09/08/14/celebrity-4682972_960_720.jpg"
            alt="picStudent"
          />
          <br />
          <h2>Shay Belayneh</h2>
          <h4>graduate Tech-Career</h4>
          <a href="shay600195@gmail.com" target="_blank">
          <img src={logoEmail}
          width="38px" height="30px" alt="gifEmail"/></a>
          <a href="https://github.com/ShayBelayneh" target="_blank">
           <img src={logoGithub}
          width="41px" height="30px" alt="gifGithub"/></a>
          <a href="https://www.linkedin.com/in/shay-belayneh/" target="_blank">
           <img src={logoLinkedin}
          width="38px" height="30px" alt="gifLinkedin"/></a>
        </article>
      </section>

      <section className="questionsText">
        <h1>GET IN TOUCH </h1>
        <h2>For questions, requests and inquiries we are always 
          available and happy to help :</h2>
        {/* <label htmlFor="">Name : </label><br/> */}
        <input placeholder="  Name" className="inputName"/>
        {/* <label htmlFor="">Email : </label><br/> */}
        <input placeholder="  Email" className="inputEmail"/><br/>
        {/* <label >Text : </label><br/> */}
        <input placeholder="  Massage" className="inputMassage"/><br/>
        <button onClick={sendMassage}>send</button>
        <hr/>
      </section>

      {/* <section className="questions">
        <img src="https://zephyrnet.com/wp-content/uploads/2020/09/5-questions-with-chase-cio-rohan-amin.jpg"
alt="picQuestions" />
      </section> */}

    </div>
  );
};
export default Home;
