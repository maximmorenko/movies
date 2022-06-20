import React, {useState} from 'react';

function Clicker() {
  // делаем деструктуризцию хука, функциu seState(),  где value - значение, а setValue - функция меняющая это значение
  // const [value, setValue] = useState();
  // пример с кликером:
  const [count, setCount] = useState(0); // передадим значение первого параметра по умолчанию 
  
  return (
    <div>
      <button 
      // в обработчике вызовим функцию setCount() в рараметрах укажем выполняемое действие со значением
        onClick={() => setCount(count + 1)}
        >increment
      </button>
      {count}
      <button 
        onClick={() => setCount(count - 1)}
        >decrement
      </button>
    </div>
  );
}

export default Clicker;