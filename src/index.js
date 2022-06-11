import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const isLoading = false;// создадим переменную со значение  загрузки, будем его менять вручную, со временем с помощью состоянияю

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // принимаеm в приложение значение (состояние) загрузки через пропс: isLoading={isLoading}
  <React.StrictMode>
    <App isLoading={isLoading}/>
  </React.StrictMode>
);


