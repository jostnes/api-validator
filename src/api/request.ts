import axios from 'axios'
require('dotenv').config()

export interface ApiRequest {
  forgotPassword(email: string): Promise<Response>
  login(email: string, password: string): Promise<Response>
}

export function ApiRequest(): ApiRequest {

  async function login(email: string, password: string): Promise<Response> {
    if (!process.env.ADDRESS_LOGIN) {
      throw new Error('Login address not specified!')
    }

    return await axios.post(process.env.ADDRESS_LOGIN, {
      id: email,
      password: password
    })
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error.response
    })
  }

  async function forgotPassword(email: string): Promise<Response> {
    if (!process.env.ADDRESS_FORGOT_PASSWORD) {
      throw new Error('Forgot Password address not specified!')
    }

    return await axios.post(process.env.ADDRESS_FORGOT_PASSWORD, {
      email: email,
    })
    .then((response) => {
      return response
    })
    .catch((error) => {
      return error.response
    })
  }
  
  return {
    forgotPassword,
    login
  }
}
