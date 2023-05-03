import React, { createContext, useState } from 'react'
import Login from './Login'
import User from './User'

export const AppContext = createContext(null);


const UseContext = () => {
    const [user, setUser] = useState("");
    
  return (
    <AppContext.Provider value = {{user, setUser}}>
      <h3>useContext</h3>
      <Login/> <User/>
    </AppContext.Provider>
  )
}

export default UseContext
