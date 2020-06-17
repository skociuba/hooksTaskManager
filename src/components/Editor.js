import React, { useState, useContext, useRef, useEffect } from 'react'
import '../app.css'
import styled from 'styled-components'
import Context from '../context/Context'

const StyledButton = styled.button`
  background-color: #ff5601;
  border: 1px solid black;
  padding: 10px;
  margin: 15px;
  color: white;
  border-radius: 6px;
  &:hover {
    background-color: black;
    color: white;
  }
  &:focus {
    background-color: #ff5601;
    color: white;
  }
`
const Info = styled.div`
  border: 2px solid white;
  color: white;
  min-padding: 10px;
  border-radius: 8px;
  margin: 5px;
  opacity: 1;
  background-color: black;
`
export default ({post}) => {
  const { dispatch } = useContext(Context)
  const [show, setShow] = useState(true)
  const [posts, setPost] = useState('')

  const myFunc = () => {
    setShow(!show)
  }

  let ref = useRef()
  useEffect(() => {
    ref.current.focus()
  })

  const handleChange = event => {
    setPost(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (posts.trim() === '') {
      setShow(!show)
    } else {
      dispatch({ type: 'UPDATE_NOTE', payload: posts })
      setPost('')
      setShow(!show)
    }
  }
  const button = (posts.trim() === '') ? `close` : `update`
  const showing = show ? <StyledButton ref={ref} onClick={() => { dispatch({ type: 'SET_CURRENT_NOTE', payload: post }); myFunc() }}>Edit</StyledButton>
    : <div className='note-form'>
      <form onSubmit={handleSubmit} action=''>
        <Info>  <textarea ref={ref}
          onChange={handleChange}
          value={posts}
          name=''
          id=''
          cols='30'
          rows='10' />
        </Info>
        <StyledButton>{ button }</StyledButton>
      </form>
    </div>
  return (
    <div>
      <p>{showing}</p>
    </div>
  )
}
