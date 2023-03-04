
import { useCounterValue } from './CounterContext';

function Display() {
  
  const counter=useCounterValue()

  return (
    <div>{counter}</div>
  )
}

export default Display