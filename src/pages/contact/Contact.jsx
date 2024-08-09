import React, { useRef, useEffect } from 'react'
import "./Contact.css"
import Blob from '../../components/Blob';
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import GsapElement from '../../components/gsapElement/GsapElement';

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
    // .fromTo(accordRef.current, {opacity: 0, y: 100}, {opacity: 1, y: 0})
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



      <Canvas ref={blobRef} camera={{ position: [0.0, 0.0, 8.0] }} onClick={() => navigate("/")}>
          <Blob />
      </Canvas>
    </div>
  )
}

export default Contact