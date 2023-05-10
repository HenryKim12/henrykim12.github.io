import React from 'react'
import "./About.css"

const About = ({aboutRef}) => {
  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={aboutRef} className='aboutme'>
        <h1 className="title">About Me</h1>
        <p className='bar'></p>
        <div className='about'>
            <div className='para'>
                <p>I am a 3rd year computer science major at the University of British Colombia with a passion to become a software engineer. 
                    I am excited to become a part of a team that strives towards a common goal and accomplishes a mission. 
                    I am a quick learner, a team player, and an excellent problem solver. I am confident that I can become a valuable
                    asset to any web developement team. 
                </p>
            </div>
        </div>
    </div>
  )
}

export default About