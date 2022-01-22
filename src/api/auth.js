import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = (email, password, passwordConfirmation) => {
// export const signUp = (credentials) => {
  return axios.post(apiUrl + '/sign-up/', {
    credentials: {
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
    }
  })
}

export const signIn = (email, password) => {
  return axios({
    url: apiUrl + '/sign-in/',
    method: 'POST',
    data: {
      credentials: {
        email: email,
        password: password
      }
    }
  })
}

export const signOut = (user) => {
  return axios({
    url: apiUrl + '/sign-out/',
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const changePassword = (oldPassword, newPassword, user) => {
  return axios.patch(apiUrl + '/change-password/',
    {
      passwords: {
        old: oldPassword,
        new: newPassword
      }
    },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

  )
}
