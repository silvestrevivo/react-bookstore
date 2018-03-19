import axios from 'axios'
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export const fetchData = async (payload) => {
  const response = await axios.get(`${BASE_URL}${payload}`)
  return response.data.items
}
