import React from 'react'
import "./Home.css"
import { socials } from '../../../data/socials/socials'
import github_img from '../../../data/socials/github.png'
import linkedin_img from '../../../data/socials/linkedin.png'
import mail_img from '../../../data/socials/mail.png'
import FadeIn from "react-fade-in"

function Home() {
  return (
    <section className='home'>
        <FadeIn delay={125}>
            <div className='fadeup-enter'>
                <h5 className='h5-text'>Welcome, my name is</h5>
            </div>
            <div className='fadeup-enter'>
                <h1 className='h1-one'>Henry Kim.</h1>
            </div>
            <div className='fadeup-enter'>
                <h1 className='h1-two'>I implement solutions.</h1>
            </div>
            <div className='fadeup-enter'>
                <p>I am a software developer that thrives to design and implement technology to provide solutions. Currently, I am pursuing a Bachelor's Degree as a Computer
                Science major at UBC and developing scalable applications at Powerex.</p>
            </div>
            <div className='fadeup-enter'>
                <p>Seeking new opportunities for Summer 2024.</p>
            </div>
            <div className="socials">
                <a className="social" href={socials["github"]["link"]} target="_blank" rel="noreferrer">
                    <img src={github_img} alt="github icon" width="30px" height="30px"></img>
                </a>

                <a className="social" href={socials["linkedin"]["link"]} target="_blank" rel="noreferrer">
                    <img src={linkedin_img} alt="linkedin icon" width="30px" height="30px"></img>
                </a>

                <a className="social" href={socials["email"]["link"]} target="_blank" rel="noreferrer">
                    <img src={mail_img} alt="mail icon" width="30px" height="30px"></img>
                </a>
            </div>
        </FadeIn>
        
    </section>
  )
}

export default Home