import React, {useEffect, useReducer} from 'react';

// напишем проверки редьюсера
// редьюсер принимает состояние и действие
// а возвращаем измененное состояние
const countReduser = (state, { type }) => {
    // действия (action) обработаем ифами, можно свичем.
    // сразу сделаем деструктуризацию action, и заменим в параметрах, на тип действия. {type} = action
    // обработаем четыре возможных действия start stop reset tick
    if (type === 'start') {
        return {
            // в зависимости от типа действия меням значения ключей count и isCounting
            // count не трогаем, разворачиваем как есть ...state
            // isCounting меняем на тру
            ...state,
            isCounting: true
        }
    }
    if (type === 'stop') {
        return {
            // в зависимости от типа действия меням значения ключей count и isCounting
            // count не трогаем, разворачиваем как есть ...state
            // isCounting меняем на false
            ...state,
            isCounting: false
        } 
    }
    if (type === 'reset') {
        return {
            // в зависимости от типа действия меням значения ключей count и isCounting
            // isCounting не трогаем, разворачиваем как есть ...state
            // count меняем на 0
            // стейт всегда разворачиваем вначале
            ...state,
            count: 0
        } 
    }
    if (type === 'tick') {
        return {
            // в зависимости от типа действия меням значения ключей count и isCounting
            // isCounting не трогаем, разворачиваем как есть ...state
            // если часики тикают (действие с типом 'tick') то берем текущее значение каунта state.count и добавляем 1
            // стейт всегда разворачиваем вначале
            ...state,
            count: state.count + 1
        } 
    }
    return state; // возвращаем текущий стейт если action не пришел
}

//функцию локалсоридж вынесем отдельно
function setDefaultValue() {
    const userCount = localStorage.getItem('count')
    // делаем проверку. возвращаем элемент из локала если он там есть, если нет то ноль.
    // +userCount перевод строки в цифру
    return userCount ? +userCount : 0;
}

export default function TimerReduser() {
    // сделаем деструктуризацию хука useReducer и передадим в него наш редьюсер countReduser и зададим значения стейта по умолчанию
    // каутну передадим значение из локала, как результат функции setDefaultValue()
    // а isCounting утановим на фолс
    // dispatch - диспечер по вызову событий
    const [{count, isCounting}, dispatch] = useReducer(countReduser, {count: setDefaultValue(), isCounting: false});

    // этот useEffect будет записывать значение в локалсторидж, зависимостью будет текущее значени count
    useEffect(() => {
        // записывам значение count из count
        localStorage.setItem('count', count) 
    }, [count])

    // этот useEffect будет заниматься подсчетом. зависимостью будет текущее значени isCounting
    useEffect(() => {
        // така как калькуляция интервалов находится в одном юзЭффекте, по этому мы можем её делать здесь, изолированно, никак не связывать в рефами
        // установим таймер ид на ноль
        let timerId = null;
        // устроим проверку. если счет идет isCounting то вызываем через dispatch событие tick
        // с помощью функции сетинтервал, которая в свою очередь берет предыдущее значени count
        if (isCounting) {
            timerId = setInterval(()=>{
                dispatch({type: 'tick'});
            }, 1000)
        }
        // размонтируем если значени isCounting изменилось
        return () => {
            // (true && выражение) всегда возвращает выражение, а (false && выражение) всегда возвращает false
            // очищаем интервал если  timerId = true
            timerId && clearInterval(timerId);
            // и обнуляем timerId
            timerId = null;
        }
    }, [isCounting])

        return (
            <div style={{margin: 'auto', width: '300px'}}>
                <h1 style={countStyle}>React Timer</h1>
                <h3 style={countStyle}>{count}</h3>
                <div style={countStyle}>
                {!isCounting ? (
                    <button style={buttonStyle} onClick={() => dispatch({type: 'start'})}>Start</button>
                ) : (
                    <button style={buttonStyle} onClick={() => dispatch({type: 'stop'})}>Stop</button>
                )}
                <button style={buttonStyle} onClick={() => dispatch({type: 'reset'})}>Reset</button>
                </div>
            </div>
        );
    
}

const buttonStyle = {
    textAlign: 'center',
}
const countStyle = {
    display: 'block',
    textAlign: 'center',
    margin: '0.75rem 0.75rem',
}