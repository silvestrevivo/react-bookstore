import { combineReducers } from 'redux'
import bookList from './booklist'
import errorBook from './errorbook'

const rootReducer = combineReducers({
  bookList,
  errorBook
})

export default rootReducer
