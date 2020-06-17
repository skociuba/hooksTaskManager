import { v4 } from 'uuid'
export default (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      const newId = v4()
      const newPost = {
        id: newId,
        post: action.payload
      }
      const addedPost = [...state.posts, newPost]
      return {
        ...state,
        posts: addedPost
      }
    case 'DELETE_NOTE':
      const deletedNotes = state.posts.filter(
        post => post.id !== action.payload
      )
      return {
        ...state,
        posts: deletedNotes
      }
    case 'SET_CURRENT_NOTE':
      return {
        ...state,
        currentNote: action.payload
      }
    case 'RESET':
      return {
        ...state,
        posts: localStorage.clear()
      }
    case 'UPDATE_NOTE':
      const updatedNote = {
        ...state.currentNote,
        post: action.payload
      }
      const updatedNotesIndex = state.posts.findIndex(
        post => post.id === state.currentNote.id
      )
      const updatedNotes = [
        ...state.posts.slice(0, updatedNotesIndex),
        updatedNote,
        ...state.posts.slice(updatedNotesIndex + 1)
      ]
      return {
        currentNote: null,
        posts: updatedNotes
      }
    default:
      return state
  }
}
