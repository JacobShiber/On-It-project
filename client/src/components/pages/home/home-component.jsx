import React , {useState , useContext} from "react";
import logoGithub from './homePicture/gifGithub.jpg';
import logoLinkedin from './homePicture/linkedin.png';
import logoEmail from './homePicture/email.png';
import logoCheck from './homePicture/Black_check.svg.png';
import computerPic from './homePicture/mainPicComputer.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './home.css'
import { Link } from "react-router-dom";
import shimonPic from './homePicture/shimon.jpg';
import jacobPic from './homePicture/jacob.jpg';
import kerenPic from './homePicture/keren.jpg';
import shayPic from './homePicture/shay.jpeg';
import { themeContext } from "../../../context/theme-context/theme-context";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  borderRadius: "5px",
  bgcolor: "rgb(0,0,0,0.7)",
  color: "white",
  border: '3px solid white  ',
  boxShadow: 24,
  textAlign: "center",
  p: 4,
};


const Home = () => {
  
  const [open, setOpen] = useState(false);
  
  const {themeColor ,  setThemeColor , purpleMode , setPurpleMode } = useContext(themeContext);

  const sendMassage = () => {
    setOpen(!open)

  }

  return (
    <div className="home">

<section className="textOnPicMain">
</section><img className="mainPic" src={computerPic}
  alt="computer"/>

<section className="ourService">
          <p>
           This web make the studying progress much more easy to deal with. <br/>
           Each feature is dedicated to accomplish our vision. <br/>
           they have all they need in one place.
          </p>
      <h1>FEATURES</h1>
        <article className="Service">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTDVTtbdg8H0w0N8EsnPqTTHXylwBiVx7gcz7J2G8UZO6acvJZNLSihwydbH68y8ZgcOA&usqp=CAU"
            alt="picService"
          />
          <Link to="/contact"><h2>Contact</h2></Link>
          <h3>
            In this page you can
            contact to all your
            friends and admins.
          </h3>
        </article>
        <article className="Service">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVzA_O9FU4yAZPDwRQHDx4OmvIMysz0E2gUVM2SCAE_oATo4JUpk5ZbmoOcXMhZy_00E&usqp=CAU"
            alt="picService"
          />
             <Link to="/news"><h2>News</h2></Link>
          <h3>
            In this page you can
            
            see your news in live
            
            And not to hear from others
          </h3>
        </article>
        <article className="Service">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6QC-MX2lLlMrNgH5L5a6xh4YKn5XfDwGW9E6MmwIlOin2uNanhJYVuPlbgww3jChR7U&usqp=CAU"
            alt="picService"
          />
          <Link to="/schedule"><h2>Schedule</h2></Link>
          <h3>
            In this page you can
            
            see your schedule anytime
            
            Without being late for class
          </h3>
        </article>
        <article className="Service">
          <img
            src="https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/news-icon-13-256.png"
            alt="picService"
          />
          <Link to="/grades"><h2>Grades</h2></Link>
          <h3>
            In this page you can
            
            check all your grades
          </h3>
        </article>

      </section>

      <section className="aboutUs" style={purpleMode ? themeColor.lightPurpleTheme : themeColor.lightCyanTheme}>
        <article className="aboutUsPic">
          <img className="aboutUsPicOne"
            src="https://www.mndd.co.il/wp-content/uploads/2020/03/minded-image-6-1.png"
            alt="us"
          />
          
        </article>
        <article className="aboutUsArticle">
          <h1>ABOUT US</h1>
          <h3>
            We are four Tech-Career's students from israel and this is our final
            Project. <br />
            We chose this idea for students to aid them to be more arranged.
            The main goal is to have all the details of their studies arranged in one place. <br />
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
                src={logoCheck  }
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

      <h1 className="meet-Team-Title">MEET THE TEAM</h1>
      <section className="theTeam">
        <article className="student">
          <img className="picStudents"
            src={shimonPic}
            alt="picStudent"
          />
          <br />
          <h2>Shimon Samay</h2>
          <h4>graduate Tech-Career</h4>
          <a href="shimonsamay7@gmail.com" target="_blank">
            <img src={logoEmail}
              width="38px" height="30px" alt="gifEmail" /></a>
          <a href="https://github.com/ShimonSamay" target="_blank">
            <img src={logoGithub}
              width="41px" height="30px" alt="gifGithub" /></a>
          <a href="https://www.linkedin.com/in/shimon-samay-363a27217/" target="_blank">
            <img src={logoLinkedin}
              width="38px" height="30px" alt="gifLinkedin" /></a>
        </article>

        <article className="student">
          <img className="picStudents"
            src={jacobPic}
            alt="picStudent"
          />
          <br />
          <h2>Jacob Shiber</h2>
          <h4>graduate Tech-Career</h4>
          <a href="Yaakovshiber@gmail.com" target="_blank">
            <img src={logoEmail}
              width="38px" height="30px" alt="gifEmail" /></a>
          <a href="https://github.com/JacobShiber" target="_blank">
            <img src={logoGithub}
              width="41px" height="30px" alt="gifGithub" /></a>
          <a href="https://www.linkedin.com/in/yaakov-shiber-31a466226/" target="_blank">
            <img src={logoLinkedin}
              width="38px" height="30px" alt="gifLinkedin" /></a>
        </article>
        <article className="student">
          <img className="picStudents"
            src={kerenPic}
            alt="picStudent"
          />
          <br />
          <h2>Keren Hailu</h2>
          <h4>graduate Tech-Career</h4>
          <a href="keren4509@gmail.com" target="_blank">
            <img src={logoEmail}
              width="38px" height="30px" alt="gifEmail" /></a>
          <a href="https://github.com/kerenhailu" target="_blank">
            <img src={logoGithub}
              width="41px" height="30px" alt="gifGithub" /></a>
          <a href="https://www.linkedin.com/in/keren-hailu-58bb07218/" target="_blank">
            <img src={logoLinkedin}
              width="38px" height="30px" alt="gifLinkedin" /></a>
        </article>

        <article className="student">
          <img className="picStudents"
            src={shayPic}
            alt="picStudent"
          />
          <br />
          <h2>Shay Belayneh</h2>
          <h4>graduate Tech-Career</h4>
          <a href="shay600195@gmail.com" target="_blank">
            <img src={logoEmail}
              width="38px" height="30px" alt="gifEmail" /></a>
          <a href="https://github.com/ShayBelayneh" target="_blank">
            <img src={logoGithub}
              width="41px" height="30px" alt="gifGithub" /></a>
          <a href="https://www.linkedin.com/in/shay-belayneh/" target="_blank">
            <img src={logoLinkedin}
              width="38px" height="30px" alt="gifLinkedin" /></a>
        </article>
      </section>

      <section className="questionsText">
        {/* <h1>GET IN TOUCH </h1> */}
        <h2>For questions, requests and inquiries we are always
          available and happy to help :</h2>
        <div>
        <input placeholder="  Name" className="inputName"/>
        <input placeholder="  Email" className="inputEmail"/><br/>
        <input placeholder="  Massage" className="inputMassage"/><br/>
        <button onClick={sendMassage}>send</button>
        <hr/>
        </div>
      </section>

      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p onClick={() => setOpen(!open)} style={{ cursor: "pointer", position: "relative", left: "50%", bottom: "25px" }}>&#9747;</p>
            <p>We received your message !</p>
          </Typography>
        </Box>
      </Modal>

    </div>
  );
};
export default Home;