import React, { useState } from 'react'
import  "./navbar.scss"
import { Link } from 'react-router-dom'
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
const Navbar = ({menuOpen,setMenuOpen}) => {


  
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">

        <div className="left">
          <div className="logo">
            Isaac Zerououl
          </div>
          <div className="itemContainer">
            
            <div className="contactContainer">

              <EmailIcon className="icon"/>
              <span>zerououli@gmail.com</span>
            </div>
            <div className="contactContainer">

              <SmartphoneIcon className="icon"/>
              <span>+44 79 2330 2593</span>
            </div>

          </div>
        </div>
        <div className="right">
          {/**When hamburger is clicked set menu open to the state opposite o what it is */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar