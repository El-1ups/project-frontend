import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'

import { deletePost, showPost } from '../../api/posts'

const Post = ({ user, msgAlert }) => {
  const [post, setPost] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams()

  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user

  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await showPost(id)
        setPost(res.data.post)
      } catch (error) {
        msgAlert({
          heading: 'Post failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])
  const handleDeleteClick = async () => {
    try {
      await deletePost(id, user)
      setDeleted(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete the post',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // 3 states:
  // If post is `null`, we are loading
  if (!post) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (deleted) {
    return <Navigate to='/posts' />
  } else if (user) {
    if (user._id !== post.owner) {
      // console.log(user._id)
      // console.log(post.owner)
      // We have a post, display it!
      return (
        <div className='row'>
          <div className='col-sm-10 col-md-8 mx-auto mt-5'>
            <h3 className="post-title">{post.title}</h3>
            <p>{post.content}</p>
          </div>
        </div>
        // ** add comment component ? **
      )
    } else {
      // We have a post, display it!
      return (
        <div className='row'>
          <div className='col-sm-10 col-md-8 mx-auto mt-5'>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <Button variant='danger' onClick={handleDeleteClick}>
Delete Post
            </Button>
            <Link to={`/posts/${id}/edit`}>
              <Button variant='primary' type='submit'>
Update Post
              </Button>
            </Link>
          </div>
        </div>
      )
    }
  } else {
    // Unauthenticated View
    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      </div>
    )
  }
}

export default Post
