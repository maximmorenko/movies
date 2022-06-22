import React, {useState, useEffect} from 'react';

function UseState(props) {
    // const [value, setValue] = useState()
    //1. в useState() обычно мы либо записываем либо передаем в круглые скобки какое-то значение по умолчанию
    //2. также рассматривали вариант когда передавали туда функцию useState((preValue) => {return preValue + 1}), 
    //   которая брала значени, выполняла с ним действие и возвращала новое значение.
    //3. useState позволяет задать значение по умолчанию в виде функции колбек и выполнить ее внутри себя:
    // const [value, setValue] = useState(() => {
    //     const userCount = localStorage.getItem('count');
    //     return +userCount || 0;
    //     // вернет либо последнее значение из локала (переведенной в число) либо 0
    //  })

     //4. попробуем сделать аналог классового компонента:
    const [state, setState] = useState({
        count: 0,
        isCounting: false
    })
    // вопрос как этим управлять?
    // чтобы проверить как это работает будем печатать оба ключа через жизненый цикл (useEffect)
    // внутри юзеффекта будем вызывать консольлог когда у нас будет новый стейт

    // функция меняющая count и состояние объекте
    const handleCount = () => {
        setState({
            // если развернуть в объект все остальные стейты то мы их все увидим, н меняться все равно будет один
            ...state, 
            count: state.count + 1
        });
        // setState({isCounting: !state.isCounting})
    }

    useEffect(()=>{
        console.log(state);
    }, [state])

    return (
        <div>
            {/* в первой кнопке будем менять наш count */}
            <button onClick={handleCount}>click</button>
        </div>
    );
    // как видим при клике меняется только один ключ в стейте, последний.
    // по этому для каждого ключа нужно заводить свой собственный стейт
}

export default UseState;