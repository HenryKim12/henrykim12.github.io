import React from 'react'
import { useState } from 'react';
import "./Experience.css"

function Experience() {
  const experiences = {
    "Powerex": {
      position: ["Full Stack Software Developer"],
      time: ["September 2023 - Present"],
      responsiblity: [
        "◦ Build out x, y, z", 
        "◦ asdfa",

      ]
    },
    "SOON": {
      position: ["COMING SOON"],
      time: [""],
      responsiblity: [""]
    },
  }


  const [company, setCompany] = useState("Powerex")
  const [description, setDescription] = useState(experiences[company])

  const changeCompany = (name) => {
    setCompany(name)
    setDescription(experiences[name])
  }
  
  const myCompanyList = Object.keys(experiences).map((name) => <button className="button" onClick={() => changeCompany(name)}>{name}</button>)
  const myExperienceList = Object.keys(description).map((details) => 
    <ul>
      <li className='outer_list'>
        {description[details].map((line) => <li>{line}</li>)}
      </li>
    </ul>
  )
  

  return (
    <div className='container'>
      <div>
        <h2>Experience</h2>
        <hr/>
      </div>
      <div className='box'>
        <div className='companies'>
          {myCompanyList}
        </div>
        <div className='description'>
          {myExperienceList}
        </div>
      </div>
    </div>
  )
}

export default Experience