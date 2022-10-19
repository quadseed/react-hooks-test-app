import React, { useState, useEffect } from 'react'

export const EffectPage = () => {

  const [name, setName] = useState("John Doe")
  const [code, setCode] = useState(0)
  useEffect(() => {
    document.title = `私は${name}です`
    console.log("aaa")
  }, [name])

  return (
    <div>
      <h1>This is EffectPage</h1>
      <input 
      value={name}
      onChange={(e) => {setName(e.target.value)}}>
      </input>

      <input 
      value={code}
      onChange={(e) => {setCode(e.target.value)}}>
      </input>
    </div>
  )
}
