import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Footer(){
  return(
    <footer>
      <FontAwesomeIcon icon={faGithub} /> 
      <FontAwesomeIcon icon={faLinkedin} />  
      <FontAwesomeIcon icon={faTwitter} />   
      <FontAwesomeIcon icon={faInstagram} />  
    </footer>
  )
}