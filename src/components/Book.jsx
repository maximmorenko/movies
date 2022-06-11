import React from 'react';
// Преобразование компонента в jsx
const Book = (props) => {
    // условная отрисовка
    if (!props.name) {
        // если пропс нэим пришел пустым, то ничего не отрисовываем возвращаем null
        // return null
        // если пропс нэим пришел пустым, то фон блока красим в розовый
        return (
            <div style={{ border: "5px solid red", backgroundColor: "pink"}}>
            <h3 style={{ color: props.color}}>{props.name}</h3>
            <p>{props.year}</p>
            <p>{props.autor}</p>
            </div>       
        )
    } else if (!props.year) {
        // если пропс еар пришел пустым, то фон блока красим в серый 
        return (
            <div style={{ border: "5px solid green", backgroundColor: "lightGreen"}}>
            <h3 style={{ color: props.color}}>{props.name}</h3>
            <p>{props.year}</p>
            <p>{props.autor}</p>
            </div>       
        )
    }
    return (
        <div style={{ border: "2px solid grey"}}>
            <h3 style={{ color: props.color}}>{props.name}</h3>
            <p>{props.year}</p>
            <p>{props.autor}</p>
        </div>
    );
};

export default Book;