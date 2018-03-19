import { FAIL_BOOK, ERROR_NETWORK } from '../actions'

export default function (state = '', action) {
  switch (action.type) {
    case FAIL_BOOK:
      return 'error, book not found'
    case ERROR_NETWORK:
      return String(action.payload)
    default:
      return state
  }
}
