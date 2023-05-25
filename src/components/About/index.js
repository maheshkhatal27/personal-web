import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./index.css"
import Navbar from '../Navbar'
import { BsPersonWorkspace } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";

let timeLineElements=[{id:1,title:"SSC",year:"2006",location:"Mumbai,Maharashtra.",icon:"study"},
{id:2,title:"HSC",year:"2008",location:"Mumbai,Maharashtra.",icon:"study"},
{id:3,title:"BE Computer Engineering",year:"2008-2012",location:"University of Mumbai",icon:"study"},
{id:4,title:"Associate Consultant @TIBCO Software Inc",year:"2012-2015",location:"Mumbai,MH",icon:"work"},
{id:5,title:"Career Transition=>Civil Services",year:"2016-2022",location:"Mumbai,MH",icon:"study"},
{id:6,title:"M.A. in Public Administration",year:"2018-2020",location:"IGNOU,New Delhi",icon:"study"},
{id:7,title:"Trainee MERN Stack Developer @Nxtwave",year:"May 2022- May 2023",location:"Mumbai,MH",icon:"work"},
{id:8,title:"JAVA Full Stack Developer @IOT Academy,IIT Guwahati",year:"Jan 2023- July 2023",location:"Mumbai,MH",icon:"work"},
{id:9,title:"Technical Consultant Trainee @ITNow Inc.",year:"June 2023- Present",location:"USA",icon:"work"},
]


const About = () => {
  let workIconStyle = {background:"#ed3eea"}
  let schoolIconStyle = {background:"#47edab"}

  return (
    <div>
      <Navbar />
      <h2 className='journey'><center>A Brief Look @MY JOURNEY</center></h2>
      <VerticalTimeline className='time-element'>
        {
          timeLineElements.map(element=>{
            let isWorkIcon=element.icon === "work";
             return(
              <VerticalTimelineElement 
              key={element.id} 
              date={element.year} 
              dateClassName='date color-date' 
              iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle} 
              icon={isWorkIcon ? <BsPersonWorkspace /> :<FaUserGraduate />}
              >
                <h3 className='vertical-timeline-element-title' id='title-location'>{element.title}</h3>
                <h5 className='vertical-timeline-element-subtitle' id='title-location'>{element.location}</h5>
                <h6 id='display-year'>{element.year}</h6>
              </VerticalTimelineElement>
             ) 
          })
        }
      </VerticalTimeline>
    </div>
    
  )
}

export default About