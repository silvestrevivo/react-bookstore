import { ADD_FAVORITES, REMOVE_FAVORITES } from '../actions'

export default function (state = [], action) {
  switch (action.type) {
    case ADD_FAVORITES:
      return [...state, action.payload]
    case REMOVE_FAVORITES:
      return state.filter(item => item.id !== action.payload)
    default:
      return state
  }
}
