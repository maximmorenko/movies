//import React from 'react';

export default function Post(props) {
    //так как пропсы это тоже объект то мы можем сделать деструктуризацию пропсов:
    // const {name, cb} = props; // теперь вместо записи props.cb достаточно написать cb
    // теперь каждый элемент получает еще и третий пропс - функцию cb
    //const {id, cb, name} = props;
    return <h2 >{props.name} <button onClick={() => props.cb(props.id)}>delete</button></h2>
}

