import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p =>
        <Posts message={p.message} likes={p.likes} />
    );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /></div>
            <div><button onClick={addPost}> New posts </button></div>
            <div className={s.postsBlock}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;