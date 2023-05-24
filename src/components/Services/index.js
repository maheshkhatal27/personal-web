import React from 'react'
import "./index.css"
import Navbar from '../Navbar'
const Services = () => {
  return (
    <>
      <Navbar />
      <center><h1 class="service-heading">SERVICES</h1></center>
          <div class="content">
            <div class="box">
              <div class="inner">
                <h3 className='tech-name'>FRONT END TECHNOLOGIES</h3>
                <ul>
                  <li>HTML 5</li>
                  <li>CSS</li>
                  <li>BOOTSTRAP</li>
                  <li>REACTJS-HOOKS,REDUX</li>
                  <li>JAVASCRIPT</li>
                  <li>RESPONSIVE WEBSITE</li>
                </ul>
              </div>
            </div>
            <div class="box">
              <div class="inner">
              <h3 className='tech-name'>BACKEND TECH/LANGUAGES</h3>
                <ul>
                  <li>NODE JS</li>
                  <li>EXPRESS JS</li>
                  <li>CORE JAVA</li>
                  <li>PYTHON</li>
                  <li>JSP, SERVLETS</li>
                  <li>HIBERNATE, SPRINGBOOT</li>
                  <li>REST API</li>
                </ul>
              </div>
            </div>
            <div class="box">
              <div class="inner">
              <h3 className='tech-name'>DATABSE</h3>
                <ul>
                  <li>MYSQL</li>
                  <li>SQLITE</li>
                  <li>ORACLE</li>
                  <li>MONGO DB</li>
                </ul>
              </div>
            </div>
            <div class="box">
              <div class="inner">
              <h3 className='tech-name'>OTHER TECH. PRODUCTS AND TOOLS</h3>
                <ul>
                  <li>TIBCO BUSINESSWORKS</li>
                  <li>TIBCO MDM CERTIFIED PROFESSIONAL</li>
                  <li>VISUAL STUDIO</li>
                  <li>ECLIPSE</li>
                  <li>MAVEN</li>
                  <li>FIREBASE</li>
                  <li>GIT</li>
                </ul>
              </div>
            </div>
          </div>
    </>
    
  )
}

export default Services