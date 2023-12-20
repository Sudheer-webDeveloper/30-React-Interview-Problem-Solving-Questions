import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  console.log("action",action);
  console.log("action type",action.type)
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Twelve = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  // console.log("state", state);
  console.log("reducer", reducer);
  return (
    <div>
        <hr />
        <h1>user reducer 12 the question </h1>
      <button onClick={()=>dispatch({type:'increment'})}>increment</button>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    </div>
  );
};

export default Twelve;
