import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

// Import PostForm:
import PostForm from './PostForm'
import { createPost } from '../../api/posts'

const PostCreate = ({ user, msgAlert }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [createdId, setCreatedId] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createPost(title, content, user)
      setCreatedId(res.data.post._id)

      msgAlert({
        heading: 'Post Created',
        message: `Created ${title} successfully.`,
        variant: 'success'
      })
    } catch (error) {
      msgAlert({
        heading: 'Failed to make post',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // if user is null, redirect to home page
  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    // if post has been created, Navigate to the 'show' page
    return <Navigate to={`/posts/${createdId}`} />
  }
  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Create Post</h3>
        <PostForm
          handleSubmit={handleSubmit}
          title={title}
          content={content}
          setTitle={setTitle}
          setContent={ setContent }
        />
      </div>
    </div>
  )
}

export default PostCreate
