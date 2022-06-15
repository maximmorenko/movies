import React, { Component } from 'react';

// есть еще одна возможность при работе с формами, это реф. это указатель на какую-то ноду.
// это может бать полезным для работы с формами, например с фокусом.
// рефы пригодятся при работе с неуправляемыми компонентами

class FromWithRef extends Component {
    constructor() {
        super()
        // установим стейт карты
        this.state = {
            card: '', //номер карты
            email: ''
        }
        // рефы мы не храним в стейте, но им тоже нужен глобальный контекст
        this.cardRef = React.createRef(); //обращаемся к реакту и создаем реф, и вызвваем ф-цию
        // реф это специальный объект, у которого есть свойство каррент, и из этого карента мы можем поулчить ссылку на узел.
        // по умолчанию this.cardRef будет равно null
        // дальше мы должны повесить этот реф на узел, напра див. через артибут ref с помощью свойства каррент передаем значение рефа
        // <div ref={this.cardRef}></div>
        this.emailRef = React.createRef();
    }

    //проверим что лежит в рефе после монтирования
    componentDidMount() {
        console.log(this.cardRef)
        // указываем что после монтирования (загрузки страницы) нужно сделать фокус на этом элементе, 
        // обращаемся через current
        this.cardRef.current.focus();
    }

    handleChange = (event) => {
        // сетстейт может принимать функцию, если он принимает ф-цию то вторым параметром будет колбек
        this.setState(()=>({[event.target.name]: event.target.value}), ()=>{
            // мы должны убедиться что карточка цже обновилась и только после этого устроить проверку на символы
            if (this.state.card.length === 16) {
                //если длина символов равна 16 то передаем фокус на следующий реф (на имейл)
                this.emailRef.current.focus();

            }
        })
    }


    render() {
        const {card, email} = this.state;

        return (
            <div>
                <input 
                    type='text' 
                    name='card' 
                    placeholder='введите имя...' 
                    value={card} 
                    onChange={this.handleChange} 
                    ref={this.cardRef}/>
                <input type='email'
                    name='email'
                    placeholder='введите email...'
                    value={email}
                    onChange={this.handleChange}
                    ref={this.emailRef}
                />
            </div>    
            )
        
    }
}

export default FromWithRef;