import React from "react";
import "./index.css";
import Navbar from "../Navbar";



const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-container">
        <div className="profile-img-container">
          <div className="text-container">
            <span className="text">
              Hello, I am <span className="mahesh">Mahesh Khatal</span>,
              <br /> a <span id="software-dev">software developer</span> <br /> <span className="location">from 
              Mumbai,India.</span>
            </span>
          </div>
          <div>
            <img
              alt="profile-pic"
              src="https://res.cloudinary.com/dodmtflaq/image/upload/v1684761577/mahesh_vyndtf.jpg"
              className="img-resize"
            />
          </div>
        </div>
        <div className="contact-container">
          <h3 className="get-in-touch">Contact Me</h3>
          <i className="fa-solid fa-2x fa-hand-point-down"></i>
        </div>
        <div className="icon-container">
          <a
            href="https://twitter.com/maheshkhatal"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="fa-brands fa-2x fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/maheshkhatal/"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="fa-brands fa-2x fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/maheshkhatal27"
            target="_blank"
            rel="noreferrer"
            className="icon"
          >
            <i className="fa-brands fa-2x fa-github"></i>
          </a>
        </div>
      </div>
      <div className="footer-container">
          <p className="copyright">Copyright ©2023 All rights reserved-developed & maintained by Mahesh Khatal.</p>
        </div>
    </>
  );
};

export default Home;
