// import { useState } from 'react'

// const Counter = () => {
//     const [count, setCount] = useState(0);
    
//     const Increase=()=>{
//         setCount(count + 1)
//       }
    
//       const Decrease=()=>{
//         {if (count>0) {
          
//           setCount(count - 1) 
//         }}
//       }
    
    
//       const Reset=()=>{
//         setCount(0)
//       }


//   return (
//     <>
//         <h1>{count}</h1>
//         <button className='btn' type='button' onClick={Increase}>Increase</button> 
//         <button className='btn' type='button' onClick={Decrease}>Decrease</button> 
//         <button className='btn' type='button' onClick={Reset}>Reset</button>
//     </>
//   )
// }

// export default Counter;


import React, { useState } from "react";



function Counter (props) {

console.log(props.increment);


  return (
    <>
      <h1>{props.count}</h1>
      <button className='btn' type='button' onClick={props.increment}>Increase</button>

      <button className='btn' type='button' onClick={props.decrement}>Decrease</button>
      <button className='btn' type='button' onClick={props.reset}>Reset</button>
    </>
  )
}
export default Counter;