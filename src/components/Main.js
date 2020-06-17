import React, { Fragment, useContext, useEffect } from 'react'
import Context from '../context/Context'
import styled from 'styled-components'
import ReduxInput from './Input'
import ReduxEditor from './Editor'
import '../app.css'

const Container = styled.div`
  border-top: 2px solid #ff5601;
  text-align: center;
  padding: 10px;
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
  &:active {
    background-color: black;
    color: white;
  }
  `
const Item = styled.div`
  border: 2px solid white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: rgba(61, 61, 61, 0.3);
  width: 100%;
  color: white;
  height: 310px;
`
const Info2 = styled.div`
  border: 2px solid white;
  padding: 30px;
  color: white;
  min-padding: 10px;
  border-radius: 8px;
  margin: 10px;
  background-color: rgba(0, 0, 0, 1);
`
export default () => {
  const { state, dispatch } = useContext(Context)
  useEffect(() => {
    localStorage.setItem(`posts`, JSON.stringify(state.posts))
  }, [state.posts])

  const postTitles = state.posts.map(post => (
    <Item key={post.id}>
      <Info2> {post.post}</Info2>
      <StyledButton onClick={() => window.confirm('Are you sure you wish to delete this info?') && dispatch({ type: 'DELETE_NOTE', payload: post.id })}>
          Remove
      </StyledButton>
      <ReduxEditor post={post} />
    </Item>
  ))
  return (
    <Fragment>
      <Container>
        <ReduxInput />
        <p>{postTitles}</p>
      </Container>
    </Fragment>
  )
}


