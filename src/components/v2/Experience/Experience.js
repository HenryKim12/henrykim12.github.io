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
    ["Collaborated with project managers, BAs, and other developers to transform ideas into productionized applications with an optimized application architecture to ensure performance, scalability, and satisfaction from clients and stakeholders", 
    "Independently designed and implemented applications to become more maintainable and increase performance by reducing execution time by 12%", 
    "Developed event-driven Azure Functions by utilizing Azure Queue storage and timer triggers to improve quality and efficiency of products, while reducing costs",
    "Implemented scalable, thread-safe applications by adopting the Producer-Consumer design pattern to allow tasks to run concurrently and improve overall performance"],
    []
  ]
  const links = ['https://powerex.com/', ""]

  const changeCompany = (company) => {
    setIndex(companies.indexOf(company))

  }

  const companyList = companies.map((company) => <button className='button' onClick={() => changeCompany(company)}>{company}</button>)
  

  return (
    <Fade>
      <div className='experience'>
        <div className='experience-header'>
          <h1>Experience</h1>
          <hr/>
        </div>

        <div className='experience-body'>
          <div className='company-names'>
            {companyList}
          </div>

          <div className='company-descriptions'>
            <div className='company-title'>
              <div className='title-link'>
                <h5>{titles[index][0]}</h5>
                <h5 className='title2'>
                  <a href={links[index]} className='title-link' target="_blank" rel="noreferrer">{titles[index][1]}</a>
                </h5>
              </div>
            </div>
            
            <p className='timeline'> {timelines[index]}</p>
            <ul className='description'>
              {descriptions[index].map((line) => <li className='line'>{line}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Experience