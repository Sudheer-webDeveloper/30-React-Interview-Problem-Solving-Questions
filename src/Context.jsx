import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
const [user,setUser] = useState("sudheer")


  return( <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>);
};




// Using custom hook for 14 the problem
export const useCustom =() =>{
  return useContext(UserContext)

} 

export default UserContext;





// can we use the component inside the same context file
export const NewTrying =() =>{
  const {user,setUser} = useCustom()

  return (
    <>
    <h1>Hello {user}</h1>
    <h2>YES,we can use it</h2>
    </>
  )
}