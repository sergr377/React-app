import React from 'react';
import s from './Posts.module.css';

const Posts = (props) => {
    return (
        <div className={`${s.posts} ${s.item}`}>
            <div className={s.avatar}><img  src='https://i.imgur.com/OO5Iit8.jpg'></img></div>
            <div className={s.message}>{props.message}</div>
            <div className={s.likes}><img src='https://openclipart.org/image/2400px/svg_to_png/183092/1378418749.png'></img>{props.likes}</div>
        </div>
    )
}

export default Posts;