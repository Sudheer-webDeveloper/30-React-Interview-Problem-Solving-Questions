import React from 'react'
import { useState, useRef} from "react";


const Seventh = () => {
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef(null);

    console.log(intervalRef.current)

    const incrementing = () => {
      clearInterval(intervalRef.current)  // Clear any existing intervals
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
      console.log(intervalRef.current)
    };
  
    const decrementing =() => {
      clearInterval(intervalRef.current)  // Clear any existing intervals
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      console.log(intervalRef.current)

    }
    const reset = () => {
      clearInterval(intervalRef.current);
      setSeconds(0);
    };
  
    return (
      <div>
        <h1>Seventh Watch</h1>
  
        <h2>Stop watch</h2>
        <br />
        <h2>Seconds : {seconds}</h2>
        <button onClick={incrementing}>Positive</button>
        <br />
        <br />
  
        <button onClick={decrementing}>Negative</button>
        <br />
        <br />
  
        <button onClick={reset}>Reset</button>
  
        <br />
        <br />
        <hr />
      
      </div>
    );

    
}

export default Seventh

/*
We added a new useRef variable called intervalRef to store the reference to the interval, allowing us to clear it later.

The incrementing function clears any existing intervals, then uses setInterval to increment the seconds value by 1 every second.

The decrementing function clears any existing intervals, then uses setInterval to decrement the seconds value by 1 every second.

The reset function clears the interval and sets the seconds value back to 0.

With these changes, when the positive button is clicked, the seconds value will increment by 1 every second until the negative button is clicked. Then, the seconds value will decrement by 1 every second until the negative button is released or the reset button is clicked.


*/


/*
`useRef` is a hook provided by React that returns a mutable ref object. It allows you to persist values across renders without causing a re-render of the component. Here's a clear usage of `useRef` and how it works:

Usage:
1. Creating a ref: `const myRef = useRef(initialValue);`
2. Accessing the value of the ref: `myRef.current`
3. Modifying the value of the ref: `myRef.current = newValue`

Advantages of using `useRef`:
1. Persistence: The value stored in the ref persists across re-renders, but updating the ref does not cause a re-render. This is useful when you need to store a value that you don't want to trigger re-rendering.

2. Accessing DOM elements: You can use `useRef` to get a reference to a DOM element and manipulate it directly, without needing to use query selectors or other methods to access the element.

3. Caching expensive computations: You can use `useRef` to store the result of expensive computations, avoiding recomputation on subsequent renders.

Disadvantages of using `useRef`:
1. Lack of reactivity: Updating the value of a ref using `myRef.current = newValue` does not cause a re-render of the component. This can lead to inconsistencies if the value of the ref affects the rendering of the component.

2. Not suitable for state updates: `useRef` should not be used to update the state of a component. It is not a replacement for `useState`. For state management, use `useState` or other suitable hooks.

In summary, `useRef` is useful for accessing and manipulating DOM elements, caching expensive computations, and persisting values across renders without causing re-rendering. However, it should not be used for state updates and can lead to inconsistencies if used improperly.



*/