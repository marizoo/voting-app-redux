import React from 'react'
import { useSelector } from 'react-redux'
import Counter from './Counter'

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const App = () => {
  const count = useSelector( (state) => state.counter.count )
  const voters = [
    "Brandi",
    "Sheryl",
    "Kate"
  ]

  return (
    <div style={appStyle}>
      <h1>Redux is easeh</h1>
      <h1>The TOTAL vote is: {count}</h1>
      {voters.map( voter => (
        <Counter key={voter.index} name={voter}/>
      ))}
      
    </div>
  )
}

export default App
