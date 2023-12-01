import React, {useState} from 'react'
import "./Projects.css"
import Button from "react-bootstrap/Button"
import source from "./source.png"

const Projects = () => {
  const [isShowAll, setIsShowAll] = useState(true);

  const initProjects = [
    {
      name: "InsightUBC", 
      description: "A full stack website that queries files containing course and room information within UBC. Implemented a RESTful server to query parsed information based on user inputs to provide information", 
      skills: ["TypeScript", "React", "REST API", "TDD", "Mocha", "Chai"],
      link: "https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=310"
    },
    {
      name: "UBC StudySpot", 
      description: "A full stack website where students to browse and create reviews for study spots within UBC. Constructed a NoSQL database using MongoDB Atlas to store and maintain information for study spots/reviews", 
      skills: ["React", "MongoDB", "NoSQL", "Express"],
      link: "https://github.com/HenryKim12/studyspot"
    },
    {
      name: "Food For Thought", 
      description: "A web application to allow users to find new cooking recipes by searching specific foods. Utilized a recipe-food-nutrition RESTful API to requst and deploy recipe data to the user", 
      skills: ["React", "REST API", "React Bootstrap"],
      link: "https://github.com/HenryKim12/foodforthought"
    },
    {
      name: "JavaFit", 
      description: "Built an application that records workouts, set new fitness goals, and tracks macros to aid in health and fitness. Implemented a complex graphical user interface using Swing to operate app", 
      skills: ["Java", "Swing", "JUnit"],
      link: "https://github.com/HenryKim12/JavaFit"
    }
  ]

  const [projects, setProjects] = useState(initProjects);

  const showAllProjects = () => {
    const otherProjects = [
      {
        name: "Space Shooter", 
        description: "Developed a fully interactive space invader shooter game. Utilized the PyGame library for developing a multimedia application for the gaming interface", 
        skills: ["Python", "PyGame"],
        link: "https://github.com/HenryKim12/spaceshooter"
      }, 
      {
        name: "Around The World", 
        description: "Designed a web application that allows users to explore new locations of the world and plan possible airline flights to those locations. Utilized a flight data API to request and retrieve information to be displayed", 
        skills: ["React", "API"],
        link: "https://github.com/HenryKim12/Around-The-World"
      }, 
      {
        name: "Hotel DBMS", 
        description: "Created a hotel DBMS using PHP to manage all hotel properties and query hotel information based on user inputs. Managed hotel data within Oracle database and utilized API requests to deploy and update data in SQL", 
        skills: ["PHP", "SQL", "Oracle"],
        link: "https://github.com/HenryKim12/HotelDatabaseManagementSystem"
      }, 
      {
        name: "Counter App", 
        description: "Developed a simple counter application using Java to allow users to keep count of values. Utilized JSON to allow for saving/loading of count to maintain persistence within application", 
        skills: ["Java", "Swing", "JUnit"],
        link: "https://github.com/HenryKim12/Counter-App"
      }
    ]
    const newProjects = [...projects, ...otherProjects]
    setProjects(newProjects);
  }

  const showLessProjects = () => {
    setProjects(initProjects);
  }

  const handleIsShowAll = () => {
    setIsShowAll(!isShowAll);
  }

  return (
    <div className='projects-container'>
        <h1>Projects</h1>
        <p className='bar'></p>

        <div className='projects'>

          <div>
            {projects.map((a_project) => (
              <div className='a-project'>
                <section className="p-title">
                  <div>
                    <h4 className='p-name'>{a_project.name}</h4>
                    <a href={a_project.link} target='_blank' rel="noreferrer" >
                      <img className="sourceimg" src={source} alt="link" width="25px" height="25px"></img>
                    </a>
                  </div>
                  <p className='vertical'></p>
                </section>
                <section className="p-description">
                  <p>{a_project.description}</p>
                  <div className='p-skills'>
                    {a_project.skills.map((a_skill) => (
                      <p className="p-skill">{a_skill}</p>
                    ))}
                  </div>
                </section>
            </div>
            ))}
          </div>

          {isShowAll 
          ? 
          <Button className="showallButton" onClick={() => {
            showAllProjects();
            handleIsShowAll();
          }}>
            Show all
          </Button>
          :
          <Button className="showallButton" onClick={() => {
            showLessProjects();
            handleIsShowAll();
          }}>
            Show less
          </Button>
          }

        </div>
    </div>
  )
}

export default Projects