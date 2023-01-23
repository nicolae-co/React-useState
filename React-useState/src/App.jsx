import { useState } from 'react'
import './App.css'
import Count from './components/Count'

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
        <Count number={count} />
        <button onClick={upCount} className="counter--plus">+</button>
    </div>
  )
}

export default App
