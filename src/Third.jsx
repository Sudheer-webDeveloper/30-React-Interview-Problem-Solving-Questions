//Array.from() is a built-in JavaScript method that creates a new array from an iterable object or array-like object. It takes two arguments: the iterable object and a mapping function.

// The first argument { length: 100 } specifies an iterable object with a length of 100. This means we want to create an array with 100 elements.
// The second argument is a mapping function (item, index) => Item ${i + 1}. This function is called for each element in the newly created array. In this case, the function takes two parameters:
// The first parameter _ represents the current element being processed. Since we are not using the value of each element, we can use _ as a placeholder.
// The second parameter i represents the index of the current element.
// The body of the mapping function is a template literal that generates a string "Item ${i + 1}". This string concatenates the text "Item" with the index i + 1. The index is incremented by 1 to start the count from 1 instead of 0.
// Finally, Array.from() returns a new array with 100 elements, where each element is the result of applying the mapping function to its corresponding index.
// To see the output step-by-step in the console, you can execute the following code:



//Problem : Implement a basic login form that checks credentials and displays a success message.


import React, { useState } from "react";

function Third() {
  const [form, setForm] = useState({ name: "", password: "" });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleform = (e) => {
    const { value, type, checked, name } = e.target;
    setForm((prevForm) => {
      return { ...prevForm, [name]: value };
    });
    console.log(form);
  };



  const handleLogin = (e) => {
    e.preventDefault();
    if (form.name !== "" && form.password !== "" ){
        setIsLoggedIn(true);
        setForm({name:'',password:''})
    } else {
      alert("Provide Credentials");
      setIsLoggedIn(false);
      setForm({name:'',password:''})

    }
  };
  return (
    <form>
      <h2>Third Question </h2>
      <input
        type="text"
        placeholder="Username"
        value={form.name}
        onChange={handleform}
        name="name"
        style={{ marginRight: "20px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleform}
        name="password"
      />
      <button onClick={handleLogin} style={{ marginLeft: "15px" }}>
        Login
      </button>
      {isLoggedIn && <p>Login Success </p>}

      <hr style={{ margin: "40px auto" }} />
    </form>
  );
}

export default Third;
