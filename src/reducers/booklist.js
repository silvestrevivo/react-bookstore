import { RECIEVE_BOOK, FAIL_BOOK } from '../actions'

export default function (state = [], action) {
  switch (action.type) {
    case RECIEVE_BOOK:
      return action.payload
    case FAIL_BOOK:
      return []
    default:
      return state
  }
}
