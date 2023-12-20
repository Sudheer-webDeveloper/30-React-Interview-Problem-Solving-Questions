import React, { useState } from 'react'


//  Here question is they given us the countries array , they said us to create the select with the countries and creates the drop down India ,Pakistan , Banglasesh ,based on the country we selected we have to get the cities on the second select with a respective cities in the drop down



const countries = [
  {name:"India",value:"IN",cities:["Delhi","Mumbai"]},
  {name:"Pakistan",value:"PK",cities:["Lahore","Karachi"]},
  {name:"Bangladesh",value:"BG",cities:["Dhaka","Chittagong"]},
]

console.log(countries[1])
console.log(countries[1.])


const Twenty2 = () => {


  const [index,setIndex] = useState("")

  console.log(index)
  return (
   <>
    <h1>22 nd question Important</h1>
    <select>
      <option>Countries</option>
      {countries.map((country,index)=>{
        return (
        <option onClick={()=>setIndex(index)} key={index}>{country.name}</option>
        )
      })}
    </select>




    <select>
      <option >states</option>
      {countries[index]?.cities.map((item,index)=>{
        return (
          <option key={index}>{item}</option>
        )
      })}
      
    </select>

<hr />
   </>
  )
}

export default Twenty2
