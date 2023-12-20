import React, { useState,useLayoutEffect, useRef } from 'react'


const Twenty = () => {
    const [width,setWidth] = useState(0)
    const divRef = useRef(null)
  
     console.log(divRef.current)  // <div style="border: 1px solid rgb(0, 0, 0); padding: 20px;"> this will apply once you call the updateWidth function inside the useeffectLayout , then divRef.current value changes from null.
  
     const updateWidth = () =>{
      setWidth(divRef.current.clientWidth)
     }
  
     useLayoutEffect(()=>{
      updateWidth();
      window.addEventListener('resize',updateWidth) // if we leave like this also it will work but we have to clean the event listener once done
  
      return () => window.removeEventListener('resize',updateWidth)
     },[])
  
  
     // BY DOING THIS WE GET A DOUBT LIKE THIS WHY WE NEED TO PASS THE REF INSIDE THE DIV CAN;T WE USE ID AND APPLY THE EVENT LISTENER TO IT CALLED RESIZE , TO APPLY EVENT LISTENER TO TAHT , WE NEED TO TARGET THE ELEMENT BY DOCUMENT .GET ELEMENT BY ID , OR QUERY SELECTOR , WE NOOD TO DO LIKE THAT IN REACT ,WE HAVE A USEREF WHICH HAVE AN ACCSES TO THE DOM ELEMENTS DIRECLLY WHERE WE CAN DO LOT OF THINGS BY PERSISTING THE VALUES , WITHOUT TRIGERING THE RERENDER OF THE COMPONENT 
  
    return (
      <>
      <h1>Ninteenth useLayoutEffect</h1>
       <div ref={divRef} style={{ border: '1px solid #000', padding: '20px' }}>
        Resize Me !
       </div>
  
       <h1>Width of the div is  {width}</h1>
  
       <hr />
  
      </>
    )
}

export default Twenty



/*


useLayoutEffect is a React hook that is quite similar to useEffect, but with a critical difference: it runs synchronously after all DOM mutations, but before the browser has painted those changes on the screen. It's called "synchronously" because it blocks painting on the screen until it finishes its execution. This can potentially cause performance issues if misused, but it's crucial when immediate access to the updated DOM is required.
How it Works:

    Synchronous Execution: useLayoutEffect fires synchronously after a component's render but before the browser paints on the screen.
    Blocking Behavior: It can potentially block the browser from updating the screen until the code inside useLayoutEffect completes its execution.
    Similar to componentDidMount and componentDidUpdate: It's similar to componentDidMount and componentDidUpdate in terms of when it runs but ensures that the DOM is updated before the user sees the changes.

Uses and When to Use useLayoutEffect:

    DOM Measurements: When you need to measure the layout (like getting dimensions or positions of DOM elements) or perform an action immediately after a DOM update, useLayoutEffect can be useful.
    Synchronous State Updates: When you want to perform imperative DOM mutations or need to synchronously modify the state or props based on the DOM changes.
    Server-Side Rendering (SSR): If you're dealing with server-side rendering, and you need to ensure that the DOM is in a specific state before it gets rendered on the client, useLayoutEffect can be crucial.

*/