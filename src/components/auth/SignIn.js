import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { signIn } from '../../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { signInFailure, signInSuccess } from '../AutoDismissAlert/messages'

// accept a setUser prop, that is passed down from App.js
const SignIn = ({ setUser, msgAlert }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const onSignIn = async (event) => {
    event.preventDefault()

    try {
      const res = await signIn(email, password)
      // Set the user with the one from our response's data
      // this is similar to store.user = responseData.user in jquery
      setUser(res.data.user)

      console.log('res is', res)
      msgAlert({
        heading: 'Sign In Success',
        message: signInSuccess,
        // this will be green
        variant: 'success'
      })
      // this will cause the browser to navigate to the home page
      setShouldNavigate(true)
    } catch (error) {
      msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: signInFailure,
        // this will be red
        variant: 'danger'
      })
      console.error(error)
      setEmail('')
      setPassword('')
    }
  }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign In</h3>
        <Form onSubmit={onSignIn}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              value={email}
              placeholder='Enter email'
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              value={password}
              type='password'
              placeholder='Password'
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Button variant='primary' type='submit' className='text-white'>Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default SignIn
