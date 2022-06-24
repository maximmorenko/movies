import React, {useState, useCallback} from 'react';
// хук возвращает нам мемоизированную функцию, не вызывает ее, только возвращает, и возвращает каждый раз при изменении ее параметров
// принимает колбек и массив зависимостей


const CountButton = React.memo(({ onClick, count }) => {
    console.log("render", count);
    return <button onClick={onClick}>{count}</button>;
  });
  
  function UseCallback() {
    const [count1, setCount1] = useState(0);
    const increment1 = useCallback(() => setCount1((c) => c + 1), []);
  
    const [count2, setCount2] = useState(0);
    const increment2 = useCallback(() => setCount2((c) => c + 1), []);
  
    return (
      <>
        <CountButton count={count1} onClick={increment1} />
        <CountButton count={count2} onClick={increment2} />
      </>
    );
  }
  export default UseCallback;