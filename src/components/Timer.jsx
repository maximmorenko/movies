import React from 'react';

export default class Timer extends React.Component {
    constructor () {
        super()
        this.state = {
            count: 0,
            isCounting: false,
        };
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    
    handleStart() {
        this.timerID = setInterval(() => {
            this.setState({count: this.state.count + 1})
        }, 10)
        this.setState({isCounting: true})
    }
    handleStop() {
        clearInterval(this.timerID)
        this.setState({isCounting: false})
    }
    handleReset() {
        clearInterval(this.timerID) // останавливаем счетчик
        this.setState({count: 0}) // обуляем счетчик
        this.setState({isCounting: false}) // меняем состояние счетчика для смены кнопки стоп на старт
    }
    // чтобы значение count при перезагрузке страницы не менялось воспользуемся componentDidMount
    // для этого нужно вытащить значение count из локалсторидж
    componentDidMount() {
        // создадим переменную и запишем в нее полученное значение из локалсторидж если оно есть
        const userCount = localStorage.getItem('timer')
        // когда мы нажимаем стоп, то последнее значение будет храниться в локалсторидж
        // если такое значение есть то присвоим его state.count
        if (userCount) {
            this.setState({count: +userCount})
        }
        // после обновления страницы последнее значение остается, но оно становится строкой и при новом старте будет происходить конкатенация. чтобы этого избежать, переведем значение в цифру с помощью бинарного плюса +userCount
    }
    // каждый раз когда мы вызываем какой-то из сетстейтов, у нас обрабатывается компонентДидАпдейт
    // это то место, где мы можем обратиться к пользовательскому локалсторидж и что-то туда отправить
    componentDidUpdate() {
        // указываем локалсторидж установить значение и ключ ('timer'- ключ, this.state.count - значение)
        localStorage.setItem('timer', this.state.count)
    }

    componentWillUnmount() {}

    render() {
        return (
            <div style={{margin: 'auto', width: '300px'}}>
                <h1 style={countStyle}>React Timer</h1>
                <h3 style={countStyle}>{this.state.count}</h3>
                <div style={countStyle}>
                {!this.state.isCounting ? (
                    <button style={buttonStyle} onClick={this.handleStart}>Start</button>
                ) : (
                    <button style={buttonStyle} onClick={this.handleStop}>Stop</button>
                )}
                <button style={buttonStyle} onClick={this.handleReset}>Reset</button>
                </div>
            </div>
        );
    }
}

const buttonStyle = {
    textAlign: 'center',
}
const countStyle = {
    display: 'block',
    textAlign: 'center',
    margin: '0.75rem 0.75rem',
}
