import React, { useReducer } from 'react'
import Context from './Context'
import Reducer from './Reducer'

const Provider = props => {
  const initialState = {
    synced:false,
    user:null,
    posts:
    localStorage.getItem(`posts`) == null
      ? []
      : JSON.parse(localStorage.getItem(`posts`))
  }
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <Context.Provider
      value={{
        state,
        dispatch
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default Provider
