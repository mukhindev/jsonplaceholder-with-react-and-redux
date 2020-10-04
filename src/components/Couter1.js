import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { add1, sub1, addNumber1, addNumberByTimer } from '../redux/actions/actions.js'
import './Counter.css'

function App ({ counter, onAdd, onSub, onAddNumber, onAsync }) {
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
      <hr />
      <button onClick={onAsync}>+50 c задержкой 2с</button>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    counter: state.counter1.counter
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onAdd: () => dispatch(add1()),
    onSub: () => dispatch(sub1()),
    onAddNumber: (number) => dispatch(addNumber1(number)),
    onAsync: () => dispatch(addNumberByTimer())
  }
}

App.propTypes = {
  counter: PropTypes.number,
  onAdd: PropTypes.func,
  onSub: PropTypes.func,
  onAddNumber: PropTypes.func,
  onAsync: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
