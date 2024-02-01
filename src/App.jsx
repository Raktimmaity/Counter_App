import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const addValue = ()=>{
    setCount(count + 1);
  }
  const removeValue = ()=>{
    setCount(count - 1);
  }
  return (
    <>
      <h1>Counter App</h1>
      <div className='main'>
        <button onClick={addValue}> + </button>
        <h2>The Value is: {count}</h2>
        <button onClick={removeValue}> - </button>
      </div>
    </>
  )
}

export default App
