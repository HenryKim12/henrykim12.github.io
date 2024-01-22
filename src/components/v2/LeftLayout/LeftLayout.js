import React from 'react'
import "./LeftLayout.css"
import linkedin_img from "../../../data/images/linkedin.png"
import github_img from "../../../data/images/github.png"
import mail_img from "../../../data/images/mail.png"
import FadeIn from 'react-fade-in/lib/FadeIn';
import { Icon } from '@iconify/react';


function LeftLayout() {
  return (
    <div className='left-section'>
        <ul className='socials'>
            <FadeIn delay={250}>
                <li className="social">
                    <a href={"https://www.linkedin.com/in/henrykim12/"} target="_blank" rel="noreferrer">
                        <Icon className="contact-icon" icon="mdi:linkedin" width="30px" height="30px" color='white'/>
                    </a>
                </li>
                
                <li className="social">
                    <a href={"https://github.com/HenryKim12"} target="_blank" rel="noreferrer">
                        <Icon className="contact-icon" icon="mdi:github" width="30px" height="30px" color='white'/>
                    </a>
                </li>

                <li className="social">
                    <a href={"mailto:henryshkim@hotmail.com"} target="_blank" rel="noreferrer">
                    <Icon className="contact-icon" icon="ic:baseline-email" width="30px" height="30px" color='white'/>
                    </a>
                </li>
                <div className='vertical-line'></div>
            </FadeIn>
            
        </ul>
        
        
    </div> 
  )
}

export default LeftLayout