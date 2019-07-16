import React, { Component } from 'react'
import { Provider } from 'react-redux'

import PostApp from './containers/PostApp/PostApp'
import TodoApp from './containers/TodoApp/TodoApp'
import SignInPage from './containers/SignInPage/SignInPage';
import InternalHomePage from './containers/InternalHomePage/Loadable'

import store from './store'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Route
            exact
            path='/InternalHomePage'
            render={props => (
              <React.Fragment>
                 <InternalHomePage />
              </React.Fragment>
            )}
          />
          <Route
            path='/signin'
            render={props => (
              <React.Fragment>
                <SignInPage />
              </React.Fragment>
            )}
          />
          <Route
            path='/todos'
            render={props => (
              <React.Fragment>
                <TodoApp />
              </React.Fragment>
            )}
          />
          <Route
            path='/posts'
            render={props => (
              <React.Fragment>
                <PostApp />
              </React.Fragment>
            )}
          />
        </React.Fragment>
      </Router>
    </Provider>
  )
}

export default App
