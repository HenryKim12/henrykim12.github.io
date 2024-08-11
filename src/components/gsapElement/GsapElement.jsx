import React, {useEffect} from 'react'
import "./GsapElement.css"
import gsap from 'gsap'

function GsapElement({boxRef, textRef, text, boxColor}) {
  return (
    <div className="gsap-element-container">
        <div className={`gsap-element-box ${boxColor}`} ref={boxRef} />
        <h1 className='gsap-element-text' ref={textRef}>{text}</h1>
    </div>
  )
}

export default GsapElement