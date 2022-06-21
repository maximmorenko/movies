import React, {useState, useEffect, useRef} from 'react';

//функцию локалсоридж вынесем отдельно
function setDefaultValue() {
    const userCount = localStorage.getItem('count')
    // делаем проверку. возвращаем элемент из локала если он там есть, если нет то ноль.
    // +userCount перевод строки в цифру
    return userCount ? +userCount : 0;
}

export default function TimerHooks() {
    // создадим состояние каунту и по умолчанию передадим ему значение из функции локалсторидж, он будет либо ноль либо числом из локала.
    const [count, setCount] = useState(setDefaultValue());
    // создадим состояние процесса счета, по увмолчанию установим false
    const [isCounting, setIsCount] = useState(false);
    // создадим реф, с карентом по умолчанию null
    const timerIdRef = useRef(null);

    // создадим функцию старта, которая будет менять значение состояния isCounting на false
    const handleStart = () => {
        setIsCount(true);
    }

    // создадим функцию остановки которая будет менять значение состояния isCounting на true
    const handleStop = () => {
        setIsCount(false);
    }
    // создадим функцию очистки счетчика, которая будет изменять состояние count на 0, и останавливать счетчик
    const handleReset = () => {
        setCount(0);
        setIsCount(false);
    }

    // интервалом будет управлять useEffect и его жизненые циклы
    // этот useEffect будет записывать значение в локалсторидж, зависимостью будет текущее значени count
    useEffect(() => {
        // записывам значение count из count
        localStorage.setItem('count', count) 
    }, [count])

    // этот useEffect будет заниматься подсчетом. зависимостью будет текущее значени isCounting
    useEffect(() => {
        // монтируем
        // устроим проверку. если счет идет isCounting то текущее значение каррента у рефа timerIdRef увеличиваем на 1 каждую секунду
        // с помощью функции сетинтервал. которая в свою очередь берет предыдущее значени count и увеличивает его на 1
        if (isCounting) {
            timerIdRef.current = setInterval(()=>{setCount((prevCount) => prevCount + 1);}, 1000)
        }

        // размонтируем если значени isCounting изменилось
        return () => {
            // (true && выражение) всегда возвращает выражение, а (false && выражение) всегда возвращает false
            // очищаем интервал если  timerIdRef.current = true
            timerIdRef.current && clearInterval(timerIdRef.current);
            // и обнуляем каррент
            timerIdRef.current = null;
        }
    }, [isCounting])

        return (
            <div style={{margin: 'auto', width: '300px'}}>
                <h1 style={countStyle}>React Timer</h1>
                <h3 style={countStyle}>{count}</h3>
                <div style={countStyle}>
                {!isCounting ? (
                    <button style={buttonStyle} onClick={handleStart}>Start</button>
                ) : (
                    <button style={buttonStyle} onClick={handleStop}>Stop</button>
                )}
                <button style={buttonStyle} onClick={handleReset}>Reset</button>
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