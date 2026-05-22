import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import projects from '../../data/projects'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import TechTag from '../../components/TechTag/TechTag'
import './Projects.css'

const NUM_COLORS = ['var(--accent)', 'var(--text-mid)']

function ProjectCard({ project, index, featured }) {
  return (
    <a
      className={`project-card${featured ? ' featured' : ''}`}
      href={project.githubURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="card-inner">
        <span className="card-num" style={{ color: NUM_COLORS[index % 2] }}>
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="card-titles">
          <h3 className="card-title">{project.title}</h3>
          <p className="card-subtitle">{project.subtitle}</p>
        </div>

        <div className="card-desc">
          <p>{project.description[0]}</p>
          {featured && project.description[1] && (
            <p>{project.description[1]}</p>
          )}
        </div>

        <div className="card-footer">
          <div className="card-tags">
            {project.technologies.map(t => <TechTag key={t} label={t} />)}
          </div>
          <span className="card-arrow">↗</span>
        </div>
      </div>
    </a>
  )
}

function Projects() {
  const gridRef = useRef(null)

  useEffect(() => {
    const cards = gridRef.current.querySelectorAll('.project-card')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.07, duration: 0.5, ease: 'power2.out', delay: 0.15 }
    )
  }, [])

  return (
    <div className="projects-container">
      <SectionHeader number="02" title="PROJECTS" />
      <div className="projects-scroll" ref={gridRef}>
        <div className="projects-grid">

          <div className="projects-row-1">
            <ProjectCard project={projects[0]} index={0} featured />
            <div className="projects-stack">
              <ProjectCard project={projects[1]} index={1} />
              <ProjectCard project={projects[2]} index={2} />
            </div>
          </div>

          <div className="projects-row-2">
            <ProjectCard project={projects[3]} index={3} />
            <ProjectCard project={projects[4]} index={4} />
            <ProjectCard project={projects[5]} index={5} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects
