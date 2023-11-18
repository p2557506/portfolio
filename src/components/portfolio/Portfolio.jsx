import React, { useState } from 'react'
import "./portfolio.scss"
import { Link } from 'react-router-dom';
import PortfolioList from '../portfolioList/PortfolioList';
const Portfolio = () => {

  const [selected,setSelected] = useState("featured");

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
        <div className="projectContainer">
          <Link to={`/work/${1}`}>
          <div className="item">
            <img src="assets/nwebsitess.png" alt="" />
            <h3>Naruto World Website</h3>
          </div>
          </Link>
          <p>Website that lets user explore character abilities, backstories, clans, villages, tailed beasts and established teams that make up the amazing Naruto universe!</p>
        </div>
        <div className="projectContainer">
          <div className="item">
            <img src="assets/pongGame.png" alt="" />
            <h3>PONG Arcade Game</h3>
          </div>
          <p>2D sports game simulating table tennis. Have fun playing against computer ai or another player. First to 7 wins! </p>
        </div>
        <div className="projectContainer">

          <div className="item">
            <img src="assets/atonementTitleScreen.png" alt="" />
            <h3>2D Platformer Game</h3>
          </div>
          <p>2D Platformer game with 3 distinct base levels and a final boss stage for the player to beat! Contains unique enemy types, platforming oppurtunities and collectibles</p>
        </div>
        
      </div>
    </div>
  )
}

export default Portfolio