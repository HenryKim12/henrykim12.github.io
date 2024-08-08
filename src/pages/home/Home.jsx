import React, {useEffect, useRef} from 'react'
import "./Home.css"
import { gsap } from 'gsap'
import Goob from '../../components/Goob'
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Home() {
    const gboxRef = useRef(null);
    const pboxRef = useRef(null);
    const bboxRef = useRef(null);
    const gtextRef = useRef(null);
    const ptextRef = useRef(null);
    const btextRef = useRef(null);

    const moveBox = () => {
        animate(gboxRef, gtextRef, 200, 0)
        animate(pboxRef, ptextRef, 100, 1)
        animate(bboxRef, btextRef, 200, 2)
    }

    const animate = (boxRef, textRef, x, delay) => {
        gsap.to(boxRef.current, {
            rotation: 360, 
            translateX: x, 
            duration: 1,
            delay: delay,
            ease: "power2.out",
            onStart: () => {
                gsap.to(textRef.current, {opacity: 1, duration: 1})
            }
        }
    )
    }

    useEffect(() => {
        moveBox()
    }, [])

    return (
        <div className='home-container' style={{overflow: "hidden"}}>
            <div className='title-container'>
                <h1 className='title'>HENRY KIM</h1>
            </div>
            <div className='bio-container'>
                <div className='trait-container'>
                    <div className='box g' ref={gboxRef} />
                    <h2 className="text" ref={gtextRef}>SOFTWARE ENGINEER</h2>
                </div>
                <div className='trait-container2'>
                    <div className='box p' ref={pboxRef} />
                    <h2 className="text" ref={ptextRef}>CS STUDENT</h2>
                </div>
                <div className='trait-container'>
                    <div className='box b' ref={bboxRef} />
                    <h2 className="text" ref={btextRef}>TEACHING ASSISTANT</h2>
                </div>
            </div>
            <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Goob />
    </Canvas>
        </div>
    )
}

export default Home