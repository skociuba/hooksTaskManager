import React, { useState, useContext, useRef, useEffect } from 'react'
import Context from '../context/Context'
import styled from 'styled-components'

const Container = styled.div`
  height: 200px;
  margin-bottom: 10px;
  border-bottom: 2px solid #ff5601;
`
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
export default () => {
  const { dispatch } = useContext(Context)
  const [post, setPost] = useState('')

  let ref = useRef()
  useEffect(() => {
    ref.current.focus()
  }, [])

  const onChange = e => {
    setPost(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
    if (post.trim() === '') return
    dispatch({
      type: 'ADD_NOTE', payload: post
    })
    setPost('')
  }
  const onReset = () => {
    dispatch({
      type: 'RESET'})
    window.location.reload()
  }

  return (
    <Container>
      <form onSubmit={onSubmit}>
        {' '}
        <div className='form-group-collection'>
          <div className='form-group'>
            <label htmlFor='formGroupExampleInput' />
            <input
              type='text'
              name='body'
              ref={ref}
              value={post}
              onChange={onChange}
              className='form-control'
              id='formGroupExampleInput'
            />
          </div>
        </div>
        <StyledButton type='submit'>Add </StyledButton>
      </form>{' '}
      <StyledButton
        onClick={e =>
          window.confirm('Are you sure you wish to clear the page?') &&
          onReset()
        }
      >
        Clear page
      </StyledButton>
    </Container>
  )
}
