import React, { Component } from 'react';
// есть два подхода к созданию форм:
// с использование управляемого и неуправляемого компонинта
// управляемый это когда мы управляем состоянием, т.е тем что вводит пользователь

class Form extends Component {
    // создадим стейт и в нем будем хранить поля формы
    state = {
        firstName: '',
        email: ''
    }
    // чтобы связать инпут со стейтом нужен какой-то обработчик onChange который каждый раз будет обновлять
    // перезаписывать стейт
    // handleChange -управляй изменениями

    handleChange = (event) => {
        // на входе получаем event (событие) и из его таргета получаем значение. 
        // и записываем все в стейт через сетСтейт
        // для того чтобы не создавать обработчики каждому инпуту 
        // мы можем имя атрибута сделать динамическим: 
        // [event.target.name] строка будет прилетать динамически, по указаному имени
        this.setState({[event.target.name]: event.target.value})
    }
    // валидация формы на момент когда поле больше не активно
    // создадим метод валидейтНеим
    validateName = () => {
        // будем проверять firstName на количество символов
        if (this.state.firstName.length < 5) {
            alert('Your first name can\'t be less then 5 letters' )
        }
    }
    // повесим эту проверку на обработчик события on blur
    // Событие blur вызывается когда элемент теряет фокус
    validateEmail = () => {
        console.log(this.state.email, /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email));
        if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
            alert('Email is not valid')
        }
    }


    render() {
        //сделаем деструктуризацию стейта чтобы им удобнее было полльзоваться
        const {firstName, email} = this.state;
        return (
            <div>
                <input 
                    type='text'
                    name='firstName'
                    placeholder='введите имя...'
                    // value будет брать значение из нашего стейта
                    value={firstName}
                    onChange={this.handleChange}
                    onBlur={this.validateName}
                />
                {/* теперь инпут контролируемый и мы можем взять данные из стейта и прверить их (валидация) */}
                <input 
                    type='email'
                    name='email'
                    placeholder='введите email...'
                    // value будет брать значение из нашего стейта
                    value={email}
                    onChange={this.handleChange}
                    onBlur={this.validateEmail}
                />
            </div>
        );
    }
}

export default Form;