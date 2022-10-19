import React, { useReducer } from 'react'

const reducer = (countState, action) => {
  switch (action) {
    case 'increment':
      return countState + 1

    case 'decrement':
      return countState - 1

    case 'reset':
      return 0

    case 'random':
      return Math.floor(Math.random() * (30 - 1)) + 1

    default:
      return countState
  }
}

const ReducerPage = () => {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h1>This is ReducerPage</h1>
      <h3>Count is {count}</h3>

      <button onClick={() => {dispatch('increment')}}>インクリメント</button>
      <button onClick={() => {dispatch('reset')}}>リセット</button>
      <button onClick={() => {dispatch('random')}}>ランダム</button>
      <button onClick={() => {dispatch('decrement')}}>デクリメント</button>
    </div>
  )
}

export default ReducerPage