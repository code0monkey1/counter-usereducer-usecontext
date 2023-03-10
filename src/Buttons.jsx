import React from 'react';
import { ACTION, useCounterDispatch } from './CounterContext';
const  Buttons =() =>{
    
  const counterDispatch = useCounterDispatch();

   
  return (
    <div> 
      <button onClick={() => counterDispatch({ type: ACTION.INCREASE})}>+</button>
        <button onClick={() => counterDispatch({ type: ACTION.DECREASE})}>-</button>
        <button onClick={() => counterDispatch({ type: ACTION.ZERO})}>0</button>
    </div>
  )
}

export default Buttons