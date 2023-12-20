import React from "react";
import { useRef } from "react";

// useRef

const Ninth = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); // it add's the focus pseudo class to the input
    inputRef.current.style.color = "red"; // it changes the color of the input

    inputRef.current.style.fontSize = "20px"; // it add the fontSize to the input when user clicked on the focus input button
  };

  return (
    <div>
      <h1>Ninth Question</h1>
      <input type="text" ref={inputRef} placeholder="text" />
      <button onClick={handleClick}>Focus Input</button>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Ninth;
