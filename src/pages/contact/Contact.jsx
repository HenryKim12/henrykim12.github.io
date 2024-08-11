import React, { useRef, useEffect } from 'react'
import "./Contact.css"
import Blob from '../../components/Blob';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import GsapElement from '../../components/gsapElement/GsapElement';
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Contact() {
  const navigate = useNavigate()
  const boxRef = useRef();
  const textRef = useRef();
  const contactsRef = useRef();
  const blobRef = useRef();

  const animate = () => {
    var t1 = gsap.timeline({delay: 0.5})
    t1.to(boxRef.current, {duration: 1, x: 140, ease: "elastic.out", opacity: 1, onStart: () => {
      gsap.to(textRef.current, {opacity: 1, duration: 1})
    }})
    .fromTo(contactsRef.current, {opacity: 0, y: 100}, {opacity: 1, y: 0})
    .fromTo(blobRef.current, {opacity: 0, y: 100}, {opacity: 1, y: 0})
  }

  useEffect(() => {
    animate();
  })

  return (
    <div className='contact-container'>
      <div className="contact-title">
        <GsapElement boxRef={boxRef} textRef={textRef} text="CONTACT" boxColor="red-box-color"/>
      </div>

      <div className='contact-content' ref={contactsRef}>
        <div className='contact-content-left'>
          <h1>Always looking for upcoming internship opportunities</h1>
          <h5>Send me an email or contact me via instant message</h5>
          <ul className='contact-list'>
            <li className='contact-item'>
              <IoMdMail className='contact-item-icon' size={30} />
              <a className='contact-item-link' href='mailto:henryshkim@hotmail.com' target='_blank'>Email</a>
            </li>
            <li className='contact-item' >
              <FaLinkedin className='contact-item-icon' size={30} />
              <a className='contact-item-link' href='https://www.linkedin.com/in/henrykim12/' target='_blank'>LinkedIn</a>
            </li>
            <li className='contact-item'>
              <FaGithub className='contact-item-icon' size={30} />
              <a className='contact-item-link' href='https://github.com/HenryKim12' target='_blank'>GitHub</a>
            </li>
          </ul>
        </div>

        <div className='contact-content-right'>
          <Canvas ref={blobRef} camera={{ position: [0.0, 0.0, 8.0] }} onClick={() => navigate("/")}>
            <Blob />
          </Canvas>
        </div>
      </div>

    </div>
  )
}

export default Contact