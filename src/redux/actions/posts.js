import api from '../../api.js'
import { SET_POSTS } from './actionTypes.js'

export function setPosts (posts) {
  return {
    type: SET_POSTS,
    payload: posts
  }
}

export function fetchPosts () {
  return (dispatch) => {
    api.getPosts()
      .then((posts) => dispatch(setPosts(posts)))
  }
}
