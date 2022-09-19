import React from 'react'
import Seat from './Seat';
import "./seats.css";
import SeatsMealBagData from '../data/seat-meal-baggage-with-meal.json'
const Seats = ({ data }) => {

    return (
        <div className='plane-container'>

            <div class="plane">
                <div class="cockpit">
                    <h1>Please select a seat</h1>
                </div>
                <div class="exit exit--front fuselage">

                </div>
                <ol class="cabin fuselage">
                    {
                        data.map((item, index) => (

                                <li className={`row row--${index}`} key={index}>
                                    <ol class="seats" type={''}>
                                        {
                                            item.seat.map((seat, index) => (
                                               <Seat   seat={seat} key={index}/>
                                            ))
                                        }
                                    </ol>
                                </li>
                                // item.map((seat, index) =>(
                                //     switch (seat.rowNo) {
                                //         case 1:
                                            
                                //             break;
                                    
                                //         default:
                                //             break;
                                //     }
                                // ))
                        ))
                    }

                </ol>
                <div class="exit exit--back fuselage">

                </div>
            </div>
            <div className="seat-info">
                <p> <span  className="free-seat"></span>Free</p>
                <p> <span className="exit-sign"></span>  Exit</p>
                <p>  <span  className="unbooked"></span> Unbooked</p>
                <p> <span  className="booked-sign">X</span>Booked </p>
                <p> <span  className="selected-seat"></span>selected seat</p>
            </div>
        </div>
    )
}

export default Seats