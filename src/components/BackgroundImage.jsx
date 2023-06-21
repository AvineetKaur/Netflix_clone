import React from 'react'
import background from "../assets/login.png";
import "../styles/backgroundImageStyles.css"

export default function BackgroundImage() {
  return (
    <div id="backgroundImgContainer">
        <img src={background} alt="" />
      
    </div>
  )
}
