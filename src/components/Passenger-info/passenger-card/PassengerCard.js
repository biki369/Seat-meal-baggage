import React from 'react'
import './passCard.css';
import { BsArrowRight, BsCircle } from 'react-icons/bs'



const PassengerCard = ({ data }) => {
    // console.log(data,"passCard")
    return (
        <div>
            <div className="p-container">
                <div className="p-header">
                    <p>{data.departDetails.airportName} <span><BsArrowRight /></span> {data.arriveDetails.airportName}</p>
                    <p className="p-time">{data.departDetails.dateTime.substring(0, 10)}</p>
                </div>
                <div className="airName">
                    <span>{data.carrierDetails.carrierName}</span>
                    <span>{data.carrierDetails.flightNumber}</span>
                </div>
                <div className="p-details">
                    <div className="p-details-terminal">
                        <p>
                            <span>{data.departDetails.dateTime.substring(11, 16)}</span>
                            <span className="p-circle"><BsCircle /></span>
                            <span>
                                {data.departDetails.airportName}
                            </span>.
                            Airport,
                            <span>terminal {data.departDetails.terminal}</span>
                        </p>
                        <p>
                            <span>{data.arriveDetails.dateTime.substring(11, 16)}</span>
                            <span className="p-circle"><BsCircle /></span>
                            <span> {data.arriveDetails.airportName}</span>
                            Airport,
                            <span>terminal {data.arriveDetails.terminal}</span>
                        </p>
                    </div>
                    <div className="p-baggage">
                        <div>
                            <p>baggage</p>
                            <h5>Addult</h5>
                        </div>
                        <div>
                            <p>Check-in</p>
                            <h5>15kg</h5>
                        </div>
                    </div>
                </div>

                {/* <div className="p-details">
                    <div className="p-details-terminal">
                        <p>
                            {data.arriveDetails.dateTime}

                           <span>
                           {data.arriveDetails.airportName}
                           </span>. 
                              Airport, 
                            <span>terminal {data.arriveDetails.terminal}</span>
                        
                        </p>
                    </div>
                    <div className="baggage">
                         <p>baggage</p>
                        <h3>Addult</h3>
                    </div>

                </div> */}



            </div>
        </div>
    )
}

export default PassengerCard;