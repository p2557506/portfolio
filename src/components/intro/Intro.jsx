import React from 'react'
import "./intro.scss"

const Intro = () => {
  return (
    <div className="intro" id="intro">
      
      <div className="left">
        <div className="imgContainer">
          <img src="assets/mev2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey, I'm</h2>
          <h1>Isaac Zerououl</h1>
          <h3>Graduate Software Developer<span></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/downArw.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro