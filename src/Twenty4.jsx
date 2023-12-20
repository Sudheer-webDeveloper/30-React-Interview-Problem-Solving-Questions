import React, { useState } from "react";
const arr = ["play cricket", "play video game", "read book"];


// wehen ever the checkbox is checked is true for the specific item then only the delete button shoud be visible ,when clickoing on the specific delete button then only that element shold be delete

const Twenty4 = () => {
  const [state, setState] = useState(arr);

   const [form ,setForm] = useState({
    "play cricket":false,
    "play video game":false,
    "read book":false,
   })


   const onChange= (e) => {
      const {checked,name} = e.target

      return setForm((prevForm)=>{
        return {...prevForm,[name] : checked}
      })
   }
  
  console.log(form["play cricket"],form["play video game"] ,form["read book"])
   


  const removeItem = (id)=>{
    const filter = state.filter((item,index)=>{
         return index !== id
    })

    return setState(filter)
  }

  return (
    <>
    <ul>
     <h1>24Th How to handle multiple checkboxes  </h1>
      {state.map((item,index) => {
        return (
          <div key={index}>
            <li>
              <input type="checkbox" checked={form[item]} name={item} onChange={onChange}/>
              <span>{item}</span>
              {form[item] && <button onClick={()=>removeItem(index)}>delete</button>}
            </li>
          </div>
        );
      })}
      
       {state.length === 0 && <button onClick={()=>setState(arr)}>reset</button>}
    </ul>
       <hr />

       </>
  );
};

export default Twenty4;
