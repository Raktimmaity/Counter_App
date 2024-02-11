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
  if(count == -1){
    setCount(0);
    alert("Counter value can not show below 0")
  }
  return (
    <>
      <h1>Counter App</h1>
      <div className='main'>
        <button onClick={removeValue}> - </button>
        <h2>The Value is: {count}</h2>
        <button onClick={addValue}> + </button>
      </div>
    </>
  )
}

export default App
