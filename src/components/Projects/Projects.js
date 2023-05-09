import React from 'react'
import "./Projects.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Projects = () => {
  return (
    <div>
        <h1>Projects</h1>
        <Card className="text-center">
          <Card.Header>Food For Thought</Card.Header>
          <Card.Body>
            <Card.Title>Recipe Generator</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    </div>
  )
}

export default Projects