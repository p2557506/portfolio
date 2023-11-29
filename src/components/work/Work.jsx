import React from 'react'
import Navbar from '../navbar/Navbar'
import Menu from '../menu/Menu'
import { useState,useEffect } from 'react'

//Naruto Project Images
import narutoImg1 from "../../assets/nwebsitess.png"

//Pong project Images
import pongImg1 from "../../assets/pongGame.png"
//Atonement Project Images
import atonementImg1 from "../../assets/atonementTitleScreen.png"
//Wordle Project Images
import wordleImg1 from "../../assets/wordleclone.png"

import charp from "../../assets/c-sharp.png"

import "./work.scss"
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faGit,faSass,faHtml5,faNode,faUnity} from '@fortawesome/free-brands-svg-icons'


const Work = () => {

    const location = useLocation();
    //Parse int so thatswitch case works
    const workId = parseInt(location.pathname.split("/")[2]);
    

    const [chosenProject,setChosenProject] = useState([])

    const [menuOpen,setMenuOpen] = useState(false);
    
    const list = [
      {
        id: 1,
          title : "Naruto World",
          appType: "Web App",
          techStack1: <FontAwesomeIcon icon={faReact} />,
          techStack2: <FontAwesomeIcon icon={faHtml5} />,
          techStack3: <FontAwesomeIcon icon={faSass} />,
          details: <p>Website to help users learn about Naruto lore and provide them with a watching guide to follow the narrative without filler</p> ,
          purposeAndGoals: <div className="container"><p>I developed this website out of a passion for the Naruto universe.</p> <p>My intention with this website is to help both old and new watchers learn about the characters in the show and provide a watching guide without any of the filler</p></div> ,
          problemsFaced: <p>Naruto DB API doesn't feature all charcaters, clans villages I wanted to include in this app to make it as comprehensive as possible.</p>,
          lessonsLearned: <p>My skills with css animations improved greatly. I learnt how to better handle accessing APIs and work with Postman to test them</p>,
          img1:narutoImg1,
          img2:"",
          img3:"",

        },
        {
          id: 2,
          title : "PONG",
          appType: "2-Player Arcade Game",
          techStack1: <FontAwesomeIcon icon={faUnity} />,
          techStack2: <img src={charp} width="50px" ></img>,
          
          details: "2D sports game simulating table tennis. Can play against computer AI or another local player. Player that reaches 7 goals first wins",
          purposeAndGoals: "Game was developed to build knowledge on working with multiplayer games and provide a fun replayable experience to the player. To expand on the game, different modes, backgorunds and difficulty modes will be added to imporve replayability. Online multiplayer will also be implemented",
          problemsFaced:"N/A",
          lessonsLearned:"N/A",
          img1: pongImg1,
          img2:"",
          img3:"",
          
        },
        {
          id: 3,
          title : "Atonement",
          appType: "Platformer Game",
          techStack1: <FontAwesomeIcon icon={faUnity} />,
          techStack2: <img src={charp} width="50px" ></img>,
          
          details: "2D Platformer game containing 3 distinct levels and and a final boss stage.",
          purposeAndGoals: "This game was designed to be a compact and enjoyable experience for the player. Different enemy types were included to give the player unique challenges with an intention to keep them engaged. Different movement mechanics were also implemented to allow the player to be creative in the way they tackled obstacles. After beating the 3 levels the player would face a final boss enemy which would be much tougher than previous enemies encountered. 'Deathbringer' has a larger pool of health, ranged and close combat attacks and a 2nd phase offering a different challenge to the player",
          problemsFaced:"Thinking about how and why games were designed in the way they were presented a learning curve. Through extensive research by studying game design case studies, listening to game developer and interviews and taking inspiration from famous titles such as 'Hollow Knight' and 'Super Mario World' I was able to get a better grasp on level design, rewards, goals and immersion",
          lessonsLearned:"Creating 'Atonement' was my first real experience with using the Unity game engine. I learnt a great deal about colliders, vectors, scripting , animations, ai behaviours and grew much more familiar with C#. My knowledge of fundamental game design principles grew and my passion for game development was now born ",
          img1:atonementImg1,
          img2:"",
          img3:"",
        },
        {
          id: 4,
          title : "Wordle Clone",
          appType: "Web/Game App",
          techStack1: <FontAwesomeIcon icon={faReact} />,
          techStack2: <FontAwesomeIcon icon={faHtml5} />,
          
          details: <p>Website to help users learn about Naruto lore and provide them with a watching guide to follow the narrative without filler</p>,
          purposeAndGoals: <p></p>,
          problemsFaced:"I developed this website out of a passion for the Naruto universe to help both old and new watchers learn about the characters in the show aswell as provide a watching guide without the filler ",
          lessonsLearned:"I developed this website out of a passion for the Naruto universe to help both old and new watchers learn about the characters in the show aswell as provide a watching guide without the filler ",
          img1:wordleImg1,
          img2:"",
          img3:"",
        },
        {
          id:5
        }
        
      ];
      
      useEffect(()=>{
        switch (workId) {
          case 1:
            setChosenProject(list[0]);
            
            break;
            case 2:
              setChosenProject(list[1]);
            break;
            case 3:
              setChosenProject(list[2]);
            break;
            case 4:
              setChosenProject(list[3]);
            break;
            
          default:
            setChosenProject(list[0]);
            break;
        }
      },[workId]) //Dependency is selected, when changed useEffect will run
    

      console.log(list[1])
      console.log(list)
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
                      
                      {chosenProject.techStack1}
                      {chosenProject.techStack2}
                      {chosenProject.techStack3}
                      
                      

                    </div>
                      
                  </div>
                </div>
                <div className="technicalDetails">
                  <h2>Details</h2>
                  <p>{chosenProject.details}</p>
                </div>
                <div className="retrospectiveContainer">

                  <div className="purposeContainer">
                    <h2>Purpose & Goals</h2>
                    {chosenProject.purposeAndGoals} 
                  </div>
                  <div className="purposeContainer">
                    <h2>Problems Faced</h2>
                    {chosenProject.problemsFaced} 
                  </div>
                  <div className="purposeContainer">
                    <h2>Lessons Learned</h2>
                    {chosenProject.lessonsLearned}
                  </div>
                
                </div>
                <div className="appInteract">
                    <button>Visit Website</button>
                </div>
                <div className="examples">
                  <h2>Examples</h2>
                    <div className="exampleImage">
                      <img src={chosenProject.img1} alt="" />
                    </div>
                    <div className="exampleImage">
                      <img src={chosenProject.img2} alt="" />
                    </div>
                    <div className="exampleImage">
                      <img src={chosenProject.img3} alt="" />
                    </div>
                </div>
          </div>
          <div className="right">
          
            <h2>Projects</h2>
            <div className="projects">

            {list.map(item =>(
                <Link to={`/work/${item.id}`}>
              <div className="projectItem">
                <img src={item.img1} alt="" />
                <div>

                  <h2>{item.title}</h2>
                  <p>{item.appType}</p>
                </div>
              </div>
              </Link>
            ))}
            </div>
              
          </div>
        </div> 

    </div>
  )
}

export default Work