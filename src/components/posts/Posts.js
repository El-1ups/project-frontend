import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

import { Spinner } from 'react-bootstrap'
import { indexPosts } from '../../api/posts'

const Posts = ({ user, msgAlert }) => {
  const [posts, setPosts] = useState(null)

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  if (!user) {
    return <Navigate to='/' />
  }

  // Run once, when the component mounts
  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await indexPosts(user)
        setPosts(res.data.posts)
      } catch (error) {
        msgAlert({
          heading: 'Posts failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  // If posts are `null`, we are loading
  if (!posts) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  }

  // Otherwise, display the posts
  const postsList = posts.map(post => (
    <li key={post._id}>
      <Link to={`/posts/${post._id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Posts</h3>
        <ul>{postsList}</ul>
      </div>
    </div>
  )
}

export default Posts
