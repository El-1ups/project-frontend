import React from 'react'
import { Form, Button } from 'react-bootstrap'

const PostForm = ({ handleSubmit, title, content, setTitle, setContent }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='title'>
      <Form.Label>Title</Form.Label>
      <Form.Control
        placeholder='Post...'
        name='title'
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
    </Form.Group>

    <Form.Group controlId='content'>
      <Form.Label>Content</Form.Label>
      <Form.Control
        placeholder='Post Content'
        name='content'
        value={content}
        onChange={event => setContent(event.target.value)}
      />
    </Form.Group>
    <Button className='mt-2' variant='primary' type='submit'>Submit</Button>
  </Form>
)

export default PostForm
