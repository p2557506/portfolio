import React, { useState } from 'react'
import "./portfolio.scss"
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
        <div className="item">
          <img src="https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=840" alt="" />
          <h3>Naruto Web App</h3>
        </div>
        <div className="item">
          <img src="https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=840" alt="" />
          <h3>Naruto Web App</h3>
        </div>
        <div className="item">
          <img src="https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=840" alt="" />
          <h3>Naruto Web App</h3>
        </div>
        <div className="item">
          <img src="https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=840" alt="" />
          <h3>Naruto Web App</h3>
        </div>
      </div>
    </div>
  )
}

export default Portfolio