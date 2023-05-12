import React from 'react'
import Button from "react-bootstrap/Button"
import "./Next.css"

const Next = (props) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

  return (
    <div className='end-block'>
        <div>
            <h1>What's Next?</h1>
            <p>Feel free to contact me!</p>
            <Button variant="light" href={"mailto:henryshkim@hotmail.com"} target="_blank" rel="noreferrer">
            Say Hello
            </Button>
        </div>
        <div>
            <button className='topScrollBtn' onClick={scrollToTop}>↑</button>
        </div>
    </div>
  )
}

export default Next