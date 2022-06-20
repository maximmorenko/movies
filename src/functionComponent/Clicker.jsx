import React, {useState, useEffect} from 'react';

function Clicker() {
  // делаем деструктуризцию хука, функциu seState(),  где value - значение, а setValue - функция меняющая это значение
  // const [value, setValue] = useState();
  // пример с кликером:
  const [count, setCount] = useState(0); // передадим значение первого параметра по умолчанию 

  // вызываем хук жизненного цикла с двуме его параметрами
  useEffect(()=>{
    console.log('привет из кликера', count);
    return ()=>{
      console.log('пока из кликера'); //если в колбеке добавить return, и вывести внем что-то. то произойдет размонтирование (didUnmount)
    }
  }, [count]); // добавим в массив зависимостей count. теперь теперь колбек будет выполняться постоянно при изменении count (didUpdate)
  
  return (
    <div>
      <button 
      // в обработчике вызовим функцию setCount() в рараметрах укажем выполняемое действие со значением
        onClick={() => setCount(count + 1)}
        >
          +
      </button>
      <span style={{display: 'inline-block', margin: '0 0.5rem'}}>{count}</span>
      <button 
        onClick={() => setCount(count - 1)}
        >
          -
      </button>
    </div>
  );
}

export default Clicker;