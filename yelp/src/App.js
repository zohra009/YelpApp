import React, { Component } from 'react';
import LandingPage from './landing_page';

import axios from 'axios';
import dotenv from 'dotenv';




class App extends Component {
  state = { 
    
    florists: [],
    keyword: ""
}; 

fetchData = (zipcode) => {
    dotenv.config()

    const access_token = process.env.REACT_APP_API_KEY;
    const locationSearched = `New York, NY ${zipcode}`
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${locationSearched}&term="florist"&limit=20`, {
        headers: {
            Authorization: `Bearer ${access_token}`
       },
       params: {
        terms: 'florists'
        
        }
    })
    .then((florists) => this.setState({florists: florists.data.businesses}))
    .then(res => console.log('fetch data', this.state))
    .catch((err) => {
    console.log ('error')
    })


}
 
onSearchChange = (e) => {
  if(e.target.value.length === 5){
    this.fetchData(e.target.value)
  }
}


  render(){
    const {florists} = this.state
    

  return (
    <div className="App">
      <input placeholder="Search Businesses" onChange={this.onSearchChange}/>
      {florists.length ? <LandingPage florists={florists} /> : ''}
    </div>
  )};
}

export default App;
