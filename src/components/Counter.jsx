import React, { Component } from 'react';

class Counter extends Component {
    //вар 1. с использованием стрелочной функции которой не нужно указывать контекст

    //state = {count: 0};
    // преобразовуем метод в стрелочную функцию
    // hendleClickIn = () => {
    //     this.setState({count: this.state.count + 1})
    // };
    // hendleClickDe = () => {
    //     this.setState({count: this.state.count - 1})
    // };

    // вар 2. используем конструктор в котором укажем контекст (забиндим)
    constructor () {
        super()
        this.state = {count: 0};

        this.hendleClickIn = this.hendleClickIn.bind(this);
        this.hendleClickDe = this.hendleClickDe.bind(this);
    }
    hendleClickIn() {
        this.setState({count: this.state.count + 1})
    }
    hendleClickDe() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div style={{margin: 'auto', width: '300px'}}>
                {/* вар 3. также состояние можно записать в самом слушателе, вместо функции */}
                {/* <button onClick={() => this.setState({count: this.state.count + 1})}>increment вар 3</button> */}
                <button onClick={this.hendleClickIn}>increment</button>
                <span style={countStyle}>{this.state.count}</span>
                <button onClick={this.hendleClickDe}>decrement</button>
            </div>
        );
    }
}
const countStyle = {
    margin: '0 0.75rem',
    display: 'inline-block'
}

export default Counter;