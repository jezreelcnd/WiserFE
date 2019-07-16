//import rootReducer from "./containers/TodoApp/reducers";
import createReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './containers/PostApp/reducers';
//npm install --save-dev redux-devtools-extension

const initialState = {};

const middleware = [thunk];


// Create Store 

export default createStore(createReducer(), initialState, composeWithDevTools(
    applyMiddleware(...middleware)
  ));

  
//export default createStore(createReducer());



