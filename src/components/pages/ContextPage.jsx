import React, { createContext, useState } from 'react'
import ContextA from './context/ContextA'

export const PlayerContext = createContext()
export const ItemContext = createContext()

const ContextPage = () => {

  // eslint-disable-next-line
  const [player, setPlayer] = useState({
    name: '村人A',
    age: 18,
    level: 98
  })

  // eslint-disable-next-line
  const [item, setItem] = useState({
    weapon: '量子駆動型マンホール',
    armor: 'デバック用汎用型アーマー'
  })


  return (
    <div>
      <h1>This is ContextPage</h1>
      <PlayerContext.Provider value={player}>
        <ItemContext.Provider value={item}>
          <ContextA />
        </ItemContext.Provider>
      </PlayerContext.Provider>
    </div>
  )
}

export default ContextPage