import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BtnGrp from '../../btnGroup/BtnGrp';






const useStyles = makeStyles({
    root: {
        // maxWidth: 160,
        // height: '260px' ,
        padding: '0rem 2rem',
        "& .card": {
            width: '100%',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            // padding: '0 2rem',
            justifyContent:'space-between',
            // gap:'0.5rem',
            // margin:'0.4rem 0',
            // background:'#eee',
            // boxShadow:'0 0 3px #000',
             borderBottom:'0.5px solid #000',
        },
        "& .card__item ": {
            padding: '1rem',
            borderRadius: '6px'
        },
        "& .card__item h3": {
            padding: '0rem',
            margin: '0',
            lineHeight: '1.2',
            fontWeight:'normal',
        },
        "& .card__item p": {
            padding: '0rem',
            margin: '0.5rem 0',
            fontWeight:'bold',
        },
    },
});

const MealCard = ({ data }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className="card">
                <div className="card__item">
                    <h3>{data.airlineDescription}</h3>
                    <p>₹ {data.price}</p>
                </div>
                {/* <Button size="large" variant="outlined" >
                    Add
                </Button> */}
                <BtnGrp/>
            </div>
        </div>
    );
}

export default MealCard;