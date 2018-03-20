import { combineReducers } from 'redux'
import bookList from './booklist'
import errorBook from './errorbook'
import singleBook from './singlebook'
import favorites from './favorites'

const rootReducer = combineReducers({
  bookList,
  errorBook,
  singleBook,
  favorites
})

export default rootReducer
