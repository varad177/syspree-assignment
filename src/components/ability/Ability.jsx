import React from "react";
import "./ability.css";
import statsinfo from "../../assets/statsinfo.png";
const Ability = () => {
  return (
    <section id="ability">
      <div className="abilityWrapper">
        <div className="ability_content">
          <p>Why Choose Us</p>
          <h1>
            We provide <span>transparent <br /> pricing</span> with <span>no hidden cost</span>
          </h1>
          <p>
            Make use of opportunity to have your financial and corporate <br />
            services in singapore evaluated bt filling out our online <br />
            form and bok a session with us{" "}
          </p>

          <div className="contentBox">
            <div className="box">
              <div className="cirleWrapper">
                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart orange">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray="95, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      95%
                    </text>
                  </svg>
                </div>
              </div>
              <div className="BoxContent">
                <p>Clients</p>
                <h3>Quick Response</h3>
              </div>
            </div>
            <div className="box">
              <div className="cirleWrapper">
                <div class="single-chart">
                  <svg viewBox="0 0 36 36" class="circular-chart orange">
                    <path
                      class="circle-bg"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      class="circle"
                      stroke-dasharray="85, 100"
                      d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <text x="18" y="20.35" class="percentage">
                      85%
                    </text>
                  </svg>
                </div>
              </div>
              <div className="BoxContent">
                <p>Projects</p>
                <h3>Finish Jobs</h3>
              </div>
            </div>
          
          </div>

          <p id="getInTouch" >Get In Touch</p>
          <div className="line"></div>
        </div>
        <div className="abilityImage">
          <img src={statsinfo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Ability;
