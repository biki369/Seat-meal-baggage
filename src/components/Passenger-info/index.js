import React from 'react'
import PassengerData from '../seatMealBag/data/seat-meal-baggage-with-meal.json';
import PassengerCard from './passenger-card/PassengerCard';


const PassengerDetails = () => {

  // console.log(,'pass')


  return (
    <div>
        {
          // <PassengerCard  data={}/>
          PassengerData.onwardResp[0].segment.map((data,idx)=>(
            <div key={idx} className="passenger">
                <PassengerCard  data={data}/>
            </div>
          ))
        }
    </div>
  )
}

export default PassengerDetails