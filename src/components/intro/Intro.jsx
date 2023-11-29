import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped'

//Intro Images
import shot1 from "../../assets/mev2.png"
//Dwn Arrow
import dwnArw from "../../assets/downArw.png"
const Intro = () => {

  const textRef = useRef();


  useEffect(() =>{
    //Empty array calls once
    //UseRef better than document selector
    init(textRef.current, { 
      showCursor: true, 
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Developer", "2:1 Computer Science Graduate"],
    })
  },[]);
  return (
    <div className="intro" id="intro">
      
      <div className="left">
        <div className="imgContainer">
          <img src={shot1} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey, I'm</h2>
          <h1>Isaac Zerououl</h1>
          {/**Add blinking dash cmd prompt */}
          <h3><span></span><span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src={dwnArw} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro