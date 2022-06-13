//import React from 'react';
import Post from './Post';

export default function Posts(props) {
    return (
        <div>     
            {
                // спускаем полученый колбек из пропса еще ниже
                props.posts.map(item=>(
                    <Post key={item.id} name={item.name} cb={props.cb}/>
                    ))
            }
        </div>
    );
}

