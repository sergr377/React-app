import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p =>
        <Posts message={p.message} key={p.id} likes={p.likes} />
    );

    let onAddPost = () => { 
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div><textarea
                onChange={onPostChange}
                value={props.newPostText} /></div>
            <div><button onClick={onAddPost}> New posts </button></div>
            <div className={s.postsBlock}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;