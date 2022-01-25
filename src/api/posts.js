import axios from 'axios'
import apiUrl from '../apiConfig'

export const createPost = (title, content, user) => {
  return axios.post(
    `${apiUrl}/posts`,
    { post: { title, content } },
    // Pass along the authorization which includes our user's token
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}

export const indexPosts = () => {
  return axios.get(`${apiUrl}/posts`)
}

export const indexMyPosts = (user) => {
  return axios.get(`${apiUrl}/myposts`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showPost = (id) => {
  return axios.get(`${apiUrl}/posts/${id}/`, {
  })
}

export const deletePost = (id, user) => {
  return axios.delete(`${apiUrl}/posts/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updatePost = (id, title, content, user) => {
  return axios.patch(
    `${apiUrl}/posts/${id}`,
    { post: { title, content } },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
