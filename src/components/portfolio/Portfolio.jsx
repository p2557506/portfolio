import React, { useState,useEffect } from 'react'
import "./portfolio.scss"
import { Link } from 'react-router-dom';
import PortfolioList from '../portfolioList/PortfolioList';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

import {featuredPortfolio, gamePortfolio, webPortfolio, mobilePortfolio} from "../../data.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {

  const [selected,setSelected] = useState("featured");
  const [data,setData] = useState([]);

  const list = [
    {
      id: "featured",
      title : "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "game",
      title: "Game App"
    },
    

  ];

  useEffect(()=>{
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
        case "web":
          setData(webPortfolio);
          break;
          case "game":
        setData(gamePortfolio);
        break;
        
      default:
        setData(featuredPortfolio)
        break;
    }
  },[selected]) //Dependency is selected, when changed useEffect will run
  

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map(item =>(
          //active set to true if item is selected
          <PortfolioList title ={item.title} active ={selected === item.id} setSelected ={setSelected} id={item.id}/>
        ))}
      </ul>
      <div className="portfolioItemContainer">
          {data.map(d =>(
        <div className="projectContainer">

            
          <div className="itemImage">
            <img src={d.img} alt="" />
            
          </div>
          <div className="itemInfo">
            <h3 className="itemTitle">{d.title}</h3>
            <div className="itemTechStack">
              <div className="heading"><p>Tech Stack:</p></div>
              <div className="tech"><p>{d.techStack1}</p><p>{d.techStack2}</p><p>{d.techStack3}</p></div>
              
            </div>
            <p className="itemDescription">{d.desc}</p>
            <div className="buttons">
              <button className="codeBtn"><GitHubIcon /><a href={d.codeLink} target="_blank">Code</a></button>
              <button className="liveBtn"><PublicIcon/>Live</button>
            </div>

          </div>
        </div>
            ))}
        
      </div>
    </div>
  )
}

export default Portfolio