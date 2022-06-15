import React, { Component } from 'react';
// есть два подхода к созданию форм:
// с использование управляемого и неуправляемого компонинта
// управляемый это когда мы управляем состоянием, т.е тем что вводит пользователь

class Form extends Component {
    // создадим стейт и в нем будем хранить поля формы
    state = {
        firstName: '',
        email: '',
        textarea: '',
        select: '',
        subscription: false,
        sub: false,
        gander: '',
        range: 50
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
    handleCheckBoxOnChange = (event) => {
        // имя также приходит динамически, а значение будет чекед
        this.setState({[event.target.name]: event.target.checked})
    }


    render() {
        //сделаем деструктуризацию стейта чтобы им удобнее было полльзоваться
        const {firstName, email, textarea, select, subscription, sub, gander, range} = this.state;
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
                <br/>
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
                <br/>
                <textarea 
                // имя атрибут также будет прилетать динамически из ф-ции handleChange
                    name='textarea'
                    placeholder='введите text...'
                    value={textarea}
                    // value будет брать значение из нашего стейта
                    onChange={this.handleChange}
                >{textarea}</textarea>
                <br/>
                <select name='select' value={select} onChange={this.handleChange}>
                {/* имя атрибут также будет прилетать динамически из ф-ции handleChange */}
                    <option disabled value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <br/>
                {/* у чекбокса состояние будет определять чекед, в который будет прилетать фолс или тру из нашего стейта subscription (согласие на подписку)*/}
                <label>
                <input 
                type="checkbox" 
                name="subscription" 
                checked={subscription} 
                // для выбора нужна функция onChange, создадим ее и передадим сюда
                onChange={this.handleCheckBoxOnChange}
                />
                subscription
                </label>
                <br/>
                <label>
                <input 
                type="checkbox" 
                name="sub" 
                checked={sub} 
                // для выбора нужна функция onChange, создадим ее и передадим сюда
                onChange={this.handleCheckBoxOnChange}
                />
                sub
                </label>
                <br/>
                <input 
                type="radio"
                name="gander"
                value="male"
                checked={gander === "male"}
                onChange={this.handleChange}
                />Male
                <input 
                type="radio"
                name="gander"
                value="female"
                checked={gander === "female"}
                onChange={this.handleChange}
                />Female
                <br/>
                <input type="range" name="range" min="0" max="100" step="1"
                onChange={this.handleChange}
                value={range}
                />{range}
            </div>
        );
    }
}

// export default Form;