const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi, How are you?', likes: 10 },
        { id: 2, message: 'It\'s my first post', likes: 6 },
        { id: 3, message: 'Yo!', likes: 8 },
        { id: 4, message: 'Yo!', likes: 22 },
    ],
    newPostText: 'New post',
};

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}


export const addPostActionCreator = () => {
    return { type: ADD_POST }
}
export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export default profileReducer
