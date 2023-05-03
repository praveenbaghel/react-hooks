import React, { useContext } from 'react'
import { AppContext } from './UseContext'


const User = () => {
    const {user} = useContext(AppContext)
  return (
    <div>
      <h4>User:{user}</h4>
    </div>
  )
}

export default User
