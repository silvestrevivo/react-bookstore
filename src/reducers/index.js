import { RECIEVE_BOOK } from '../actions'

export default function bookList (state = [], action) {
  switch (action.type) {
    case RECIEVE_BOOK:
      return action.payload
    default:
      return state
  }
}
