import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';
import { reduxForm, Field } from 'redux-form';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p =>
        <Posts message={p.message} key={p.id} likes={p.likes} />
    );

    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    };

    AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={s.postsBlock}>
                {postsElements}
            </div>
        </div>
    )
}



let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name="newPostText" />
            </div>
            <div><button> New posts </button></div>
        </form>
    )
}

export default MyPosts;