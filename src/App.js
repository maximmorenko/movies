import React from 'react';
//import Clicker from './functionComponent/Clicker';
// import WithRef from './functionComponent/WithRef';
// import TimerHooks from './functionComponent/TimerHooks';
// import UseState from './HOOKS/UseState';
// import UseEffect from './HOOKS/UseEffect';
// import { UseContext } from './HOOKS/UseContext';
// import Books from './functionComponent/Books';
// import UseReducer from './HOOKS/UseReducer';
import TimerReduser from './functionComponent/TimerReduser';


function App() {

// нужно обернуть все приложение в наш кастомный компонент ( UseContext)
  return (
    // <UseContext>
    //   <Books />
    // </UseContext>
    // <UseReducer />
    <TimerReduser />

  );
}

export default App;