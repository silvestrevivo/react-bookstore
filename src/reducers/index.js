import { SEARCH_BOOK } from '../actions'

export default function bookList (state = [], action) {
  switch (action.type) {
    case SEARCH_BOOK:
      return action.payload.data.items
    default:
      return state
  }
}
