import "./Carousel.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import projects from "../../data/projects";

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = projects.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

  return (
    <div className="carousel-container">
      <Box sx={{ maxWidth: 700, width: '100%', color: "white" }}>
        <div className="project-title">
            <h4>{projects[activeStep]["title"]}</h4>
            <div>{projects[activeStep]["subtitle"]}</div>
        </div>
        <ul style={{marginBottom: "15px"}}>
            {projects[activeStep]["description"].map((line) => (
                <li>{line}</li>
            ))}
        </ul>
        <ul className="project-tech-list">
            {projects[activeStep]["technologies"].map((tech) => (
                <li className="project-tech-item">{tech}</li>
            ))}
        </ul>
        <a href={projects[activeStep]["githubURL"]} target="_blank">Code</a>
      </Box>
      <MobileStepper
        variant="progress"
        sx={{ backgroundColor: 'black' }}
        steps={maxSteps}
        position="dynamic"
        activeStep={activeStep}
        backgrounColor="black"
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  )
}

export default Carousel