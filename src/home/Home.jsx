import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Portfolio from "../components/portfolio/Portfolio";


import Intro from "../components/intro/Intro";
import Contact from "../components/contact/Contact";
import { useState } from "react";
import Menu from "../components/menu/Menu";
import "./home.scss"
import About from '../components/about/About';




const Home = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="home">
        <div className="navbar">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
      <div className="sections">
      <div className="introSection">
          <Intro/>
        </div>
        
        <div className="portfolioSection">
          <Portfolio/>
        </div>
        <div className="contactSection">
          <Contact/>
        </div>
      </div>
    </div>
  )
}

export default Home