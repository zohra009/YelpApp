import React, { Component } from 'react';
import BusCard from './bus_card';


class LandingPage extends Component {

    renderBusCards = () => {
        const {florists} = this.props 
        console.log('landpage florists', florists)
        return florists.map(bus => <BusCard bus={bus} key={bus.id}/>)
    }
    
    render(){

        return(
   
            <div className="landing-page">

                {this.renderBusCards()}
                   
                    Your are in landing page 

            </div>
            
        )
    }

}

    export default LandingPage;