
import { useState } from 'react'
import './App.css'
import Demo from './component/Demo'
import Props from './component/Props'   // ✅ import

/* function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <Demo />

      <Props name="Mahak" age={20} />
      <Props name="Rahul" age={22} />
    </>
  )
} 


export default App */

function UseState() {
const[color,setColor]=useState('red');

const mouseover=()=>{
      setColor(color=='red'? 'blue':'red');
}
const[count,setCount]=useState(0);

//increment, decrement and reset
const increment=()=>{
  setCount(count+1);
}

const decrement=()=>{
  setCount(count-1);
}
const reset=()=>{
  setCount(0)
}
  return (
    <>
    <h1>Use State Hooks</h1>
    <p style={{color:color}} onMouseOver={mouseover}>The useState hook is a built-in React function that allows functional components to store and update dynamic data, known as state.
       When a state variable is updated, React automatically re-renders the component to reflect the changes in the UI.</p>
       <div style={{backgroundColor:"blueviolet"}}>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
       </div>
    </>
  )
}
export default UseState;

