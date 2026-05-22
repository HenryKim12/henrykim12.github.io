import React from 'react'
import './SectionHeader.css'

function SectionHeader({ number, title }) {
  return (
    <div className="section-header">
      <span className="section-num">{number}</span>
      <div className="section-rule" />
      <span className="section-title">{title}</span>
    </div>
  )
}

export default SectionHeader
