import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './NavBar.css'

const links = [
  { label: '0. home',       short: '00', path: '/' },
  { label: '1. experience', short: '01', path: '/experience' },
  { label: '2. projects',   short: '02', path: '/projects' },
  { label: '3. contact',    short: '03', path: '/contact' },
]

function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <nav className="navbar">
      <button className="navbar-brand" onClick={() => navigate('/')}>HK</button>
      <div className="navbar-links">
        {links.map(({ label, short, path }) => (
          <button
            key={path}
            className={`navbar-link ${location.pathname === path ? 'active' : ''}`}
            onClick={() => navigate(path)}
          >
            <span className="link-label">{label}</span>
            <span className="link-short" aria-hidden="true">{short}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default NavBar
