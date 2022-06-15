import React, { Component } from 'react';

class Ref extends Component {
    constructor() {
        super()

        // рефы мы не храним в стейте, но им тоже нужен глобальный контекст
        this.cardRef = React.createRef(); //обращаемся к реакту и создаем реф, и вызвваем ф-цию
        // реф это специальный объект, у которого есть свойство каррент, и из этого карента мы можем поулчить ссылку на узел.
        // по умолчанию this.cardRef будет равно null
        // дальше мы должны повесить этот реф на узел, напра див. через артибут ref с помощью свойства каррент передаем значение рефа
        // <div ref={this.cardRef}></div>
        this.emailRef = React.createRef();
    }
    // когда мы работаем с неконтролируемыми полями (импутами) мы на каждое поле вешаем реф, без велью и обработчиков. Обработчик вешаем на кнопку или на форму внутри которого делаем проверки по соответствующим созданым рефам. если все хорошо отправляем форму. и очищаем инпуты.
    // отличие от состояния в том что рефы не приводят к перерендеру, когда мы принудительно обновляем стейт то реакр делает перерендер, происходит событие жизненого цикла что компонент обновился.
    // с рефами этого не происходит, рефы живут в доме, и мы просто считываем оттуда какие-то значения.

    handleSubmit = (event) => {
        event.preventDefault();
        //все проверки будут идти из рефа
        if (this.cardRef.current.value.length < 16) {
            alert('Invalid card number')
        }
        // проверяем имейл
        // send
        // после отправки обновляем, очищаем поля
        this.cardRef.current.value = '';
        this.emailRef.current.value = '';

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    name='card' 
                    placeholder='card...' 
                    //onChange={this.handleChange} 
                    ref={this.cardRef}
                />
                <input 
                    type='email'
                    name='email'
                    placeholder='email...'
                    //onChange={this.handleChange}
                    ref={this.emailRef}
                />
                <button>Send</button>
            </form>
        );
    }
}

export default Ref;