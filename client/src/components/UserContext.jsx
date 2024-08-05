import React, { createContext, useEffect, useState } from 'react'

export const UserContextProvider = createContext()

export const UserContext = ({children}) => {

    const [userToggle, setUserToggle] = useState(undefined);

    const handleUser = () => {
        setUserToggle(true)
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

