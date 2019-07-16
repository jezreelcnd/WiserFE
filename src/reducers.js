/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';

import visibilityFilter from "./containers/TodoApp/reducers/visibilityFilter";
import todos from "./containers/TodoApp/reducers/todos";
import postReducer from './containers/PostApp/reducers/postReducer';



/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

export default function createReducer() {
  const rootReducer = combineReducers({
     posts: postReducer, todos, visibilityFilter, 
  });
  return rootReducer;
}


//export default combineReducers({ todos, visibilityFilter });