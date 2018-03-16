export const REQUEST_BOOK = 'REQUEST_BOOK'
export const RECIEVE_BOOK = 'RECIEVE_BOOK'

export function requestBook (term) {
  return {
    type: REQUEST_BOOK,
    payload: term
  }
}

export function recieveBook (request) {
  return {
    type: RECIEVE_BOOK,
    payload: request
  }
}
