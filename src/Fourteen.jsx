import React from 'react'
import { useCustom } from "./Context";


const Fourteen = () => {
    const {user,setUser} = useCustom()
    console.log(useCustom())
    
  return (
    <div>
        <hr />
        <h1>14 Th </h1>
       <h1>Hello {user} How are you!</h1>
      <button onClick={() => (user==="sudheer" ? setUser("syamala") : setUser("sudheer"))}>
        change name
      </button>

      
      <hr />
    </div>
  )
}

export default Fourteen
