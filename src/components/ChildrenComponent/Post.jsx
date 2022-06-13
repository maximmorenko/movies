//import React from 'react';

export default function Post(props) {
    //так как пропсы это тоже объект то мы можем сделать деструктуризацию пропсов:
    // const {name, cb} = props; // теперь вместо записи props.cb достаточно написать cb
    // теперь каждый элемент получает еще и третий пропс - функцию cb
    return <h2 onClick={props.cb}>{props.name}</h2>
}

