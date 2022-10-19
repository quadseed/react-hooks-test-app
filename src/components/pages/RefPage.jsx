import React, { useRef } from 'react'

const RefPage = () => {

  const number = useRef(10)
  const inputEl = useRef(null)

  return (
    <div>
      <h1>This is Ref Page</h1>
      <p>number ref is {number.current}</p>
      <input ref={inputEl} type="text" defaultValue="test" />
      <button onClick={() => {alert(inputEl.current.value)}}>アラート</button>
    </div>
  )
}

export default RefPage