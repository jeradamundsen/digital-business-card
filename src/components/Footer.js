import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
  return(
    <div className="footer_div">
      <footer>
      <FontAwesomeIcon icon={faGithub} className="github"/> 
      <FontAwesomeIcon icon={faLinkedin} className="linkedIn"/>  
      <FontAwesomeIcon icon={faTwitter} className="twitter" />   
      <FontAwesomeIcon icon={faInstagram} className="insta"/>  
    </footer>
    </div>
    
  )
}