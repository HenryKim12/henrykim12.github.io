import React, { useEffect, useRef } from 'react'
import "./Projects.css"
import GsapElement from '../../components/gsapElement/GsapElement'
import gsap from 'gsap'
import Blob from '../../components/Blob'
import { Canvas } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom'

function Projects() {
  const navigate = useNavigate()
  const boxRef = useRef();
  const textRef = useRef();
  const projectsRef = useRef();
  const blobRef = useRef();

  const animate = () => {
    var t1 = gsap.timeline({delay: 0.5})
    t1.to(boxRef.current, {duration: 1, x: 160, ease: "elastic.out", opacity: 1, onStart: () => {
      gsap.to(textRef.current, {opacity: 1, duration: 1})
    }})
    // .fromTo(accordRef.current, {opacity: 0, y: 100}, {opacity: 1, y: 0})
    .fromTo(blobRef.current, {opacity: 0, y: 100}, {opacity: 1, y: 0})
  }

  useEffect(() => {
    animate();
  }, [])

  return (
    <div className='projects-container'>
      <div className="projects-title">
        <GsapElement boxRef={boxRef} textRef={textRef} text="PROJECTS" boxColor="orange-box-color"/>
      </div>



      <Canvas ref={blobRef} camera={{ position: [0.0, 0.0, 8.0] }} onClick={() => navigate("/contact")}>
          <Blob />
      </Canvas>
    </div>
  )
}

export default Projects