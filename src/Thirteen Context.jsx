import React from 'react'
import UserContext from './Context'
import { useContext } from 'react'

const ThirteenContext = () => {

    const {user,setUser} = useContext(UserContext)
  return (
    <div>
        <hr />
         <h2>based on context api 13 th </h2>
      <h1>hello {user} </h1>
      <button onClick={() => (user==="sudheer" ? setUser("syamala") : setUser("sudheer"))}>
        change name
      </button>
      <hr />


    </div>
  )
}

export default ThirteenContext
