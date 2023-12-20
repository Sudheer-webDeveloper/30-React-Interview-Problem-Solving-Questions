import { useEffect, useMemo, useState } from "react";


const ExpensiveComponent =  () =>{
   const [value,setValue] = useState('')

   const computeExpensiveValue =() =>{
    console.log("Computing Expensive Value...");
    
    return setValue(Math.random());
  }

   useMemo(computeExpensiveValue,[])

    return (
     <>
     <h2>Sixth Question </h2>
     <h2>Memoized value : {value} </h2>
     <hr style={{ margin: "40px auto" }} />
     </>
    )
}

export default ExpensiveComponent;




/*

In the given code snippet, we have a functional component called `ExpensiveComponent` which contains a function called `computeExpensiveValue`. This function is responsible for computing an expensive value and returns a random number.

Now, let's go step by step and explain each part of the code:

1. `const ExpensiveComponent = () => { ... }`: This is the declaration of the functional component `ExpensiveComponent`.

2. `function computeExpensiveValue() { ... }`: This is the definition of the `computeExpensiveValue` function. It uses `console.log` to print a message indicating that the expensive value is being computed, and then it returns a random number using `Math.random()`.

3. `const memoizedValue = useMemo(computeExpensiveValue, []);`: This line uses the `useMemo` hook to memoize the expensive value computed by the `computeExpensiveValue` function. The first argument to `useMemo` is the function to be memoized, and the second argument is an array of dependencies. If any of the dependencies change, the memoized value will be recomputed. In this case, since the dependency array is empty (`[]`), the memoized value will be computed only once, during the initial render of the component.

Now, let's discuss what would happen if we use `useEffect` instead of `useMemo`:

If we use `useEffect` instead of `useMemo` like this:

```javascript
const [memoizedValue, setMemoizedValue] = useState(null);

useEffect(() => {
  setMemoizedValue(computeExpensiveValue());
}, []);
```

In this case, we are using the `useState` hook to store the memoized value, and `useEffect` to compute and set the memoized value. The empty dependency array (`[]`) ensures that the effect is run only once, during the initial render.

The main difference between `useMemo` and `useEffect` lies in their purpose:

- `useMemo` is used for memoization. It memorizes the result of a function and only recomputes it if the dependencies change. It is used to optimize performance by avoiding unnecessary recomputations.

- `useEffect` is used for handling side effects. It runs a function after every render and allows you to perform side effects, such as fetching data, subscribing to events, etc. It is not meant for memoization purposes.

In the given scenario, `useMemo` is more appropriate because we want to memoize the expensive value and avoid recomputing it unnecessarily. `useEffect` would work, but it is not the best choice as it is not designed for memoization.

To summarize, use `useMemo` when you want to memoize a value and optimize performance, and use `useEffect` when you need to perform side effects after every render.


*/