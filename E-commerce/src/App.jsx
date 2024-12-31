import { useState,useEffect} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [running,setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
  
    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  
  }, [running]);
  
  const handlestart = () => setRunning(true);
  const handlestop = () => setRunning(false);
  const handlereset = () => {
    setRunning(false); 
    setCount(0);      
  };


  


  return (
   <div className='App'>
    <h1>React Counter App</h1>
    <div className="counter-display">
      <h2>Counter: {count}</h2>

      <button onClick={handlestart} disabled={running}>Start</button>
      <button onClick={handlestop}>Stop </button>
      <button onClick={handlereset}>Reset</button>
    </div>
   </div>
  );
}

export default App
