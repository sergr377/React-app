import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControl';


const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder="Post message"
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <button> New posts </button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Posts message={p.message} key={p.id} likes={p.likes} />
        );

    let onAddPost = (value) => {
        props.addPost(value.newPostText);
    };


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
export default MyPosts;