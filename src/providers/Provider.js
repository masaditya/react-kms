import React, { useReducer } from 'react'
import Context from '../components/common/Context'
import balitaReducer from './balitaReducer'
import userReducer from './userReducer'

export default ({ children }) => {
  const [balitas, dispatch] = useReducer(balitaReducer, [])
  const [user, dispatchUserAction] = useReducer(userReducer, {})

  return (
    <Context.Provider
      value={{
        balitas,
        dispatch,
        user,
        dispatchUserAction,
      }}
    >
      {children}
    </Context.Provider>
  )
}
