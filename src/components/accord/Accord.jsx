import React, { useEffect } from 'react'
import "./Accord.css"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IoLocationSharp } from "react-icons/io5";
import { CiLink } from "react-icons/ci";
import experiences from '../../data/experiences';

function Accord() {
    const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='accordion-container'>
        {experiences.map((experience, index) => (
            <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                backgroundColor: "#490C86DE",
              }}
            >
              <Typography sx={{ width: '50%', flexShrink: 0, color: "white", fontWeight: "bold"}}>
                {experience["role"]}
              </Typography>
              <Typography sx={{ color: 'white', paddingLeft: "50px" }}>{experience["employmentDate"]}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor: "#241d41"}}>
              <Typography sx={{backgroundColor: "#241d41"}}>
                <div className='typography-container'>
                    <div className='other-details-outer'>
                        <div className='other-details-inner'>
                            <IoLocationSharp size={20} style={{marginRight: "10px", color: "rgb(187, 119, 255)"}}/> 
                            <p style={{color: "gray"}}>{experience["location"]}</p>
                        </div>
                        <div className='other-details-inner'>
                            <CiLink size={25} style={{marginRight: "10px", color: "rgb(187, 119, 255)"}}/>
                            <a style={{color: "gray"}} href={experience["companyLink"]} target='_blank'>{experience["companyLink"].substring(8)}</a>
                        </div>
                    </div>
                    <div style={{marginBottom: "20px"}}> 
                        {experience["description"]}
                    </div>
                    <div className='tech-list'>
                        {experience["technologies"].map((tech) => (
                            <div className='tech-item'>
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion> 
        ))}
    </div>
  )
}

export default Accord