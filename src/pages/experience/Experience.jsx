import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import experiences from '../../data/experiences'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import TechTag from '../../components/TechTag/TechTag'
import './Experience.css'

function ExperienceRow({ data }) {
  const [open, setOpen] = useState(false)
  const descRef = useRef(null)

  useEffect(() => {
    gsap.set(descRef.current, { height: 0, opacity: 0 })
  }, [])

  const toggle = () => {
    if (!open) {
      gsap.to(descRef.current, {
        height: descRef.current.scrollHeight,
        opacity: 1,
        duration: 0.38,
        ease: 'power2.inOut',
      })
    } else {
      gsap.to(descRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.28,
        ease: 'power2.inOut',
      })
    }
    setOpen(v => !v)
  }

  return (
    <div className={`exp-row ${open ? 'open' : ''}`} onClick={toggle}>
      <div className="exp-row-header">

        <div className="exp-row-title">
          <h3 className="exp-role">{data.role}</h3>
          <div className="exp-subtitle">
            <span className="exp-date">{data.employmentDate}</span>
            <span className="exp-sep">·</span>
            <a
              className="exp-company"
              href={data.companyLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
            >
              {data.company}&thinsp;↗
            </a>
          </div>
        </div>

        <div className="exp-row-actions">
          <div className="exp-tags">
            {data.technologies.map(t => <TechTag key={t} label={t} />)}
          </div>
          <span className="exp-toggle">{open ? '−' : '+'}</span>
        </div>

      </div>

      <div className="exp-desc" ref={descRef}>
        <p className="exp-desc-text">{data.description}</p>
      </div>
    </div>
  )
}

function Experience() {
  const listRef = useRef(null)

  useEffect(() => {
    const rows = listRef.current.querySelectorAll('.exp-row')
    gsap.fromTo(
      rows,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.07, duration: 0.5, ease: 'power2.out', delay: 0.15 }
    )
  }, [])

  return (
    <div className="experience-container">
      <SectionHeader number="01" title="EXPERIENCE" />
      <div className="exp-list" ref={listRef}>
        {experiences.map((exp, i) => (
          <ExperienceRow key={i} data={exp} />
        ))}
      </div>
    </div>
  )
}

export default Experience
