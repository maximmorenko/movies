import React, {useState} from 'react';
//import Clicker from './functionComponent/Clicker';
// import WithRef from './functionComponent/WithRef';
// import TimerHooks from './functionComponent/TimerHooks';
// import UseState from './HOOKS/UseState';
import UseEffect from './HOOKS/UseEffect';



function App() {
// сделаем кнопку, которая будет показывать и прятать кликер
// создадим состояние, по умолчанию кликер выкл.
// const [isClicker, setClicker] = useState(false)

  return (
    <div>
      {/* в обработчике поменяем состояние isClicker на true*/}
      {/* <button onClick={()=>setClicker(!isClicker)}>switchClicker</button> */}
      {/* true && выражение всегда возвращает выражение, а false && выражение всегда возвращает false */}
      {/* {isClicker && <Clicker/>} */}
      {/* <WithRef/> */}
      {/* <TimerHooks /> */}
      <UseEffect/>
    </div>
  );
}

export default App;