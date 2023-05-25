import React,{useState,useEffect} from 'react'
import axios from "axios"
import "./index.css"
import Navbar from '../Navbar'
import TabItem from '../TabItem'
import ProjectItem from '../ProjectItem'
const tabsList = [
  {tabId: 'MERN', displayText: 'MERN PROJECTS'},
  {tabId: 'JAVAFULLSTACK', displayText: 'JAVA FULLSTACK PROJECTS'},
  {tabId: 'DYNAMIC', displayText: 'DYNAMIC WEBSITE'},
]


// const projectList=[{id:1,type:"MERN",title:"Project Tasty Kitchen",description:"Created an app that will fetch data from an internal server, displaying that data, using component lifecycle methods, routing concepts, authentication, and authorization. User/pwd: david/the_miller@23",projectUrl:"https://maheshktastykit.ccbp.tech/login"},
// {id:2,type:"MERN",title:"NxtWave Shopping Cart",description:"I have used jtw token, product filtering,rating etc User/pwd: david/the_miller@23(as api is athenitcated against this user)",projectUrl:"https://maheshnxtfilter.ccbp.tech/login"},
// {id:3,type:"MERN",title:"React Timeline demo",description:"This project demonstrate the usage of react veritcal timeline usage",projectUrl:"https://maheshccbptmln.ccbp.tech/"},
// {id:4,type:"MERN",title:"Pkemon application",description:"Fetches data from the api and display the pokemons and when clicked on individual pokemon an info is displayed beside the main panel",projectUrl:"https://pokemon-app-181b5.web.app/"},
// {id:5,type:"MERN",title:"BMI Calculator App",description:"It involves local storage, useEffect, dependency array etc",projectUrl:"https://bmiapp.ccbp.tech/"},
// {id:6,type:"MERN",title:"Rock Paper Scissor",description:"If you click on RULES then pop up will displayed exaplaining the rules of the gam",projectUrl:"https://maheshrpsapp.ccbp.tech/"},
// {id:7,type:"MERN",title:"Job Portal",description:"It is a complete job portal developed using react router and other libraries",projectUrl:"https://maheshkhjobbyap.ccbp.tech/login"},
// {id:8,type:"MERN",title:"Prime Video App",description:"It is a simple emulation of Prime app",projectUrl:"https://maheshprmevdapp.ccbp.tech/"},
// {id:9,type:"MERN",title:"Event Management",description:"It is a demo of how event based triggered should be used to handle various events",projectUrl:"https://mahesheventapp.ccbp.tech/"},
// {id:10,type:"MERN",title:"IPL Dashboard",description:"Fetches data from the api and displays the stats , upon click can navigate to respective team's stats",projectUrl:"https://maheshipldashbr.ccbp.tech/"},
// {id:11,type:"MERN",title:"Emoji Game",description:"Aim here is not to click on the same emojis again. ",projectUrl:"https://maheshemoggame.ccbp.tech/"},
// {id:12,type:"MERN",title:"Password Management App",description:"The purspose is to store the password details and display them",projectUrl:"https://maheshpwdmgr.ccbp.tech/"},
// {id:13,type:"JAVAFULLSTACK",title:"Community Management App",description:"Community management app involves usage of react router dom and basic react features.",projectUrl:"https://communitymgmt-c02e2.web.app/"},
// {id:14,type:"DYNAMIC",title:"BOOKMARK MAKER",description:"A bookmark maker that saves the data and displays in the UI",projectUrl:"https://maheshbookmark.ccbp.tech/"},
// {id:15,type:"DYNAMIC",title:"TODO LIST",description:"A todolist maker built using localstorage ",projectUrl:"https://3todolistsetget.ccbp.tech/"},
// {id:16,type:"DYNAMIC",title:"FETCH COUNTIRES POPULATION",description:"Fething data from api and displaying the countrywise population",projectUrl:"https://maheshcountrysr.ccbp.tech/"},
// {id:17,type:"DYNAMIC",title:"HIDE & SHOW CLOCK",description:"toggling the clock display",projectUrl:"https://clockapphook.ccbp.tech/"},
// {id:18,type:"DYNAMIC",title:"CREDIT CARD EMULATION",description:"dynamically display credit details",projectUrl:"https://creditcardapp.ccbp.tech/"},
// {id:19,type:"DYNAMIC",title:"CODER LEADERBOARD",description:"display the code toppers in a tabular format",projectUrl:"https://leaderbrdap.ccbp.tech/"},


// ]

const projectsDataUrl = "https://web-production-dd70.up.railway.app/projectdata";

const Projects = () => {
  const[activeTabId,setTabId] = useState(tabsList[0].tabId)
  const[filterProject,setFilteredProjects]=useState([])   

   
  const updateActiveTabId = tabId => {
    setTabId(tabId)
  }

  useEffect(() => {

    axios.get(projectsDataUrl).then(response=>{
      
      const filteredProjects = getFilteredProjects(response.data.Projects);
     setFilteredProjects(filteredProjects)
      
    }).catch(err=>console.log(err));

  }, [activeTabId]);

 const getFilteredProjects = (projectData) => { 
    const filteredProjects = projectData.filter(
      eachProjectDetails => eachProjectDetails.type === activeTabId,
    )
    return filteredProjects
  }



  return (

    <>
      <Navbar />
      <div className='tab-project-container'>
      <h2 className='top-heading'><center>The List of Projects built by me over a course of time</center></h2>
      <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              updateActiveTabId={updateActiveTabId}
              isActive={tabDetails.tabId === activeTabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filterProject.map(projectDetails => (
            <ProjectItem
              key={projectDetails.id}
              projectDetails={projectDetails}
            />
          ))}
        </ul>      
      </div>
    </>
  )
}

export default Projects