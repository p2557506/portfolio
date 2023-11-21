import React, { useState,useEffect } from 'react'
import "./portfolio.scss"
import { Link } from 'react-router-dom';
import PortfolioList from '../portfolioList/PortfolioList';

import {featuredPortfolio, gamePortfolio, webPortfolio, mobilePortfolio} from "../../data.js"
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
    {
      id: "mobile",
      title: "Mobile App"
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
        case "mobile":
        setData(mobilePortfolio);
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

            <Link to={`/work/${d.id}`}>
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
          </Link>
          <p>{d.desc}</p>
        </div>
            ))}
        
      </div>
    </div>
  )
}

export default Portfolio