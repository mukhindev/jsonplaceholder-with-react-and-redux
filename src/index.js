import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './redux/rootReducer.js'
import App from './components/App.js'
import './index.css'

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action)
  console.log('Middleware', store.getState())
  return result
}

const store = createStore(rootReducer, applyMiddleware(
  loggerMiddleware,
  reduxThunk
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.app')
)
