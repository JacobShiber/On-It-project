import React from "react";
import logoGithub from './homePicture/gifGithub.jpg';
import logoLinkedin from './homePicture/linkedin.png';
import logoEmail from './homePicture/email.png';
import logoCheck from './homePicture/PinkCheck.png';
import mainPic from './homePicture/computerAndCoffe.png';
import './home.css'
const Home = () => {
  return (
    <div className="home">
<section className="textOnPicMain">
  <h1>On It</h1>
  <h3>All the detals you need to your studies</h3>
</section><img className="mainPic" src={mainPic}
  alt="computer"/>


<section className="ourService">
      <h1>OUR SERVICES</h1>
        <article className="Service">
          <img
            src="https://static.wixstatic.com/media/bd3f2b_20e1ab45bd5442748bf7789e5a4b8ea8~mv2.png/v1/fill/w_225,h_358,al_c,lg_1,q_85/bd3f2b_20e1ab45bd5442748bf7789e5a4b8ea8~mv2.webp"
            alt="picService"
            width="250px"
            height="250px"
          />
          <h2>Grades</h2>
          <h3>
            In this page you can
            <br />
            see your grades faster
            <br />
            Without staying in suspense
          </h3>
        </article>
        <article className="Service">
          <img
            src="https://www.clipartmax.com/png/middle/6-62802_newspaper-icon.png"
            alt="picService"
            width="250px"
            height="250px"
          />
          <h2>News</h2>
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
            src="https://media.istockphoto.com/vectors/calendar-and-clock-icon-vector-id1001687382?k=20&m=1001687382&s=170667a&w=0&h=8ca7Z4N7HDfLOKEIq-KWc-yaS_UJ0QNtrv3VPqpbONs="
            alt="picService"
            width="250px"
            height="250px"
          />
          <h2>Schedule</h2>
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
        <article className="aboutUsArticle">
          <img
            src="https://media.istockphoto.com/photos/concept-against-racism-or-racial-discrimination-by-showing-with-hand-picture-id1252564431?s=2048x2048"
            alt="us"
            width="700px"
            height="400px"
          />
        </article>
        <article className="aboutUsArticle">
          <h1>ABOUT US</h1>
          <h3>
            We are four students from Tech-Career School from israel and this is our final
            Project. we choose this side to help students be more arranged.
            they have all the details of their studies arranged in one place. We do it because
            we did not have this platform.
           
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

      {/* <section className="ourService">
      <h1>OUR SERVICES</h1>
        <article className="Service">
          <img
            src="https://static.wixstatic.com/media/bd3f2b_20e1ab45bd5442748bf7789e5a4b8ea8~mv2.png/v1/fill/w_225,h_358,al_c,lg_1,q_85/bd3f2b_20e1ab45bd5442748bf7789e5a4b8ea8~mv2.webp"
            alt="picService"
            width="250px"
            height="250px"
          />
          <h2>Grades</h2>
          <h3>
            In this page you can
            <br />
            see your grades faster
            <br />
            Without staying in suspense
          </h3>
        </article>
        <article className="Service">
          <img
            src="https://www.clipartmax.com/png/middle/6-62802_newspaper-icon.png"
            alt="picService"
            width="250px"
            height="250px"
          />
          <h2>News</h2>
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
            src="https://media.istockphoto.com/vectors/calendar-and-clock-icon-vector-id1001687382?k=20&m=1001687382&s=170667a&w=0&h=8ca7Z4N7HDfLOKEIq-KWc-yaS_UJ0QNtrv3VPqpbONs="
            alt="picService"
            width="250px"
            height="250px"
          />
          <h2>Schedule</h2>
          <h3>
            In this page you can
            <br />
            see your schedule anytime
            <br />
            Without being late for class
          </h3>
        </article>
      </section> */}

      <h1>MEET THE TEAM</h1>
      <section className="theTeam">
        <article className="student">
          <img
            src="https://cdn.pixabay.com/photo/2019/12/09/08/14/celebrity-4682972_960_720.jpg"
            alt="picStudent"
            width="250px"
            height="250px"
          />
          <br />
          <h3>students</h3>
          <h4>graduate Tech-Career</h4>
          <img src={logoEmail}
          width="38px" height="30px" alt="gifEmail"/>
           <img src={logoGithub}
          width="41px" height="30px" alt="gifGithub"/>
           <img src={logoLinkedin}
          width="38px" height="30px" alt="gifLinkedin"/>
        </article>
        <article className="student">
          <img
            src="https://cdn.pixabay.com/photo/2019/12/09/08/14/celebrity-4682972_960_720.jpg"
            alt="picStudent"
            width="250px"
            height="250px"
          />
          <br />
          <h3>students</h3>
          <h4>graduate Tech-Career</h4>
          <img src={logoEmail}
          width="38px" height="30px" alt="gifEmail"/>
           <img src={logoGithub}
          width="41px" height="30px" alt="gifGithub"/>
           <img src={logoLinkedin}
          width="38px" height="30px" alt="gifLinkedin"/>
        </article>
        <article className="student">
          <img
            src="https://cdn.pixabay.com/photo/2019/12/09/08/14/celebrity-4682972_960_720.jpg"
            alt="picStudent"
            width="250px"
            height="250px"
          />
          <br />
          <h3>students</h3>
          <h4>graduate Tech-Career</h4>
          <img src={logoEmail}
          width="38px" height="30px" alt="gifEmail"/>
           <img src={logoGithub}
          width="41px" height="30px" alt="gifGithub"/>
           <img src={logoLinkedin}
          width="38px" height="30px" alt="gifLinkedin"/>
        </article>
        <article className="student">
          <img
            src="https://cdn.pixabay.com/photo/2019/12/09/08/14/celebrity-4682972_960_720.jpg"
            alt="picStudent"
            width="250px"
            height="250px"
          />
          <br />
          <h3>students</h3>
          <h4>graduate Tech-Career</h4>
          <img src={logoEmail}
          width="38px" height="30px" alt="gifEmail"/>
           <img src={logoGithub}
          width="41px" height="30px" alt="gifGithub"/>
           <img src={logoLinkedin}
          width="38px" height="30px" alt="gifLinkedin"/>
        </article>
      </section>
      <section className="questionsText">
        <h2>For questions, requests and inquiries we are always <br/>
          available and happy to help :</h2>
        <label htmlFor="">Name : </label><br/>
        <input /><br/>
        <label htmlFor="">Email : </label><br/>
        <input /><br/>
        <label >Text : </label><br/>
        <input className="questionsTextInput"/><br/>
        <button>send</button>
      </section>
      {/* <section className="questions">
        <img src="https://zephyrnet.com/wp-content/uploads/2020/09/5-questions-with-chase-cio-rohan-amin.jpg"
alt="picQuestions" />
      </section> */}
    </div>
  );
};
export default Home;
