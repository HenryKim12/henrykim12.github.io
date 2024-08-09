import React from 'react'
import "./CardList.css"
import CardItem from '../cardItem/CardItem'
import projects from '../../data/projects'

function CardList() {
  return (
    <div className='cardList-container'>
        {projects.map((project) => (
            <CardItem project={project} />
        ))}
    </div>
  )
}

export default CardList