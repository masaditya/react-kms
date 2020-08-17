import React, { useReducer } from 'react'
import Context from '../components/common/Context'
import balitaReducer from './balitaReducer'
import userReducer from './userReducer'
import timbangReducer from './timbangReducer'

export default ({ children }) => {
  const [balitas, dispatch] = useReducer(balitaReducer, [])
  const [user, dispatchUserAction] = useReducer(userReducer, {})
  const [timbangs, dispatchTimbang] = useReducer(timbangReducer, [])

  return (
    <Context.Provider
      value={{
        balitas,
        dispatch,
        user,
        dispatchUserAction,
        timbangs,
        dispatchTimbang
      }}
    >
      {children}
    </Context.Provider>
  )
}
