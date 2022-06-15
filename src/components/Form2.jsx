import React from 'react';

// don't change the Component name "App"
export default class Form2 extends React.Component {
  constructor() {
    super()
      this.state = {
        email: '',
        isAgreeWithTerms: false,
    };
  }
  handleChangeEmail = (event) => {
    this.setState({email: event.target.value})
  }
  handleChangeCheckBox = (event) => {
    this.setState({isAgreeWithTerms: event.target.value})
}
handleSubmit = (event) => {
    // функция будет проверять, валидный ли емейл и отмечен ли чекбокс
    // для это создадим две переменные
    // в проверку емейла добавим регулярное выражение на проверку, в конце тест и проверку регистра 
    // .test(this.state.email.toLocaleLowerCase())
    const isValidEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email.toLocaleLowerCase());
    const isValidCheckBox = this.state.isAgreeWithTerms;
    if(!isValidEmail) {
        // если емеил не валидный (!isValidEmail) выводим алерт
        alert('Email is not valid')
        return //заветшаем работу функции
    }
    if (!isValidCheckBox) {
        // проверяем заполнен ли чекбокс, если нет выовдим алерт
        alert('You should accept all terms and conditions')
        return //заветшаем работу функции
    }
    // если все хорошо, то обновляем наш стейт, очищаем значения и выовдим алерт об ботправке
    this.setState({ 
        email: '',
        isAgreeWithTerms: false
    })
    // так как это муляж, то выводим просто алерт об успешном завершении, в реале отправили бы на сервер, получили бы ответ.
    alert('Thenk you for subscription!')
}
  
  render() {
    // TODO: implement component
    const { email, isAgreeWithTerms } = this.state;

        return (
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.handleChangeEmail}
                />
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="isAgreeWithTerms"
                        checked={isAgreeWithTerms}
                        onChange={this.handleChangeCheckBox}
                    />
                    I agree with terms and conditions
                </label>
                <br />
                <button onClick={this.handleSubmit}>Send</button>
            </div>
        );
  }
}
