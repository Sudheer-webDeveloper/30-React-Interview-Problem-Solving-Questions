import React from 'react'
import { useState, useEffect } from "react";


const Eigth = () => {
    const [time, setTime] = useState(new Date());
    // console.log(time)
    // const [time ,setTime] = useState({seonds:"",minutes:"0",hour:""})
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(timer);
      };
    });
  
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
  
    return (
      <>
      <br />
      <br />
        <div>
          <h1>Eight </h1><br />
          
          <h2>STOP WATCH</h2>
          <br />
          <h2>
            {hours < 10 ? `0${hours}` : hours} :{" "}
            {minutes < 10 ? `0${minutes}` : minutes} :{" "}
            {seconds < 10 ? `0${seconds}` : seconds}
          </h2>
  
          <button onClick={() => setTime(new Date())}>Reset</button>
          <hr />
        </div>
      </>
    );
}

export default Eigth
