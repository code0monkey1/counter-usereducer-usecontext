import { createContext, useContext, useReducer } from 'react'
const ACTION={
  INCREASE:"INC",
  DECREASE:"DEC",
  ZERO:"ZERO",
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
        return state + 1
    case "DEC":
        return state - 1
    case "ZERO":
        return 0
    default:
        return state
  }
}

const CounterContext = createContext()

export const CounterContextProvider = (props) => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0)

  return (
    <CounterContext.Provider value={[counter, counterDispatch,ACTION] }>
      {props.children}
    </CounterContext.Provider>
  )
}
/* 
As a technical detail, it should be noted that the helper functions useCounterValue and useCounterDispatch are defined as custom hooks, because calling the hook function useContext is possible only from React components or custom hooks. Custom Hooks, on the other hand, are JavaScript functions whose name must start with the string use
*/
export const useCounterValue = () => {
  const counterAndDispatch = useContext(CounterContext)
  return counterAndDispatch[0]
}

export const useCounterDispatch = () => {
  const counterAndDispatch = useContext(CounterContext)
  return counterAndDispatch[1]
}

export const useActionTypes = () => {
  const counterAndDispatch = useContext(CounterContext)
  return counterAndDispatch[2]
}

export default CounterContext