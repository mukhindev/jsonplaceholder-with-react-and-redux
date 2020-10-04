import { SET_POSTS } from '../actions/actionTypes.js'

const initialState = {
  posts: []
}

export default function posts (state = initialState, action) {
  switch (action.type) {
    case SET_POSTS:
      return { posts: action.payload }
    default:
      return state
  }
}
