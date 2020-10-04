import { combineReducers } from 'redux'

import counter1 from './reducers/couner1.js'
import counter2 from './reducers/couner2.js'

export default combineReducers({
  counter1,
  counter2
})
