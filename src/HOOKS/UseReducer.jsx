import React, { useReducer } from 'react';



const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num); // вспомогательная функция которая не дает выйти из димпазона 0-255
const step = 50; // шаг

const reducer = (state, { type, payload = step }) => {
  switch (type) {
    case "INCREMENT_R":
      return {
        // в данном типе мы возвращаем весь текущий стейт, но меняем один ключ r
        ...state,
        r: limitRGB(state.r + payload) // добавляем к текущему значению r шаг (50)
      };
    case "DECREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r - payload)
      };
    case "INCREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g + payload)
      };
    case "DECREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g - payload)
      };
    case "INCREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b + payload)
      };
    case "DECREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b - payload)
      };
    default:
      return state; // если ни один из типов не будет найден, то возвжращаем текущий стейт
  }
};

function UseReducer(props) {
    const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });
    // useReducer принимает дава параметра: функцию reducer и состояние по умолчанию (в данном случае объект с цветами)
    // useReducer отдает стейт по умолчанию и dispatch - функция для создания событий

    return (
      <div className="App">
        <h1
          style={{
            color: `rgb(${r}, ${g}, ${b})`
          }}
        >
          Hello CodeSandbox
        </h1>
        <div>
          <span>r </span>
          <button onClick={() => dispatch({ type: "INCREMENT_R", payload: 100 })}>
            +
          </button>
          <button onClick={() => dispatch({ type: "DECREMENT_R" })}>-</button>
        </div>
        <div>
          <span>g </span>
          <button onClick={() => dispatch({ type: "INCREMENT_G" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT_G" })}>-</button>
        </div>
        <div>
          <span>b </span>
          <button onClick={() => dispatch({ type: "INCREMENT_B" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT_B" })}>-</button>
        </div>
      </div>
    );
}

export default UseReducer;