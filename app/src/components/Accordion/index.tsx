import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from './index.module.scss';
import { fontWeight } from '@mui/system';
import strings from './strings';

type TypographyProps = {
  text : string,
  fontSize: string,
  fontWeight: number
}

type ColumnProps = {
  header : string,
  text : string
}

const ColumnDetails = (props : ColumnProps) => {
  return (<div className={classes['details__column-text']}>
            <div className={classes['details__column-text--header']}>
              {props.header}
            </div>
            <div className={classes['details__column-text--text']}>
              {props.text}
            </div>
          </div>)
}

const StyledTypography = (props : TypographyProps) => {
  return (<Typography style={{fontSize : `${props.fontSize}`, fontWeight:`${props.fontWeight}}`}}>{props.text}</Typography>)
}

function AccordionLanding() {

  const getAccordionText = () => {
    return 'Join 100 million savvy travellers as you compare flights, hotels and cars from hundreds of providers. Here’s how.'
  }

  const getAccordionDescription = () => {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.'
  }

  const accordionStyle = {
    background : 'transparent', 
    boxShadow:'none',
    borderTop: '2px solid lightgray',
    borderBottom: '2px solid lightgray'  
  }

  return (
    <div className={classes['accordion']}>
    <Accordion style = {accordionStyle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <StyledTypography text={getAccordionText()} fontSize={'2rem'} fontWeight={700}/>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes['details']}>
            <div className={classes['details__column']}>
              <ColumnDetails header={strings.search.header} text={strings.search.text}/>
              <ColumnDetails header={strings.save.header} text={strings.save.text}/>
              <ColumnDetails header={strings.book.header} text={strings.book.text}/>
            </div>
            <div className={classes['details__column']}>
              <ColumnDetails header={strings.find.header} text={strings.find.text}/>
              <ColumnDetails header={strings.track.header} text={strings.track.text}/>
              <ColumnDetails header={strings.keep.header} text={strings.keep.text}/>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      </div>
  )
}

export default AccordionLanding;