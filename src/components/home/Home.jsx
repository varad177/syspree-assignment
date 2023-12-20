import React from "react";
import video from "../../assets/herobg.mp4";
import "./home.css";
const Home = () => {
  return (
    <section id="home">
      <div className="background">
        <video
          autoPlay
          muted
          loop
          src={
            "https://res.cloudinary.com/do8ji7uqc/video/upload/v1703007931/gxskyup18yttldqfdfj7.mp4"
          }
        ></video>
      </div>

      <div className="homeContent">
        <div className="mainContent">
          <div className="mainHeading">
            <h1>
              Company <span>Secretarial, Accounting</span> and <span>Incorporation</span> Services,
              Singapore
            </h1>
          </div>
          <div className="smallheading">
            <p>
              SHORT Business Services is a one-stop corporate service provider
              dedicated to providing accounting, tax and corporate secreterial
              services to SMEs as well as indivisual
            </p>
          </div>
          <div className="smallheadint2">
            <p>
              Connect with us for all kinds of company secretarial service and
              taxation services, Singapore
            </p>
          </div>
          <div className="btn" id="homeBTN">
            <p>Learn More</p>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  );
};

export default Home;
