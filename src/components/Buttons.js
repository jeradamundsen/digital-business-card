import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
export default function Buttons(){
  return (
    
       <div className="buttons">
      <button className="button_mail"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
      <button className="button_linkedIn"><FontAwesomeIcon icon={faLinkedin} />LinkedIn </button>
    </div>
    
   
    
  )
}