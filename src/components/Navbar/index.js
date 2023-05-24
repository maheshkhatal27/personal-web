import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import {GrClose}  from 'react-icons/gr'
import {AiOutlineClose} from "react-icons/ai"
import "./index.css"


const Navbar = () => {

  const[state,setIconState]=useState(false)

  const handleClick = ()=>{
    setIconState(!state)
  }
  return (
    <nav className='navbar-container'>
        <div className="logo-container">
            <h2 className='logo-name'>MAHESH K.</h2>    
        </div>
        
        <ul id="menu-container" className={state ? "#menu-container": "#menu-container active"}>
            <NavLink to="/" className='item'>HOME</NavLink>
            <NavLink to="/about" className='item'>ABOUT ME</NavLink>
            <NavLink to="/services" className='item'>SERVICES</NavLink>
            <NavLink to="/projects" className='item'>PROJECTS</NavLink>
            <NavLink to="/contact" className='item'>CONTACT</NavLink>
  
        </ul>
        <div id="mobile" onClick={handleClick}>
           {state ?  <AiOutlineClose className='navbar-icon' /> :  <FaBars className='navbar-icon' /> }
        </div>
    </nav>
  )
}

export default Navbar