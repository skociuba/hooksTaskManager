import React, { useState, Fragment, useContext } from 'react'
import Context from '../context/Context'
import styled from 'styled-components'
import '../app.css'
const Input = styled.div`
  height: 200px;
  margin-bottom: 10px;
  border-bottom: 2px solid #ff5601;
`
const Info2 = styled.div`
border: 2px solid white;
padding: 30px;
color: white;

min-padding: 10px;
border-radius: 8px;
margin: 10px;
background-color: rgba(0, 0, 0, 0.9);
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
const Container = styled.div`
  border-top: 2px solid #ff5601;
  text-align: center;
  padding: 10px;
`

export default () => {
  const { state } = useContext(Context)
  const [show, setShow] = useState(state.posts)
  const [post, setPost] = useState('')

  const reset = () => {
    setPost('')
    setShow(state.posts)
  }
  return (
    <Fragment>
      <Container>
        <Input>
          <div className='form-group-collection'>
            <input
              onChange={e => {
                const test = show.filter(post => {
                  return post.post.toLowerCase().includes(e.target.value.toLowerCase())
                })
                setShow(test)
                setPost(e.target.value)
              }}
              type='text'
              value={post}
            />
          </div>
          <StyledButton type='reset' defaultValue='Reset' onClick={reset}>
                  Reset filter
          </StyledButton></Input>
        <Info2>  <h3>My tasks:</h3>
          {show.length > 0
            ? <ul> { show.map((post) => {
              return <h4 key={post.id}><li>{post.post}</li></h4>
            })}</ul> : <h4> No results </h4>}</Info2>
      </Container>

    </Fragment>
  )
}


