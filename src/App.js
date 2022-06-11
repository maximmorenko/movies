import React from 'react';
import './App.css';
import Book from './components/Book';
import Preloader from './components/Preloader';

const App = (props) => {
  // приложение принимает пропс состояния загрузки
  return props.isLoading 
  ?
  //каждый элемент условного оператора оборачиваем в круглые скобки
  (<Preloader />)
  :
  (<div>
        <h1>Books</h1>
        <Book name="про Js" year="2312" autor="by Mac" color="red"/>
        <Book name="про React" year="1822" autor="by Mensi" color="green"/>
        {/* для примера условной отрисовки не передадим пропс неим в бук */}
        <Book year="2015" autor="by Man" color="blue"/>
        {/* для примера условной отрисовки не передадим пропс еар в бук */}
        <Book name="про React" autor="by Mensi" color="green"/>
  </div>);
}

export default App;
