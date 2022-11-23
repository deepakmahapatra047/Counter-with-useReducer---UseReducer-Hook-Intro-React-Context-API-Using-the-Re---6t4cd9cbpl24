import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';

const initialState = 0;



const App = () => {

  
const [count,dispatch] = useReducer(counterReducer,initialState)
  return (
    <div id="main">

      <div>count :{count}</div>
      <button onClick={()=>dispatch("increment")}>Increment</button>
      <button onClick={()=>dispatch("decrement")}>Decrement</button>
      <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}


export default App;
