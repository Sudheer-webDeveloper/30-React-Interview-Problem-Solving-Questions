import React, { useMemo, useState } from "react";
//Problem 6: Using useMemo

// Problem Statement: Create a component that calculates the factorial of a number when the number input changes and displays the result.


const Eighteenth = () => {
    let [number, setNumber] = useState(0);

    const factorial = useMemo(() => {
      let result = 1;
  
      for (let i = 1; i <= number; i++) {
        result *= i;
      }
  
      return result;
    }, [number]);
  
    // keep in mind if we dont use the usememo function then we have to pass like this in jsx {factorial()} in normal function , if we use useMemo hook then we have to do like this direaclty {factorial} because useMemo0 returns the value of the function 



    return (
      <div>
        <hr />
        <h1> 18 Th problem useMemo</h1>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
          placeholder="Number"
        />
  
        <h1> The factoorial is : {factorial} </h1>

        <hr />
      </div>
    );
}

export default Eighteenth


//Explanation: useMemo is used here to memoize the factorial calculation based on the number state. It recalculates the factorial only when the number state changes, optimizing performance