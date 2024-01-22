import React from 'react'
import "./Home.css"
import FadeIn from "react-fade-in"

function Home() {
  return (
    <div className='home'>
        <FadeIn delay={400}>
            <div className='welcome'>
                <h5>Welcome, my name is</h5>
            </div>
            <div className='name'>
                <p>Henry Kim</p>
            </div>
            {/* <span class="line">
                <h2><span>Utilize the Power of Technology</span></h2>
            </span> */}
            <div className='title'>
                <h1>Let me help you utilize the power of technology</h1>
            </div>
            <div className='bio'>
                <p>I am a software developer that thrives to design and implement technology to provide solutions. Currently, I am pursuing a Bachelor's Degree as a Computer
                Science major at UBC and developing scalable applications at Powerex.</p>
            </div>
            <div className='seeking'>
                <p>Seeking intern opportunities for Summer 2024.</p>
            </div>
        </FadeIn>
    </div>
  )
}

export default Home