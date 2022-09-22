import React, { createContext, useReducer } from 'react'

import { robotsLibrary } from 'constant'
import { robotsReducer } from 'reducer'

const initialState = {
  robots: robotsLibrary.slice(0, 4),
}

export const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
})

const rootReducer = ({ robots }, action) => ({
  robots: robotsReducer(robots, action),
})

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}
