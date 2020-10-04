import React from 'react'
import PropTypes from 'prop-types'

function Post ({ id, title, body }) {
  return (
    <article className="post">
      <h2 className="post__title">{id}. {title}</h2>
      <p className="post__text">{body}</p>
    </article>
  )
}

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string
}

export default Post
