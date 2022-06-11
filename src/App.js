import React from 'react';
import './App.css';
import Book from './components/Book';

function App() {
  return (
    <div>
        <h1>Books</h1>
        <Book name="про Js" year="2312" autor="by Mac" color="red"/>
        <Book name="про React" year="1822" autor="by Mensi" color="green"/>
        <Book name="про HTML" year="2015" autor="by Man" color="blue"/>
    </div>
  );
}

export default App;
