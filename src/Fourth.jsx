//Create a controlled component Slider that allows the user to select a value between 0 and 100 using a range input. Display the selected value.


import React, { useState } from 'react'

const Slider = () => {
  const [value, setValue] = useState(0)

  const handlingSliderValue= (e) =>{
    setValue(e.target.value)

  }

  return (
    <div>
      <h2>Question 4</h2>p
      <input type="range"
      min={0}
      max={100}
      value={value}
      onChange={handlingSliderValue}
       />

       <h2>Your Choosed This Much Value : {value}</h2>

      <hr style={{ margin: "40px auto" }} />

    </div>
  )
}

export default Slider
