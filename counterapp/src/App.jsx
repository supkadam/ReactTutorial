import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [counter, setCounter] = useState(10)

  const increaseCounter = () => {
    if(counter < 20){
      setCounter(counter + 1)
    }
  }

  const decreaseCounter = () => {
    if(counter > 10){
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter : {counter}</h2> 
      <button onClick={increaseCounter}>Increase</button><br/><br/>
      <button onClick={decreaseCounter}>Decrease</button>
    </>
  )
}

export default App
