import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
// Access the signUp function through a `named import`
import { changePassword } from '../../api/auth'

// import react bootstrap components
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { changePasswordFailure, changePasswordSuccess } from '../AutoDismissAlert/messages'

const ChangePassword = ({ user, msgAlert }) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [shouldNavigate, setShouldNavigate] = useState(false)

  // to use async/await, add `async` to the function that you use `await` and a promise in
  const onChangePassword = async (event) => {
    event.preventDefault()

    try {
      // Call the signUp function to make an axios request
      // to create a user
      // to use `async/await`, put the `await` keyword before the
      // function that returns a promise
      await changePassword(oldPassword, newPassword, user)
      msgAlert({
        heading: 'Change Password Success',
        message: changePasswordSuccess,
        // this will be green
        variant: 'success'
      })

      setShouldNavigate(true)
    } catch (error) {
      msgAlert({
        heading: 'Change Password Failed with error: ' + error.message,
        message: changePasswordFailure,
        // this will be red
        variant: 'danger'
      })
      console.error(error)
      // if we fail to sign up, clear out the form
      setOldPassword('')
      setNewPassword('')
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

  if (!user || shouldNavigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='row'>
      {/* mx-auto, means set the margin on the x axis (left and right) automatically. This will center the column. */}
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Change Password</h3>
        {/* When the react bootstrap form is submitted
          call the onSignUp function */}
        <Form onSubmit={onChangePassword}>
          {/* controlId will set the `for` attribute for the `label` and the id for the `control` (input) */}
          <Form.Group className='mb-3' controlId='oldPassword'>
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              required
              type='password'
              value={oldPassword}
              placeholder='Enter password'
              onChange={(event) => {
                setOldPassword(event.target.value)
                console.log(event.target.value)
              }
              }
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='newPassword'>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              required
              value={newPassword}
              type='password'
              placeholder='Password'
              onChange={(event) => setNewPassword(event.target.value)}
            />
          </Form.Group>

          <Button className='text-white' variant='secondary' type='submit'>Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default ChangePassword
