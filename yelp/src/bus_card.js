import React from 'react';
import "./bus_card.css";
import dotenv from 'dotenv';


dotenv.config()

const BusCard =  ({bus}) => {
    return(
            <div>
                <img className="img" src={bus.image_url} />
                {bus.name}
                
               
            </div>
            )
  



}
export default BusCard;