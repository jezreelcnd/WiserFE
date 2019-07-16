import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './style.css';
import { Provider } from 'react-redux';

import Posts from '../../components/Posts/Posts';
import PostForm from '../../components/Posts/PostForm';

import store from '../../store.js';

class App extends Component {
  componentWillMount() {
    fetch('');
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
