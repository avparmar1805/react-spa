import { combineReducers } from 'redux';
import { bookReducer, booksReducer } from './bookReducers'

export default combineReducers({
  books: booksReducer,
  book: bookReducer
});
