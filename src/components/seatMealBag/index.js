






import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Seats from './seats/Seats'
import Baggage from './baggage/Baggage';
import Meal from './meal/Meal';
import SeatsMealBagData from './data/seat-meal-baggage-with-meal.json'
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'
import IconButton from '@material-ui/core/IconButton';
import Carousel from 'react-elastic-carousel'
// import Carousel from 'react-elastic-carousel'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,

    // "& .slider__container": {
    //   width: '100%',
    //   // height: '100vh',
    //   // flexDirection: 'column',
    // },
    // " &.sliders": {
    //   display: "flex",
    // }
    "& .arrive": {
      marginLeft: '6%',
      marginTop: '3%',
      position: 'relative',

    }

  },
}));









export default function SeatMealBag() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [arrow, setArrow] = React.useState(0);



  const dataLength = SeatsMealBagData.onwardResp[0].segment.length;
  // const dataLength = 0;


  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // console.log(dataLength,"accc")


  return (
    <div className={classes.root}>
      <AppBar position="sticky"
        style={{
          background: 'none',
          width: "30rem",
          boxShadow: 'none',
          color: "#000"
          // top:'1rem'
        }}


      >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Seats" {...a11yProps(0)} />
          <Tab label="Meal" {...a11yProps(1)} />
          <Tab label="Baggage" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div>
          {
            dataLength <= 0 ?
              <>
                <Seats data={SeatsMealBagData.onwardResp[0].additionalServices.seatMapping} />
              </> :
              <div className="slider__container">
                <Carousel itemsToShow={1} pagination='false'>
                  {
                    SeatsMealBagData.onwardResp[0].segment.map((elm, idx) => (
                      <div className='slider__item' key={idx}>
                        <h3 className='arrive'><span> {elm.departDetails.airportName}</span> -> <span> {elm.arriveDetails.airportName}</span>  </h3>
                        <Seats data={SeatsMealBagData.onwardResp[0].additionalServices.seatMapping} key={idx} />
                      </div>
                    ))
                  }
                </Carousel>
              </div>
          }

        </div>


      </TabPanel>
      <TabPanel value={value} index={1}>
        
        <div>
          {
            dataLength <= 0 ?
              <>
                <Meal data={SeatsMealBagData.onwardResp[0].additionalServices.meal} />
              </> :
              <div className="slider__container">
                <Carousel itemsToShow={1} pagination='false'>
                  {
                    SeatsMealBagData.onwardResp[0].segment.map((elm, idx) => (
                      <div className='slider__item' key={idx}>
                        <Meal data={SeatsMealBagData.onwardResp[0].additionalServices.meal}/>
                      </div>
                    ))
                  }
                </Carousel>
              </div>
          }

        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Baggage data={SeatsMealBagData.onwardResp[0].additionalServices.baggage} />
      </TabPanel>
    </div>
  );
}



{/* <Seats data={SeatsMealBagData.onwardResp[0].additionalServices.seatMapping} /> */ }