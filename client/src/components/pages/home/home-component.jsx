import React from "react";
import {GetAllNews} from '../../../services/newsUser/newsUser.service';


const Home = () => {
  return (
    <div className="home">
      Home
      <h1>MEET THE TEAM</h1>
      <section className="theTeam">
        <article className="student">
          <img src="" alt="picStudent" width="70px" height="70px" />
          studentOne
        </article>
        <article className="student">
          <img src="" alt="picStudent" width="70px" height="70px" />
          studentOne
        </article>
        <article className="student">
          <img src="" alt="picStudent" width="70px" height="70px" />
          studentOne
        </article>
      </section>

      <button onClick = {GetAllNews}>Click</button>
    </div>
  );
};
export default Home;
