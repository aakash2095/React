// import { useState } from 'react'
// import './App.css'
// import Counter from './components/counter';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//      <Counter ></Counter>
//     </>
//   )
// }

// export default App;


import { useState } from 'react';

import './App.css';
import Counter from "./components/counter";

function App() {

  const [count, setCount] = useState(0)
  
    const increment = () => {
      setCount(count + 1)
    }
  
    const decrement = () => {
      {if (count>0)
      setCount(count - 1)
    }
    }
  
    const reset = () => {
      setCount(0)
    }


  return (
  <>
  <Counter count={count} increment={increment} decrement={decrement} reset={reset}/>
  </>
  )
}

export default App;


