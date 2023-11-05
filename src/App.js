import { BrowserRouter,Route,Routes } from "react-router-dom";
import Portfolio from "./components/portfolio/Portfolio";
import Home from "./home/Home";
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  //Menu not open by default
  const [menuOpen,setMenuOpen] = useState(false);
  //Passed as props
  {/**Structure
Top
Section : Intro, Portfolio, Work... testimonials */}
  return (
    <div className="app">
      <div className="navbar">
        <Navbar menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen ={menuOpen} setMenuOpen={setMenuOpen}/>
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
  );
}

export default App;
