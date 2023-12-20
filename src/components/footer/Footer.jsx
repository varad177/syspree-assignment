import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="topFooter">
        <div className="footerontent">
          <div className="topLeft">
            <div className="footerlogo">
              <img src={logo} alt="" srcset="" />
            </div>
            <p className="footerPara">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit molestiae deleniti totam dolorem doloremque iusto
              odio excepturi nihil, aspernatur, sequi amet? Voluptate ad atque
              quas. Porro magni aut repellendus illum.
            </p>
            <div className="footerIcons">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
          <div className="topRight">
            <div className="quickLinks">
              <ul>
                <li id="quick_links_head">Company</li>
                <li>About</li>
                <li>Services</li>
                <li>Support</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="quickLinks">
              <ul>
                <li id="quick_links_head">Accounting Services</li>
                <li>Accounting</li>
                <li>Accounting and Bookkeeping Services</li>
                <li>SME Accounting</li>
                <li>Outsourced Accounting</li>
              </ul>
            </div>
            <div className="quickLinks">
              <ul>
                <li id="quick_links_head">Our Services</li>
                <li>Company Incorporation</li>
                <li>Secretarial Services</li>
                <li>Taxation Services</li>
                <li>HR & Payroll Services</li>
                <li>Goods and Service Tax &#40; GST &#41; </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <div className="footerBottomLeft">
          <p> &#169; 2023 SHORTS Pte Ltd. All Rights Reserved</p>
        </div>
        <div className="footerBottonRight">
          <p>Privacy Policy</p>
          <p>Terms of use</p>
          <p>Site Map</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
