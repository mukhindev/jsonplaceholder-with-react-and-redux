import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './App.css'

function App ({ counter, onAdd, onSub, onAddNumber }) {
  console.log('App props', counter)
  const [number, setNumber] = React.useState(88)

  return (
    <div className="App">
      <h1>Счётчик: {counter}</h1>
      <input
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <hr />
      <button onClick={onSub}>-</button>
      <button onClick={onAdd}>+</button>
      <button onClick={() => onAddNumber(number)}>Сложить с числом из поля</button>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps (dispatch) {
  console.log('mapDispatchToProps', dispatch)
  return {
    onAdd: () => dispatch({ type: 'ADD' }),
    onSub: () => dispatch({ type: 'SUB' }),
    onAddNumber: (number) => dispatch({ type: 'ADD_NUMBER', payload: number })
  }
}

App.propTypes = {
  counter: PropTypes.number,
  onAdd: PropTypes.func,
  onSub: PropTypes.func,
  onAddNumber: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
