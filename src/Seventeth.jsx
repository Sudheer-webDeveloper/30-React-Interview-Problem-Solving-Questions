import React from "react";
import { useState, useCallback } from "react";

//Problem Statement: Create a component that renders a list of items and a button. Clicking the button should randomly remove one item from the list. Use useCallback to optimize the function passed to the button's onClick handler.

const Seventeth = () => {
  const [items, setItems] = useState(["Apple", "Banana", "Orange", "Mango"]);

  const remove = useCallback(() => {
    const whichItem = Math.floor(Math.random() * items.length);
    console.log(whichItem);

    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== whichItem)
    );
  }, [items]);

  return (
    <div>
      <h1>Seventeth usecallback problem</h1>

      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <button onClick={remove}>click to remove</button>
    </div>
  );
};

export default Seventeth;


//Explanation: The useCallback hook is used here to memoize the removeItem function. This ensures that the function reference remains consistent across renders, optimized for performance when passed as a dependency to the button's onClick handler.