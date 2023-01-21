import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  function upCount() {
    setCount(prevCount => prevCount +1)
  }

  function downCount() {
    setCount(prevCount => prevCount -1)
  }

  return (
    <div className="counter">
        <button onClick={downCount} className="counter--minus">–</button>
        <div className="counter--count">
            <h1>{count}</h1>
        </div>
        <button onClick={upCount} className="counter--plus">+</button>
    </div>
  )
}

export default App
