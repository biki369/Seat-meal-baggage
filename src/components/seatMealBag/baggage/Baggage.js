
import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MdLuggage } from 'react-icons/md';
import { FaLuggageCart } from 'react-icons/fa';
import BtnGrp from '../../btnGroup/BtnGrp';




const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1.3rem 2rem",

    "& ::-webkit-scrollbar-track": {
      width: "6px",
    },
    "& ::-webkit-scrollbar": {
      background: '#f1f1f1',
    },
    "& ::-webkit-scrollbar-thumb": {
      background: '#888',
      borderRadius: '30px',
    },
    "& ::-webkit-scrollbar-thumb:hover ": {
      background: '#1d1d1d',
    },

    "& .baggage": {
      height: '66vh',
      overflowY: "scroll",
      padding: "0 1rem ",
    },
    "& .bagItem": {
      display: "flex",
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: "0rem 0rem",
      fontSize: "1rem",
      borderBottom: "0.3px solid #333"
    },
   
    "& .bagItem p": {
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
    },
    "& .addRemove": {
      color: '#000',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      display: 'inline-block',
    },
    "& .bagIcons": {
      fontSize: '3rem',
      // display: 'inline-block',
      marginRight: "1.3rem",

    }
  },



}));



export default function Baggage({ data }) {


  const classes = useStyles();

 


  return (
    <Box className={classes.root}>

      <div className='baggage'>
        {

          data.map((item, index) => (
            <div key={index} className='bagItem'>
              <p>
                <span className="bagIcons">
                  {
                    (item.weight < 10) ? <MdLuggage /> : <FaLuggageCart />
                  }
                </span>

                {`Weight: ${item.weight} Kg, Price: ₹ ${item.price}`}
              </p>
              <BtnGrp index={index}/>
            </div>
          ))
        }


      </div>



    </Box>
  );
}
