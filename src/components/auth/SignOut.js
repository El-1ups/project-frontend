import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { signOut } from '../../api/auth'
import { signOutSuccess } from '../AutoDismissAlert/messages'

const SignOut = ({ user, clearUser, msgAlert }) => {
  const [shouldNavigate, setShouldNavigate] = useState(false)

  // this is like componentDidMount, it will run whenever the SignOut component
  // is mounted (or added) to the page
  useEffect(() => {
    // for performance reasons, when using `useEffect`
    // it's a best practice to create a helper function w/ async/await
    const performSignOut = async () => {
      // make a signOut axios request
      await signOut(user)

      msgAlert({
        heading: 'Signed Out Successfully',
        message: signOutSuccess,
        variant: 'success'
      })

      // reset the user back to its initial value
      clearUser()
      setShouldNavigate(true)
    }
    performSignOut()
  }, [])

  if (!user || shouldNavigate) {
    return <Navigate to='/' />
  }

  // we dont actually want to see the SignOut component
  // we want it to be invisble, so we return a falsey value
  return ''
}

export default SignOut
