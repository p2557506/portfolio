import React from 'react'
import Navbar from '../navbar/Navbar'
import Menu from '../menu/Menu'
import { useState,useEffect } from 'react'

import "./work.scss"
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faGit,faSass,faHtml5,faNode} from '@fortawesome/free-brands-svg-icons'


const Work = () => {

    const location = useLocation();
    //Parse int so thatswitch case works
    const workId = parseInt(location.pathname.split("/")[2]);
    

    const [chosenProject,setChosenProject] = useState([])

    const [menuOpen,setMenuOpen] = useState(false);
    
    const list = [
      {
        id: 1,
          title : "Naruto World Website",
        },
        {
          id: 2,
          title: "Web App",
        },
        {
          id: 3,
          title: "Game App"
        },
        {
          id: 4,
          title: "Mobile App"
        },
        
      ];
      
      useEffect(()=>{
        switch (workId) {
          case 1:
            setChosenProject(list[0]);
            console.log(list[0])
            break;
            case 2:
              setChosenProject(list[1]);
            break;
            case 3:
              setChosenProject(list[2]);
            break;
            
          default:
            setChosenProject(list[2]);
            break;
        }
      },[]) //Dependency is selected, when changed useEffect will run
    

      console.log(list[1])
  return (
    <div className="work" key={workId}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            
        <div className="specificSection" >
          <div className="left">

                    <h1>Project</h1>
                <div className="header">
                  <div className="appIntro">
                    <h2 className="appName">{chosenProject.title}</h2>
                    <h3>App type</h3>
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
                <div className="retrospectiveContainer">

                  <div className="purposeContainer">
                    <h2>Purpose & Goals</h2>
                    <p>I developed this website out of a passion for the Naruto universe to help both old and new watchers learn about the characters in the show aswell as provide a watching guide without the filler </p>
                  </div>
                  <div className="purposeContainer">
                    <h2>Problems Faced</h2>
                    <p>I developed this website out of a passion for the Naruto universe to help both old and new watchers learn about the characters in the show aswell as provide a watching guide without the filler </p>
                  </div>
                  <div className="purposeContainer">
                    <h2>Lessons Learned</h2>
                    <p>I developed this website out of a passion for the Naruto universe to help both old and new watchers learn about the characters in the show aswell as provide a watching guide without the filler </p>
                  </div>
                
                </div>
                <div className="appInteract">
                    <button>Visit Website</button>
                </div>
                <div className="examples">
                  <h2>Examples</h2>
                    <div className="exampleImage">
                      <img src="https://i.pinimg.com/736x/82/d4/92/82d4926dcf09dd4c73eb1a6c0300c135.jpg" alt="" />
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