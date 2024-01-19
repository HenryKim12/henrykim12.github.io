import React from 'react'
import { useState } from 'react';
import "./Experience.css"
import Fade from "react-reveal"
//import FadeIn from "react-fade-in"

function Experience() {
  const [index, setIndex] = useState(0);

  const companies = ["Powerex", "Coming Soon"]
  const titles = [["Software Developer", "@ Powerex"], ["Coming Soon...", ""]]
  const timelines = ["September 2023 - Present", ""]
  const descriptions = [
    ["hi", "hi2", "hi3"],
    []
  ]

  const changeCompany = (company) => {
    setIndex(companies.indexOf(company))

  }

  const companyList = companies.map((company) => <button className='button' onClick={() => changeCompany(company)}>{company}</button>)
  

  return (
    <Fade>
      <div className='experience'>
        <div className='experience-header'>
          <h2>Experience</h2>
          <hr/>
        </div>

        <div className='experience-body'>
          <div className='company-names'>
            {companyList}
          </div>

          <div className='company-descriptions'>
            <div className='company-title'>
              <h5>{titles[index][0]}</h5>
              <h5 className='title2'>
                <a href='https://powerex.com/' className='title-link' target="_blank" rel="noreferrer">{titles[index][1]}</a>
              </h5>
            </div>
            
            <p className='timeline'> {timelines[index]}</p>
            <ul className='description'>
              {descriptions[index].map((line) => <li>{line}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </Fade>
    // <Fade>
    //   <div className='container'>
    //     <div>
    //       <h2>Experience</h2>
    //       <hr/>
    //     </div>
    //     <div className='box'>
    //       <div className='companies'>
    //         {myCompanyList}
    //       </div>
    //       <div className='description'>
    //         {myExperienceList}
    //       </div>
    //     </div>
    //   </div>
    // </Fade>
  )
}

export default Experience