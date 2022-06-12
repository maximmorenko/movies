import React, { Component } from 'react';
// существует три ОСНОВНЫХ события жизненого цикла:

//1. componentDidMount() - событие монтирования
//2. componentDidUpdate() - событие обновления
//3. componentWillUnmount() - событие размонтирования

// 1 componentDidMount срабатывает ОДИН раз

// 2 componentDidUpdate срабытывает каждый раз при каком-либо изменении. 

// 3 componentWillUnmount срабытывает каждый раз когда удаляется компонентr
class LifeCycle extends Component {
    constructor () {
        super()
        this.state = {
            //в начальном состоянии заведем посты
            posts: [],
            loading: true,
            comments: []
        }
    }
    componentDidMount() {
        console.log('componentDidMount')
        // запрашиваем посты через фетч
        // фетч вернет ответ респонс в виде объекта json
        // в следущем then из json получим нужные нам данные и меняем состояние загрузки loading
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data, loading: false}))
        // полученые данные отправляем в свой стейт
        // console.log('componentDidMount')

        //заведем счетчик который будет запрашивать комментарии каждые 2 секунды
        this.timerID = setInterval(() => {
            fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => this.setState({comments: data, loading: false}))
        }, 2000)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
        // когда мы хотим размонтировать приложение мы должны сделать отмену этого таймера
        clearInterval(this.timerID)
    }
    render() {
    return (
        <div>
            {/* проверяем состояние loading, если true то выводим текст: идет загрузка, если false то отрисовываем посты (желательно через компонент с постами). а пока просто выведем их количество */}
            {this.state.loading 
            ? 
            <h3>Идет загрузка...</h3> 
            : 
            <h3>Всего было загружено: {this.state.posts.length} постов</h3>
            }
        </div>
    );
        }
};

export default LifeCycle;