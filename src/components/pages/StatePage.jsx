import React from 'react'
import { useState } from 'react'

const StatePage = () => {
  const [count, setCount] = useState(0)

  const [name, setName] = useState("John Doe")

  return (
    <div>
      <h1>This is StatePage</h1>

      <h2>Count is {count}</h2>
      <button onClick={() => {setCount(count + 1)}}>Increment</button>

      <h2>It's {name}</h2>
      <input 
      value={name}
      onChange={(e) => {setName(e.target.value)}}>
      </input>
    </div>
  )
}

export default StatePage