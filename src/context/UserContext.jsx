import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userState, setUserState] = useState(() => {
    // Get user from localStoragr if it exists
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  })

  useEffect(() => {
    if(userState) {
      localStorage.setItem("user", JSON.stringify(userState));
    }
    else{
      localStorage.removeItem("user")
    }
  }, [userState])

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
};
