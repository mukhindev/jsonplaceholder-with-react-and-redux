import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer.js'
import App from './components/App.js'
import './index.css'

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  console.log('loggerMiddleware', action, store.getState())
  return result
}

const asyncActionMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}

const store = createStore(rootReducer, applyMiddleware(
  loggerMiddleware,
  asyncActionMiddleware
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app')
)
