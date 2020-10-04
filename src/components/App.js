import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPosts } from '../redux/actions/actions.js'
import Post from './Post.js'

function App ({ posts, onFetchPosts }) {
  useEffect(() => {
    onFetchPosts()
  }, [onFetchPosts])

  return (
    <>
      {
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          )
        })
      }
    </>
  )
}

function mapStateToProps (state) {
  return {
    posts: state.posts.posts
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onFetchPosts: () => dispatch(fetchPosts())
  }
}

App.propTypes = {
  posts: PropTypes.array,
  onFetchPosts: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
