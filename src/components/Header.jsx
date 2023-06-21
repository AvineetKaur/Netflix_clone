import React from 'react'
import "../styles/headerStyles.css"
import logo from "../assets/logo.png"

import { useNavigate } from 'react-router-dom'
export default function Header(props) {
  const navigate=useNavigate();
  return (
    <div id="containerHeader" className='flex a-center j-between'>
        <div className='logo'>
          <img src={logo} alt="logo"/>
        </div>
        <button  onClick={()=>navigate(props.login?"/login":"/signup")}>
          {props.login?"Log In":"Sign In"}
        </button>
      
    </div>
  )
}
