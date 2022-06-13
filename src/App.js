import React, { Component } from 'react';
import './App.css';
// import Book from './components/Book';
// import Preloader from './components/Preloader';
// import Counter from './components/Counter';
// import LifeCycle from './components/LifeCycle';
// import Timer from './components/Timer';
// import WorkingWithArray from './components/WorkingWithArray';
// import Posts from './components/ChildrenComponent/Posts';
import Form from './components/Form/Form';

class App extends Component {
  render() {
    // также мы можем делать деструктуризацию, например state.posts можно записать как:
    // const {posts} = this.state // и дальше использовать переменную posts вместо this.state.posts
    return (
      <div>
       <Form />
      </div>
    );
  }
}

export default App;
