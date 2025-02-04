import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const UserContextProvider = createContext()

export const UserContext = ({children}) => {

    const [userToggle, setUserToggle] = useState(undefined);

    const handleUser = async () => {
        try {
          const res = await axios.get('https://authmern-f9y9.onrender.com/api/v1/current')
          setUserToggle(res.data.success)
        } catch (error) {
          console.log(error.message)        
        }
    }

    useEffect(() => {
      handleUser()
    }, []);

  return (
    <UserContextProvider.Provider value={{handleUser,userToggle}}>
      {children}
    </UserContextProvider.Provider>
  )
}

