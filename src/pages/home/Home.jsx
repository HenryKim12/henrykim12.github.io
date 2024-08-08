import React, {useEffect, useRef} from 'react'
import "./Home.css"
import { gsap } from 'gsap'
import { Canvas } from '@react-three/fiber';
import Blob from '../../components/Blob';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const titleRef = useRef(null);
    const gboxRef = useRef(null);
    const pboxRef = useRef(null);
    const bboxRef = useRef(null);
    const gtextRef = useRef(null);
    const ptextRef = useRef(null);
    const btextRef = useRef(null);
    const blobRef = useRef(null);

    const animate = () => {
        var t1 = gsap.timeline();
        t1.fromTo(titleRef.current, {opacity: 0, y: 100}, {opacity: 1, y: 0})
        .to(gboxRef.current, {duration: 1, rotation: 720, translateX: 200, opacity: 1, onStart: () => {
            gsap.to(gtextRef.current, {opacity: 1, duration: 1})
        }})
        .to(pboxRef.current, {duration: 1, x: 100, ease: "elastic.out", opacity: 1, onStart: () => {
            gsap.to(ptextRef.current, {opacity: 1, duration: 1})
        }})
        .to(bboxRef.current, {duration: 1, rotation: -720, translateX: 200, opacity: 1, onStart: () => {
            gsap.to(btextRef.current, {opacity: 1, duration: 1})
        }})
        .fromTo(blobRef.current, {opacity: 0, y: 100}, {opacity: 1, y: 0})
    }

    useEffect(() => {
        animate();
    }, [])

    return (
        <div className='home-container' style={{overflow: "hidden"}}>
            <div className='title-container'>
                <h1 ref={titleRef} className='title'>HENRY KIM</h1>
            </div>
            <div className='bio-container'>
                <div className='traits'>
                    <div className='trait-container'>
                        <div className='box g' ref={gboxRef} />
                        <h4 className="text" ref={gtextRef}>SOFTWARE ENGINEER</h4>
                    </div>
                    <div className='trait-container2'>
                        <div className='box p' ref={pboxRef} />
                        <h4 className="text" ref={ptextRef}>CS STUDENT</h4>
                    </div>
                    <div className='trait-container'>
                        <div className='box b' ref={bboxRef} />
                        <h4 className="text" ref={btextRef}>TEACHING ASSISTANT</h4>
                    </div>
                </div>
            </div>
            <div className='blob-container' onClick={() => navigate("/contact")}>
                <Canvas className='blob' ref={blobRef} camera={{ position: [0.0, 0.0, 8.0] }}>
                    <Blob />
                </Canvas>
            </div>
        </div>
    )
}

export default Home