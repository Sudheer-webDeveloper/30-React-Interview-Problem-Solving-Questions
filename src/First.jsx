//Implement a simple timer that starts on button click and displays elapsed time.

import React from "react";
import { useState,useRef} from "react";

const First = () => {
  const [elapsed, setElapsed] = useState(0);

  const intervalRef = useRef(null);  // why we have used useRef here , without using useref we can do this problem , read the comment below

  console.log("Interval Ref", intervalRef.current);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setElapsed((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = ()=>{
    clearInterval(intervalRef.current)
    intervalRef.current=null
     setElapsed(0)
  }

  return (
    <>
      <div>
        <h1>Elapsed Time : {elapsed}</h1>
        <button onClick={startTimer}>start</button>

        <br />
        <br />
        <button onClick={stopTimer}>Stop</button>

        <br />
        <br />
        <button onClick={reset}>reset</button>


      </div>
        <hr />
    </>
  );
};

export default First;









/*


Certainly! The `useRef` hook serves a crucial purpose in the context of managing the timer in React. Let's compare the functionality with and without `useRef` to understand its advantages:

### Without `useRef`:

If you attempt to manage the interval without `useRef`, you might encounter issues with managing the interval reference across renders and function calls. For instance, consider the following approach without `useRef`:

```javascript
function Timer() {
  const [elapsedTime, setElapsedTime] = useState(0);

  const startTimer = () => {
    const intervalId = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(/* How to reference intervalId here? );
  };

  // Rest of the code...
}
```

**Issues without `useRef`:**
- ** Difficulty in Managing Interval Reference**: Without `useRef`, storing and managing the reference to the interval (`intervalId`) across different function calls (`startTimer` and `stopTimer`) becomes challenging.
- **Lack of Persistence**: The `intervalId` variable is re-initialized on every render, leading to the loss of the previous interval reference and causing issues when trying to stop or manage the timer.

### With `useRef`:

Using `useRef` resolves the issues mentioned above by providing a persistent mutable reference across renders. Let's revisit the code using `useRef`:

```javascript
function Timer() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(prevTime => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Reset the reference
  };

  // Rest of the code...
}
```

**Advantages of `useRef`:**
- **Persistent Reference**: `useRef` provides a persistent reference (`intervalRef.current`) across renders, allowing you to store and access the interval ID consistently.
- **Mutable without Triggering Re-renders**: Modifying `intervalRef.current` doesn't cause re-renders, making it suitable for managing mutable values across different function calls without losing the reference.

In essence, `useRef` is crucial in this context because it allows for the management of mutable values (like the interval reference) that persist across renders without causing re-renders, thereby ensuring proper control and management of the timer functionality in React.






Certainly! In the context of `useRef` in React, the `ID` or `current` property is simply a way to hold onto a piece of information across multiple renders without causing the component to re-render every time that information changes.

Here's a simple analogy to explain the `current` property of a `useRef` object:

Imagine you have a whiteboard where you want to keep track of a specific piece of information, say, a number. You decide to use a sticky note to hold that number. Initially, the sticky note is blank (`null`). When you need to remember a number, you write it on the sticky note. Later, if you need to erase the number or change it to something else, you can do that without getting a new sticky note every time.

Similarly, in React, `useRef` allows you to create a reference (`current`) that can hold different types of information, like numbers, objects, or even references to elements in the DOM. This reference persists across renders without causing the component to re-render when its value changes.

In the case of the timer example we discussed earlier, the `intervalRef.current` is like a sticky note where we store the ID of the interval that's created when the timer starts. We can check if this sticky note is blank (`null`) before starting a new interval and can also clear the interval by erasing the number (setting it back to `null`). This way, the `useRef` reference (`intervalRef`) helps us keep track of and manage the interval information consistently without causing unnecessary re-renders in the component.



*/