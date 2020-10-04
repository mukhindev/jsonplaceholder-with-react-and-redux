import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Counter.css'

function App ({ counter, onAdd, onSub, onAddNumber }) {
  console.log('<Counter1>', counter)
  const [number, setNumber] = React.useState(0)

  return (
    <div className="Counter">
      <h1>Счётчик 1: {counter}</h1>
      <hr />
      <button onClick={onSub}>-</button>
      <button onClick={onAdd}>+</button>
      <hr />
      <input
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
        size={5}
      />
      <button onClick={() => onAddNumber(number)}>+ число из поля</button>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    counter: state.counter1.counter
  }
}

function mapDispatchToProps (dispatch) {
  console.log('mapDispatchToProps', dispatch)
  return {
    onAdd: () => dispatch({ type: 'ADD_1' }),
    onSub: () => dispatch({ type: 'SUB_1' }),
    onAddNumber: (number) => dispatch({ type: 'ADD_NUMBER_1', payload: number })
  }
}

App.propTypes = {
  counter: PropTypes.number,
  onAdd: PropTypes.func,
  onSub: PropTypes.func,
  onAddNumber: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
