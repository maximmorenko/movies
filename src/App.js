import React, { Component } from 'react';
import './App.css';
// import Book from './components/Book';
// import Preloader from './components/Preloader';
// import Counter from './components/Counter';
// import LifeCycle from './components/LifeCycle';
// import Timer from './components/Timer';
// import WorkingWithArray from './components/WorkingWithArray';
import Posts from './components/ChildrenComponent/Posts';

class App extends Component {
  state = {
    posts: [
        {id: 'qwe', name: 'Jora'},
        {id: 'qwer', name: 'Dora'},
        {id: 'qwert', name: 'Mora'}
    ]
  };
  // создадим функциию (метод класса) не верхнем уровне, и передадим ее на нижний к постам и там вызовем при нажатии на пост. передавать ее будем по лесенке, сразу в список постов, а потом в посты.
  // hendleSomething = () => {
  //   console.log('клик на пост')
  // }
  removePost = (id) => {
    this.setState(
      {posts: this.state.posts.filter(item => item.id !== id)})
  }

  render() {
    // также мы можем делать деструктуризацию, например state.posts можно записать как:
    // const {posts} = this.state // и дальше использовать переменную posts вместо this.state.posts
    return (
      <div>
       {/* передаем массив постов */}
        {/* теперь имеем базовый компонент арр, у него дочерний posts, а у posts дочерние post */}
        {/* передаем наш колбек на нижний уровень cb - callback */}
        <Posts posts={this.state.posts} cb={this.removePost}/>
      </div>
    );
  }
}

export default App;
