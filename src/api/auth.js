import axios from 'axios'
import apiUrl from '../apiConfig'

// We want to export multiple things from this file, so we are going to use
// a named export for the function `signUp`, instead of a `default` export
// (which would only allow 1 export per file)
export const signUp = (email, password, passwordConfirmation) => {
  // make an axios call to signUp, make sure to return
  // so we can use `.then`/`.catch` (or async/await)
  // in SignUp.js
  return axios.post(apiUrl + '/sign-up/', {
    credentials: {
      email,
      password,
      password_confirmation: passwordConfirmation
    }
  })
}

export const signIn = (email, password) => {
  // make an axios call to signUp, make sure to return
  // so we can use `.then`/`.catch` (or async/await)
  // in SignUp.js
  return axios.post(apiUrl + '/sign-in/', {
    credentials: {
      email,
      password
    }
  })
}

export const changePassword = (oldPassword, newPassword, user) => {
  // make an axios call to signUp, make sure to return
  // so we can use `.then`/`.catch` (or async/await)
  // in SignUp.js
  return axios.patch(apiUrl + '/change-password/', {
    passwords: {
      old: oldPassword,
      new: newPassword
    }
  },
  {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const signOut = (user) => {
  // make an axios call to signUp, make sure to return
  // so we can use `.then`/`.catch` (or async/await)
  // in SignUp.js
  return axios.delete(
    apiUrl + '/sign-out/',
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
