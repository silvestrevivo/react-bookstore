import { SINGLE_BOOK } from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case SINGLE_BOOK:
      return action.payload
    default:
      return state
  }
}
