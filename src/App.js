
import Buttons from './Buttons';

import { CounterContextProvider } from './CounterContext';
import Display from './Display';

const App = () => {
  

  return (

    <div style={{margin:"1rem"}}>
      <CounterContextProvider>
        <Display/>
        <Buttons/>
      </CounterContextProvider>
    </div>
  )
}

export default App