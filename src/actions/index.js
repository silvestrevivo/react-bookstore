import axios from 'axios'
export const SEARCH_BOOK = 'SEARCH_BOOK'

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export function searchBook (term) {
  const request = axios.get(`${BASE_URL}${term}`)

  return {
    type: SEARCH_BOOK,
    payload: request
  }
}
