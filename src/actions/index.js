export const REQUEST_BOOK = 'REQUEST_BOOK'
export const RECIEVE_BOOK = 'RECIEVE_BOOK'
export const FAIL_BOOK = 'FAIL_BOOK'
export const ERROR_NETWORK = 'ERROR_NETWORK'

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

export function failBook () {
  return {
    type: FAIL_BOOK
  }
}

export function errorNetwork (message) {
  return {
    type: ERROR_NETWORK,
    payload: message
  }
}
