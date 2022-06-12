import React, { Component } from 'react';
// нужно распечатать имена постов
// при печати важно добавлять уникальные ключи (либо id, либо строковые, НЕ индекс)
class WorkingWithArray extends Component {
    state = {
        // posts: [
        //     {id: 'qwe', name: 'Jora'},
        //     {id: 'qwer', name: 'Dora'},
        //     {id: 'qwert', name: 'Mora'}
        // ]
        posts: []
    }
    componentDidMount() {
        // получаем массив с сервера и записываем его в сетстейт, и по том ддостаем из него нужную инфо
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data}))
    }

    render() {
        return (
            <div>
                {/* пробежимся по массиву мапом, достанем нужную инфо и поместим в h2,
                добавим уник. ключ по id, и порядковый номер с использованием индекса+1 чтобы не с 0 отсчет */}
                {this.state.posts.map((item, index) => <h2 key={item.id}>{index+1}. {item.title}</h2>)}
            </div>
        );
    }
}

export default WorkingWithArray;