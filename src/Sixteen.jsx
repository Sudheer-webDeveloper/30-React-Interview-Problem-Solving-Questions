import React, { useEffect, useRef, useState } from 'react'
//Problem Statement: Create a component that focuses on an input field when it mounts and displays the current input value when a button is clicked.


const Sixteen = () => {
    const inputRef = useRef(null)

    const [value,setValue] = useState("")
  
  
     useEffect(()=>{
         inputRef.current.focus();
     },[])
  
     const showingValue = ()=>{
         
       setValue(inputRef.current.value)
  
       return inputRef.current.value=""
  
     }
  
  
    
     console.log(value)
    return (
      <div>
  <hr />
  <h1>sixteen useref</h1>
        <input type="text" placeholder='something' ref={inputRef}/>
        <br />
        <br />
        <button onClick={showingValue}>show the value</button>
        <h1>value is  : {value}</h1>
        <hr />

      </div>
    )
}

export default Sixteen
