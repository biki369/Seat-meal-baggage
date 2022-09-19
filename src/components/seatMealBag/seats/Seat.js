import React from 'react'

const Seat = ({ seat }) => {

    const [value, setValue] = React.useState([{
        code: "",
        price: 0
    }]);

    //  React.useEffect(() =>{ 
    //  },[])

    const ChangeSeat = (event) => {

        const selectedSeatValue = [
            ...value,
            {
                code: event.code,
                price: event.price,
            }
        ];

        return setValue(selectedSeatValue);
        // setValue(data=> [...data,{  code: event.code, price: event.price}])

    };

    // {console.log(value,"value seat")}



    return (
        <>
            <li class="seat">
                {
                    seat.availablityType === '1' ?
                        <input type="checkbox" id={`${seat.code}`} onChange={() => ChangeSeat(seat)} /> :
                        <input type="checkbox" id={`${seat.code}`} onChange={() => ChangeSeat(seat)} disabled />

                }
                {
                    seat.price === 0 ? 
                    <label for={`${seat.code}`} style={{ background: 'rgb(80, 227, 194)' }}>{seat.code}</label> : 
                    <label for={`${seat.code}`}>{seat.code}</label>
                }


                <div className="show-info">
                    <span>
                        {
                            seat.seatType === '1' ? "Window Seat" : seat.seatType === '3' ? "Middle Seat" : "Aisle Seat"
                        }
                    </span>|
                    <span>{seat.price}</span>₹
                </div>
            </li>
        </>
    )
}

export default Seat