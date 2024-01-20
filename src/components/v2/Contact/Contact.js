import React from 'react'
import { Fade } from 'react-reveal'
import "./Contact.css"
import Button from 'react-bootstrap/Button'

function Contact() {
  return (
    <Fade>
        <div className='contact'>
            <div className='contact-head'>
                <p>Get in touch</p>
            </div>
            <div className='contact-body'>
                <p>I am currently looking for an internship opportunity for Summer 2024. Feel free to contact me!</p>
                <a>
                    <Button>Contact</Button>
                </a>
            </div>
            
        </div>
    </Fade>
  )
}

export default Contact