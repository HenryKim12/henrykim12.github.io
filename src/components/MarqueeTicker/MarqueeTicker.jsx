import React from 'react'
import './MarqueeTicker.css'

const REPEAT = 6

function MarqueeTicker({ items }) {
  const content = items.join('  ·  ') + '  ·  '

  return (
    <div className="marquee-outer">
      <div className="marquee-track">
        {Array.from({ length: REPEAT }, (_, i) => (
          <span key={i} className="marquee-content" aria-hidden={i > 0 ? 'true' : undefined}>
            {content}
          </span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeTicker
