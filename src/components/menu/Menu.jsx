import React from 'react'
import "./menu.scss"
import { HashLink,NavHashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
const Menu = ({menuOpen,setMenuOpen}) => {

    const handleClick = () =>{
        setMenuOpen(false);
    }
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={handleClick}>
            <a
  href="#intro"
  
  // etc...
>Intro</a>
            </li>
            <li onClick={handleClick}>
            <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={handleClick}>
                <a href="#contact">Contact</a>
            </li>
            
        </ul>
    </div>
  )
}

export default Menu