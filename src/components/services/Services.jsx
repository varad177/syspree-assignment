import React, { useEffect } from "react";
import "./services.css";
import Slider from "./Slider";

const Services = () => {
  return (
    <div id="wrapper">
      <section id="services">
        <h3 className="servivesSmallHeading"><p>Our Services</p></h3>
        <h1 className="servicesLargeHeading">
          <p>
            {" "}
            Your only choice for
            <span>
              Conprehensive, Professional One-Stop <br />
              Business Services {" "}
            </span>
            in Singapore
          </p>
        </h1>
        <h3 className="servivesSmallHeading" id="servicesSmallHeading">
          <p> We provide transparent pricing with no hidden costs.</p>{" "}
        </h3>
      </section>
      <Slider />
    </div>
  );
};

export default Services;
