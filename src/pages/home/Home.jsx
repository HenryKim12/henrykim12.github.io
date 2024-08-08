import React, {useEffect, useRef} from 'react'
import "./Home.css"
import { gsap } from 'gsap'
import Goob from '../../components/Goob'
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Home() {
    const titleRef = useRef(null);
    const gboxRef = useRef(null);
    const pboxRef = useRef(null);
    const bboxRef = useRef(null);
    const gtextRef = useRef(null);
    const ptextRef = useRef(null);
    const btextRef = useRef(null);

    const animate = () => {
        var t1 = gsap.timeline({delay: 1});
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
            </div>
            {/* <Canvas>
                <OrbitControls />
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Goob />
            </Canvas> */}
        </div>
    )
}

export default Home