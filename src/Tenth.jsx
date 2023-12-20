import React, { useEffect, useRef } from 'react'


const Tenth = () => {

    const countRef = useRef(0)

    useEffect(()=>{
        countRef.current++;
        console.log('count' , countRef.current)
    });

  return (
    <div>
   <h1>Tenth Question</h1>
      

      <h1>Count : {countRef.current}</h1>
      <br />
      <br />

      <hr />
    </div>
  )
}

export default Tenth

/*
In this example, the countRef reference is created and initialized with a value of 0. Inside the useEffect hook, which runs after each render, we increment the current value of countRef and log the updated count. The updated count is then displayed in the paragraph element.

Note that countRef will persist across renders, unlike a regular variable, which would be reset to 0 on each render.


*/
