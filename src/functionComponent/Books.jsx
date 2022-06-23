import React, {useContext} from 'react';
// для того чтобы воспользоваться методами кастомного, родительского пкомпонента
// нужно испосльзовать хук useContext, а также импортировать кастомКонтекст созданый в родительском компоненте
import { CustomContext } from '../HOOKS/UseContext';
import Book from './Book';

function Books(props) {
    // делаем деструктуризацию хука
    const {books =[]} = useContext(CustomContext); // передаем по умолчанию CustomContext и ВСЁ ЧТО ОН СОДЕРЖИТ ( books,addBook,removeBook)
    // console.log(books);
    // возьмем от туда кники и сделаем их массивом (books =[])
    // теперь мы можем вытащить любую сущность которую мы передали в наш провайдер!!!
    return (
        <div className='books'>
            {books.map((item, index)=> {
                // передадим книге все пропсы и возвращаем 
                return <Book key={item.id} {...item} index={index + 1}/>
            } )}
        </div>
    );
}

export default Books;