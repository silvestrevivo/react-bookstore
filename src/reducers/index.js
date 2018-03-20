import { combineReducers } from 'redux'
import bookList from './booklist'
import errorBook from './errorbook'
import singleBook from './singlebook'

const rootReducer = combineReducers({
  bookList,
  errorBook,
  singleBook
})

export default rootReducer
