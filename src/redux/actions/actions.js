import {
  ADD_1,
  SUB_1,
  ADD_NUMBER_1,
  ADD_2,
  SUB_2,
  ADD_NUMBER_2

} from '../actions/actionTypes.js'

export function add1 () {
  return {
    type: ADD_1
  }
}

export function sub1 () {
  return {
    type: SUB_1
  }
}

export function addNumber1 (number) {
  return {
    type: ADD_NUMBER_1,
    payload: number
  }
}

export function addNumberByTimer () {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addNumber1(50))
    }, 2000)
  }
}

export function add2 () {
  return {
    type: ADD_2
  }
}

export function sub2 () {
  return {
    type: SUB_2
  }
}

export function addNumber2 (number) {
  return {
    type: ADD_NUMBER_2,
    payload: number
  }
}
