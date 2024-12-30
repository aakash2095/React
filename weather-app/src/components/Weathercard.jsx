import React from 'react'


const Weathercard = ({city,Temperature,Weather}) => {
    return (<>
    
      <h1>City : {city} </h1>
      <p>Temperature : {Temperature}</p>
      <p>Weather : {Weather}</p>
      </>
    )
  }

export default  Weathercard
