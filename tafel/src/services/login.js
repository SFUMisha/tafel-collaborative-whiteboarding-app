import axios from 'axios'
const baseUrl = 'http://localhost:3002/api/login'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const login = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { 
    login,
    setToken
}