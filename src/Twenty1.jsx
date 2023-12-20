import React, { useState } from "react";


const Twenty1 = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    // In this snippet, the setCount calls within the add function are executed in the same render cycle because React batches state updates. When setCount is called multiple times in succession, React doesn’t perform an immediate state update. Instead, it schedules these updates and performs them together before the next render.

    // Therefore, in each setCount call, count still holds its initial value (0). Each subsequent setCount call overrides the previous one in the batch, incrementing from 0 to 1 four times within the same render cycle. As a result, the displayed count will only be 1 regardless of how many times the button is clicked.
  };
  return (
    <div>
        <h1>21 Question </h1>
      <h1>count :{count}</h1>
      <button onClick={add}>add</button>
      <br />
      <br />
      <SApp />


      <hr />
    </div>
  );
};


export default Twenty1;

const SApp = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prevcount) => prevcount + 1);
    setCount((prevcount) => prevcount + 1);
    setCount((prevcount) => prevcount + 1);
    setCount((prevcount) => prevcount + 1);
  
   //To achieve the desired result of incrementing the count by 4 with each click, you should use the functional form of setCount, which takes the previous state as an argument:

   //This ensures that each setCount call receives the latest state value, incrementing it by 1 for each call. As a result, the count will increment by 4 with each click.

  };
  return (
    <div>
      <h1>count :{count}</h1>
      <button onClick={add}>add</button>
    </div>
  );
};

