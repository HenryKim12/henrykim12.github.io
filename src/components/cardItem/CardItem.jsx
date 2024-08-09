import React from 'react'
import "./CardItem.css"
import Card from 'react-bootstrap/Card';

function CardItem({project}) {
  return (
    <Card className="cardItem-container" style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Title>{project["title"]}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{project["subtitle"]}</Card.Subtitle>
        <Card.Text>
            <div>
                <ul>
                    {project["description"].map((point) => (
                        <li>{point}</li>
                    ))}
                </ul>
                <div className='project-technologies'>
                    {project["technologies"].map((tech) => (
                        <div className='project-technology'>{tech}</div>
                    ))}
                </div>
            </div>
        </Card.Text>
        <Card.Link href={project["githubURL"]}>Code</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default CardItem