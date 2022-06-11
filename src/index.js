import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const isLoading = true;// создадим переменную со значение  загрузки, будем его менять вручную, со временем с помощью состоянияю

const root = document.getElementById('root'); // ищем элемент куда будем рендерить
// у рендера два параметра (что и куда)
ReactDOM.render(
    // принимаев в приложение значение (состояние) загрузки через пропс: isLoading={isLoading}
    <App isLoading={isLoading}/>,
    root
);


