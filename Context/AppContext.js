import React, { useState } from 'react'

const AppContext = React.createContext({
  footer: {}
})

export const AppProvider = ({ children }) => {
  const [footer, setFooter] = useState({})
  return <AppContext.Provider value={{ footer, setFooter }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  return React.useContext(AppContext)
}
