import axios from 'axios'
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export const fetchData = async (payload) => {
  try {
    const response = await axios.get(`${BASE_URL}${payload}`)
    const data = await response.data.items
    return data
  } catch (e) {
    console.log(e)
  }
}
