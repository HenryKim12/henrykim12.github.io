import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Canvas } from '@react-three/fiber'
import Blob from '../../components/Blob'
import SectionHeader from '../../components/SectionHeader/SectionHeader'
import './Contact.css'

const LINKS = [
  {
    label: 'EMAIL',
    display: 'henryshkim@hotmail.com',
    href: 'mailto:henryshkim@hotmail.com',
  },
  {
    label: 'LINKEDIN',
    display: 'linkedin.com/in/henrykim12',
    href: 'https://linkedin.com/in/henrykim12/',
  },
  {
    label: 'GITHUB',
    display: 'github.com/HenryKim12',
    href: 'https://github.com/HenryKim12',
  },
]

function Contact() {
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const linksRef = useRef(null)
  const blobWrapRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    const line1 = line1Ref.current
    const line2 = line2Ref.current
    const linkRows = linksRef.current.querySelectorAll('.contact-link-row')
    const rules = linksRef.current.querySelectorAll('.contact-rule')

    gsap.set([line1, line2], { y: 60, opacity: 0 })
    gsap.set(linkRows, { y: 20, opacity: 0 })
    gsap.set(rules, { scaleX: 0, transformOrigin: 'left' })
    gsap.set(blobWrapRef.current, { opacity: 0, scale: 0.88 })
    gsap.set(footerRef.current, { opacity: 0 })

    const isMobile = window.innerWidth <= 768

    const onMove = (e) => {
      if (window.innerWidth <= 768) return
      const clientX = e.touches ? e.touches[0].clientX : e.clientX
      const clientY = e.touches ? e.touches[0].clientY : e.clientY
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      gsap.to(blobWrapRef.current, { x, y, duration: 0.9, ease: 'power2.out' })
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: true })

    const tl = gsap.timeline({ delay: 0.1 })
    tl.to([line1, line2], {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.12,
    })
    tl.to(
      blobWrapRef.current,
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
      '<0.2'
    )
    tl.to(
      rules,
      { scaleX: 1, duration: 0.5, ease: 'power2.inOut', stagger: 0.08 },
      '-=0.6'
    )
    tl.to(
      linkRows,
      { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out', stagger: 0.1 },
      '-=0.35'
    )
    tl.to(footerRef.current, { opacity: 1, duration: 0.4 }, '-=0.1')
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
    }
  }, [])

  return (
    <div className="contact-container">
      <SectionHeader number="03" title="CONTACT" />

      <div className="contact-body">
        <div className="contact-left">
          <div className="contact-headline-row">
            <div className="contact-headline">
              <p className="contact-line" ref={line1Ref}>LET'S WORK</p>
              <p className="contact-line accent" ref={line2Ref}>
                TOGETHER<span className="contact-dot">.</span>
              </p>
            </div>

            <div className="contact-right">
              <div className="contact-blob-wrap" ref={blobWrapRef}>
                <div className="contact-blob-glow" />
                <Canvas
                  camera={{ position: [0, 0, 8] }}
                  gl={{ alpha: true }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Blob />
                </Canvas>
              </div>
            </div>
          </div>

          <div className="contact-links" ref={linksRef}>
            {LINKS.map(({ label, display, href }) => (
              <div key={label} className="contact-link-item">
                <div className="contact-rule" />
                <a
                  className="contact-link-row"
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                >
                  <span className="contact-link-label">{label}</span>
                  <span className="contact-link-display">{display}</span>
                  <span className="contact-link-arrow">↗</span>
                </a>
              </div>
            ))}
            <div className="contact-rule contact-rule-last" />
          </div>
        </div>
      </div>

      <footer className="contact-footer" ref={footerRef}>
        <span>© {new Date().getFullYear()} Henry Kim</span>
        <span className="contact-footer-sep">—</span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  )
}

export default Contact
