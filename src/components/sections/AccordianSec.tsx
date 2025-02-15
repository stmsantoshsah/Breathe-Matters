import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

const faqContent = [
  {
    question: "Do I need prior experience with breathing exercises to use the CapnoTrainer® GO?",
    answer: "BreatheMatters is a holistic wellness brand dedicated to improving respiratory health and overall well-being. We offer a curated selection of innovative products designed to enhance the quality of your breathing experience."
  },
  {
    question: "How do I get started?",
    answer: "Simply order your CapnoTrainer® GO, and follow the included guide to begin exploring your breath."
  },
  {
    question: " Is it safe to use for health conditions like asthma or anxiety?",
    answer: "Yes, it’s ideal for understanding and improving breathing habits that exacerbate these conditions. Consult your healthcare provider if you have specific concerns."
  }
]

const AccordionSec = () => {
  return (
    <div className='container !my-[100px]' style={{maxWidth:"1024px"}}>
      {faqContent.map((item,i) => (
        <Accordion key={i} className='!shadow-none !bg-transparent border-1 !rounded-[8px] !mb-4'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {item.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
export default AccordionSec;