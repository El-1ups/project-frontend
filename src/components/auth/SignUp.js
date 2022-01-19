import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
// Access the signUp function through a `named import`
import { signUp, signIn } from '../../api/auth'

// import react bootstrap components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { signUpFailure, signUpSuccess } from '../AutoDismissAlert/messages'

const SignUp = ({ setUser, msgAlert }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  // to use async/await, add `async` to the function that you use `await` and a promise in
  const onSignUp = async (event) => {
    event.preventDefault()

    try {
      // Call the signUp function to make an axios request
      // to create a user
      // to use `async/await`, put the `await` keyword before the
      // function that returns a promise
      await signUp(email, password, passwordConfirmation)
      // if we signed up successfully, then make a signIn axios request
      // these two lines are the same from SignIn
      const res = await signIn(email, password)
      setUser(res.data.user)
      // Alert the user, that they signed up successfully
      msgAlert({
        heading: 'Sign Up Success',
        message: signUpSuccess,
        // this will be green
        variant: 'success'
      })

      setShouldNavigate(true)
    } catch (error) {
      // Alert the user, that they failed to sign up
      msgAlert({
        heading: 'Sign Up Failed with error: ' + error.message,
        message: signUpFailure,
        // this will be red
        variant: 'danger'
      })

      console.error(error)
      // if we fail to sign up, clear out the form
      setEmail('')
      setPassword('')
      setPasswordConfirmation('')
    }
  }

  // onSignUp using promises .then/.catch
  // const onSignUp = event => {
  //   event.preventDefault()

  //   // Call the signUp function to make an axios request
  //   // to create a user
  //   signUp(email, password, passwordConfirmation)
  //     .then(res => {
  //       console.log('res is', res)
  //       setShouldNavigate(true)
  //     })
  //     .catch(error => {
  //       console.error(error)
  //       // if we fail to sign up, clear out the form
  //       setEmail('')
  //       setPassword('')
  //       setPasswordConfirmation('')
  //     })
  // }

  if (shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='row'>
      {/* mx-auto, means set the margin on the x axis (left and right) automatically. This will center the column. */}
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign Up</h3>
        {/* When the react bootstrap form is submitted
          call the onSignUp function */}
        <Form onSubmit={onSignUp}>
          {/* controlId will set the `for` attribute for the `label` and the id for the `control` (input) */}
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

          <Form.Group className='mb-3' controlId='passwordConfirmation'>
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              value={passwordConfirmation}
              type='password'
              placeholder='Confirm Password'
              onChange={(event) => setPasswordConfirmation(event.target.value)}
            />
          </Form.Group>
          {/* Adding a message if the passwords dont match */}
          {password !== passwordConfirmation && <h3>Passwords dont match</h3>}

          <Button className='text-white' variant='primary' type='submit'>Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default SignUp
