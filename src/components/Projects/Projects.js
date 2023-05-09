import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <div className='projects-container'>
        <h1>Projects</h1>
        <p className='bar'></p>

        <div className='projects'>

          <div className='a-project'>
            <section className="p-title">
              <h4 className='p-name'>InsightUBC</h4>
              <p className='vertical'></p>
            </section>
            <section className="p-description">
              <p>A full stack website that queries files containing course and room information within UBC.
                Utilizes a RESTful server to query parsed information based on user inputs to provide information.
              </p>
              <div className='p-skills'>
                <p className="p-skill">TypeScript</p>
                <p className="p-skill">React</p>
              </div>
            </section>
          </div>

          <div className='a-project'>
            <section className="p-title">
              <h4 className='p-name'>InsightUBC</h4>
              <p className='vertical'></p>
            </section>
            <section className="p-description">
              <p>A full stack website that queries files containing course and room information within UBC.
                Utilizes a RESTful server to query parsed information based on user inputs to provide information.
              </p>
              <div className='p-skills'>
                <p className="p-skill">TypeScript</p>
                <p className="p-skill">React</p>
              </div>
            </section>
          </div>

          <div className='a-project'>
            <section className="p-title">
              <h4 className='p-name'>InsightUBC</h4>
              <p className='vertical'></p>
            </section>
            <section className="p-description">
              <p>A full stack website that queries files containing course and room information within UBC.
                Utilizes a RESTful server to query parsed information based on user inputs to provide information.
              </p>
              <div className='p-skills'>
                <p className="p-skill">TypeScript</p>
                <p className="p-skill">React</p>
              </div>
            </section>
          </div>

        </div>
    </div>
  )
}

export default Projects