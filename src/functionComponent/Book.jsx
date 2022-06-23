import React, {useContext} from 'react';
//книга принимает название книги и id который будет номером по порядку
import { CustomContext } from '../HOOKS/UseContext';

// используем метод ремув полученый от родителя для удаления при клике на h2
// для метода add нужно создать какую-то форму. в отдельном компоненте
function Book(props) {
    const {removeBook} = useContext(CustomContext);
    return (
        // вызовем нашу функцию ремув при клике, и передаем ей айди полученый из пропсов
        <h2 onClick={()=>{removeBook(props.id)}}>{props.index}. {props.title}</h2>
    );
}

export default Book;