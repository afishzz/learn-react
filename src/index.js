import React from 'react';
import ReactDOM from 'react-dom';
import CommentApp from './CommentApp';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/comments'
import './index.css'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
   <CommentApp /> 
  </Provider>,
  document.getElementById('root')
);