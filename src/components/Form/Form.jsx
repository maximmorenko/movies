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
                />
                {/* теперь инпут контролируемый и мы можем взять данные из стейта и прверить их (валидация) */}
                <input 
                    type='email'
                    name='email'
                    placeholder='введите email...'
                    // value будет брать значение из нашего стейта
                    value={email}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Form;