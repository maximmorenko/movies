import React from 'react';
// Преобразование компонента в jsx
const Book = (props) => {
    return (<div style={{ border: "2px solid grey"}}>
                <h3 style={{ color: props.color}}>{props.name}</h3>
                <p>{props.year}</p>
                <p>{props.autor}</p>
            </div>
    );
};

export default Book;