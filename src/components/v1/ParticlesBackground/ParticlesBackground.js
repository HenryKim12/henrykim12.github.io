import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from '../config/particlesConfig'
import "./style.css"

const ParticlesBackground = () => {
    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    return (
        <Particles options={particlesConfig} init={particlesInit} className='wrapper'/>
    )
}

export default ParticlesBackground