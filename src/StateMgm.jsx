import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const StateMgm = () => {

    const [city,setCity] = useState("Hyderabad");

    useEffect(()=>{
        if(city === "Hyderabad")
            {
               setCity("Banaglore")
            }else{
               setCity("Delhi")
            }
    },[city])

   

  return (
    <div>
      <h1> I live in {city} </h1>
    </div>
  )
}

export default StateMgm
