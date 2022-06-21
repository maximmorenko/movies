import React, {useRef, useEffect} from 'react';

function WithRef(props) {
    // создадим переменную и передадим в нее изначально null
    // const inputEl = useRef(null);
    // форимруется объект с единственным ключем current у которого значение null
    // console.log(inputEl);

    // создадим другой реф, с карреттом (0) по умолчанию
    const numRef = useRef(0);
    // создадим функцию которая будет вуеличиват каррент на 1
    const handleClick = () => {
       numRef.current = 1;
    }
    useEffect(()=>{
        console.log(numRef.current);
    })
    // Как видим при клике ничего не происходит, не обновляется значение карента на 1
    // это побочный эффект хука юсРеф, при использовании которого не происходит перерендер

    // устанавливаем этот реф на инпут ref={inputEl}
    return (
        <div>
            {/* <input placeholder='name' ref={inputEl}/> */}
            {/* <button ref={numRef}></button> */}
            <button onClick={handleClick}>{numRef.current}</button>
        </div>
    );
}

export default WithRef;