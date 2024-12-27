import { useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0)
  
  const Increase=()=>{
    setCount(count + 1)
  }

  const Decrease=()=>{
    {if (count>0) {
      
      setCount(count - 1) 
    }}
  }


  const Reset=()=>{
    setCount(0)
  }

  return (
    <>
     <h1>{count}</h1>
     
     <button className='btn' type='button' onClick={Increase}>Increase</button> 
     <button className='btn' type='button' onClick={Decrease}>Decrease</button> 
     <button className='btn' type='button' onClick={Reset}>Reset</button> 

    </>
  )
}

export default App
