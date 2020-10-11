import api from '../../api.js'
import { SET_POSTS } from './actionTypes.js'

export function fetchPosts () {
  return async (dispatch) => {
    dispatch({
      type: SET_POSTS,
      payload: await api.getPosts()
    })
  }
}
