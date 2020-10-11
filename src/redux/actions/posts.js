import api from '../../api.js'
import { SET_POSTS } from './actionTypes.js'

export function setPosts (posts) {
  return {
    type: SET_POSTS,
    payload: posts
  }
}

export function fetchPosts () {
  return async (dispatch) => {
    const posts = await api.getPosts()
    dispatch(setPosts(posts))
  }
}
