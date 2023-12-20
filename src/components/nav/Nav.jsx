import React, { useState } from "react";
import "./Nav.css";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { Box, Drawer, List, ListItem } from "@mui/material";
import styled from "styled-components";

const HamNames = styled(ListItem)(({ theme }) => ({
  color: "black",

  "&>ul > li >a ": {
    color: "black",
  },
  "&>ul ": {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
}));

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const list = () => (
    <Box
      style={{ width: 200, backdropFilter: " blur(8px)" }}
      onClick={handleClose}
    >
      <List>
        <HamNames>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#services">Our Business Services</a>
            </li>
            <li>
              <a href="#ability">why choose us </a>
            </li>
          </ul>
        </HamNames>
      </List>
    </Box>
  );
  return (
    <nav>
      <div className="navTop">
        <div className="navTopLeft">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="navTopRight">
          <div className="media">
            <div className="mediaIcon">
              <i class="fa-regular fa-envelope"></i>
            </div>
            <div className="info">
              <p className="infoName">Mail Us</p>
              <p className="MainInfo">Info@Short.com.sg</p>
            </div>
          </div>
          <div className="media">
            <div className="mediaIcon2">
              <FiPhoneCall className="callIcon" />
            </div>
            <div className="info">
              <p className="infoName">Have a question?</p>
              <p className="MainInfo">+65 86124114</p>
            </div>
          </div>
          <i
            onClick={handleOpen2}
            class="fa-solid fa-address-book contacts"
          ></i>
          <Drawer anchor="right" open={open2} onClose={handleClose2}>
            <Box
              style={{
                width: 200,
                backgroundColor: "#13235B",
                backdropFilter: "blur(5px",
                color: "black",
                padding: "2rem 1rem",

              }}
              onClick={handleClose}
            >
              <div className="hammedia">
                <div className="mediaIcon2">
                  <FiPhoneCall className="callIcon" />
                </div>
                <div className="info">
                  <p className="infoName">Have a question?</p>
                  <p className="MainInfo">+65 86124114</p>
                </div>
              </div>
              <div className="hammedia">
                <div className="mediaIcon2">
                  <i style={{color :'#E3B209'}} class="fa-regular fa-envelope"></i>
                </div>
                <div className="info">
                  <p className="infoName">Mail Us</p>
                  <p className="MainInfo">Info@Short.com.sg</p>
                </div>
              </div>
            </Box>
          </Drawer>
        </div>
      </div>
      <div className="navBottom">
        <div className="logo">
          <img src={logo} alt="" srcset="" />
        </div>
        <div className="navNamesWrapper">
          <div className="navNames">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#services">Our Business Services</a>
              </li>
              <li>
                <a href="#ability">Why choose us </a>
              </li>
              <li>
                <i onClick={handleOpen} class="fa-solid fa-bars ham"></i>
                <Drawer open={open} onClose={handleClose}>
                  {list()}
                </Drawer>
              </li>
            </ul>
          </div>
          <div className="btn" id="navbtn">
            <p>Contact Us</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
