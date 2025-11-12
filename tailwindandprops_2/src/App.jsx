import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Card2 from './components/Card2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center flex-col flex-wrap p-50 gap-4'>
        <h1 className='bg-green-400 text-black p-4 rounded-md font-semibold'>Tailwind CSS</h1>
        <Card place ='Turkey' year = '2026'/>
        <Card2 place ='Berlin' year = '2028'/>
      </div>
       
    </>
  )
}

export default App
