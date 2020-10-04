const initialState = {
  counter: 100
}

export default function counter1 (state = initialState, action) {
  switch (action.type) {
    case 'ADD_1':
      return { counter: state.counter + 1 }
    case 'SUB_1':
      return { counter: state.counter - 1 }
    case 'ADD_NUMBER_1':
      return { counter: state.counter + action.payload }
    default:
      return state
  }
}
