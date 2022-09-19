import React from 'react'
import Button from '@material-ui/core/Button';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
    "& span": {
        gap: '2rem',
        // zIndex: "",
        // display:'block',
      },

    }

}));





const BtnGrp = ({ index }) => {

     const classes = useStyles();

    const PaxNum = 2;

    const [qty, setQty] = React.useState(0);


    const IncreQty = () => {
        if (PaxNum > qty) {
            setQty(qty + 1);
        } else if(PaxNum < qty) {
            <Alert severity="info">Passenger only tow</Alert>
        }else{
            <Alert severity="info">no baggage</Alert>
        }
    }
    const DecrQty = () => {
        if (qty > 0) {
            setQty(qty - 1);
        }
    }


    return (
        <div className={classes.root}>
            <Button size="medium" variant="outlined" className='btn__grp'  >
                <span className="addRemove" onClick={() => DecrQty()}> {qty === 0 ? '': '-'}</span>
                {qty === 0 ? 'Add': qty}
                <span className="addRemove" onClick={() => IncreQty()}>{qty === 0 ? '+': '+'}</span>
            </Button>

        </div>
    )
}

export default BtnGrp