import React from 'react'
import  "./navbar.scss"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">

        <div className="left">
          <div className="logo">
            Isaac Zerououl
          </div>
          <div className="itemContainer">
            
          </div>
        </div>
        <div className="right">
          Right
        </div>
      </div>
    </div>
  )
}

export default Navbar