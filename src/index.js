import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/rootReducer.js'
import App from './components/App.js'
import './index.css'

const loggerMiddleware = ({ getState }) => (next) => (action) => {
  console.log('dispatch ->', action, getState())
  return next(action)
}

const asyncActionMiddleware = ({ dispatch }) => (next) => (action) => {
  if (typeof action === 'function') return action(dispatch)
  else return next(action)
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
