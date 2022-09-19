import React from 'react'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PassengerDetails from '../Passenger-info';
import SeatMealBag from '../seatMealBag';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        "& .MuiAccordion-root":{
            width:'70rem',
            margin: '1rem auto',
            background:"#fff",
            // colorL:"#fff",
            // paddingTop:'1rem'
        },
        "& .MuiAccordionSummary-content p":{
            // color:'#fff',
            fontWeight:'bold',
        }
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    
}));





const AccordionPaxSeat = () => {


  


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Passenger Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <PassengerDetails />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>Seats Meal and Baggage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <SeatMealBag />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AccordionPaxSeat