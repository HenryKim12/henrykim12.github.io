import React from 'react'
import "./LeftLayout.css"
import linkedin_img from "../../../data/images/linkedin.png"
import github_img from "../../../data/images/github.png"
import mail_img from "../../../data/images/mail.png"
import FadeIn from 'react-fade-in/lib/FadeIn';


function LeftLayout() {
  return (
    <div className='left-section'>
        <ul className='socials'>
            <FadeIn delay={250}>
                <li className="social">
                    <a href={"https://www.linkedin.com/in/henrykim12/"} target="_blank" rel="noreferrer">
                        <img className="image" src={linkedin_img} alt='linkedin_img' width="25px" height="25px"></img>
                    </a>
                </li>
                
                <li className="social">
                    <a href={"https://github.com/HenryKim12"} target="_blank" rel="noreferrer">
                        <img className="image" src={github_img} alt='github_img' width="20px" height="20px"></img>
                    </a>
                </li>

                <li className="social">
                    <a href={"mailto:henryshkim@hotmail.com"} target="_blank" rel="noreferrer">
                        <img className="image" src={mail_img} alt='mail_img' width="20px" height="20px"></img>
                    </a>
                </li>
            </FadeIn>
        </ul>
    </div> 
  )
}

export default LeftLayout