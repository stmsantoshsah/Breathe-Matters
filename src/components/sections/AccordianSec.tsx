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
    <section className='faq_section'>
      <div className='container sm:!my-[100px] !my-[50px]' style={{ maxWidth: "1024px" }}>
        <h2 className='text-center !mb-5 font-bold'>FAQs</h2>
        {faqContent.map((item, i) => (
          <Accordion key={i} className='!shadow-none !bg-transparent border-1 !rounded-[8px] !mb-4 border-primary text-primary'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className='text-primary !w-8 !h-8' />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span" className='text-primary'>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails className="text-[#3C3C3C] text-[16px]">
              {item.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
export default AccordionSec;