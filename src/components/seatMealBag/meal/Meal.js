import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import MealCard from './mealCard'




const useStyles = makeStyles({
  root: {
    // maxWidth: 160,
    width: '100%',
    padding: '0.3rem',
    // display: 'flex',
    // flexWrap:'wrap',
    // flexDirection: 'row',
    gap:'1rem',
    justifyContent: 'center',
    alignItems: 'center',

    "& .meal__container":{
      height:'66vh',
      overflowY:"scroll",

    },

    "& .meal__container::-webkit-scrollbar-track": {
      width: "6px",
    },
    "& .meal__container::-webkit-scrollbar": {
      background: '#f1f1f1',
    },
    "& .meal__container::-webkit-scrollbar-thumb": {
      background: '#888',
      borderRadius: '30px',
    },
    "& .meal__container::-webkit-scrollbar-thumb:hover ": {
      background: '#1d1d1d',
    }







  },
});




const Meal = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
       <div className='meal__container'>

      {
        data.map((item, idx) => (
          <MealCard data={item}  key={idx}/>
          ))
        }
        </div>
    </div>
  )
}

export default Meal