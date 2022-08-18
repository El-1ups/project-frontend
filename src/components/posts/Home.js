import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Spinner } from 'react-bootstrap'
import { indexPosts } from '../../api/posts'

const Home = ({ msgAlert }) => {
  const [posts, setPosts] = useState(null)

  // Run once, when the component mounts
  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await indexPosts()
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
  const postsList = posts.map((post) => (
    <div className = "post-list-item" key={post._id}>
      <Link to={`/posts/${post._id}`}>{post.title}</Link>
    </div>
  ))

  return (
    <div className='row'>
      <div className='post-list'>
        <h3>Posts</h3>
        <div>{postsList}</div>
      </div>
    </div>
  )
}
export default Home
