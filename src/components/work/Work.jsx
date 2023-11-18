import React from 'react'
import Navbar from '../navbar/Navbar'
import Menu from '../menu/Menu'
import { useState } from 'react'

import "./work.scss"
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faGit,faSass,faHtml5,faNode} from '@fortawesome/free-brands-svg-icons'


const Work = () => {

    const location = useLocation();
    const workId = location.pathname.split("/")[2];
    console.log(workId);

    const list = [
        {
          id: "0",
          title : "Naruto",
        },
        {
          id: "1",
          title: "Web App",
        },
        {
          id: "2",
          title: "Game App"
        },
        {
          id: "3",
          title: "Mobile App"
        },
    
      ];
    const [menuOpen,setMenuOpen] = useState(false);

    
  return (
    <div className="work" key={workId}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            
        <div className="specificSection" key={workId}>
          <div className="left">
                  <h1>Work</h1>
                <div className="header">
                  <div className="appIntro">

                    <h2 className="appName">NarutoWorld</h2>
                    <p>Web App</p>
                  </div>
                  <div className="techContainer">
                    <h2>Tech Stack</h2>
                    <div className="techStack">
                      <FontAwesomeIcon icon={faReact} />
                      <FontAwesomeIcon icon={faHtml5} />
                      <FontAwesomeIcon icon={faSass} />

                    </div>
                      
                  </div>
                </div>
                <div className="technicalDetails">
                  <h2>Details</h2>
                  <p>Website to help users learn about Naruto lore and provide them with a watching guide to follow the narrative without filler</p>
                  <p>Look through characters, backstories and villages in the naruto universe</p>
                </div>
                <div>
                  <h2>Purpose & Goals</h2>
                  <p>I developed this website out of a passion for the Naruto universe to help both old and new watchers learn about the characters in the show aswell as provide a watching guide without the filler </p>
                </div>
                <div>
                  <h2>Problems Encountered</h2>
                  <p>I developed this website out of a passion for the Naruto universe to help both old and new watchers learn about the characters in the show aswell as provide a watching guide without the filler </p>
                </div>
                <div>
                  <h2>Lessons Learned</h2>
                  <p>I developed this website out of a passion for the Naruto universe to help both old and new watchers learn about the characters in the show aswell as provide a watching guide without the filler </p>
                </div>
                <div className="appInteract">
                    <button>Visit Website</button>
                </div>
                <div className="examples">
                  <h2>Examples</h2>
                    <div className="exampleImage">
                      <img src="" alt="" />
                    </div>
                    <div className="exampleImage">
                      <img src="" alt="" />
                    </div>
                    <div className="exampleImage">
                      <img src="" alt="" />
                    </div>
                </div>
          </div>
          <div className="right">
            <h2>Other Projects</h2>
            <p>djdjdjdjdj</p>
          </div>
        </div> 

    </div>
  )
}

export default Work