/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import profile from "../images/jerad3.png"

export default function Header(){
  return (
    
     <header>
      <img src={profile} className="header_img" alt="profile pic"/>
      <h2 className="header_name">Jerad Amundsen</h2>
      <h3 className="header_title">Frontend Developer</h3>
      <div className="header_link">https://boiling-ridge-84516.herokuapp.com/</div>
    </header> 
    
  )
}