import { ADD_2, SUB_2, ADD_NUMBER_2 } from '../actions/actionTypes.js'

const initialState = {
  counter: 66
}

export default function counter2 (state = initialState, action) {
  switch (action.type) {
    case ADD_2:
      return { counter: state.counter + 1 }
    case SUB_2:
      return { counter: state.counter - 1 }
    case ADD_NUMBER_2:
      return { counter: state.counter + action.payload }
    default:
      return state
  }
}
