// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";



// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 1, message: 'Hi, How are you?', likes: 10 },
//                 { id: 2, message: 'It\'s my first post', likes: 6 },
//                 { id: 3, message: 'Yo!', likes: 8 },
//                 { id: 4, message: 'Yo!', likes: 22 },
//             ],
//             newPostText: 'New post',
//         },
//         dialogsPage: {

//             dialogs: [
//                 { id: 2, name: 'Dima' },
//                 { id: 2, name: 'Lena' },
//                 { id: 3, name: 'Vova' },
//                 { id: 4, name: 'Helen' },
//             ],

//             messageData: [
//                 { id: 1, message: 'Hi' },
//                 { id: 2, message: 'How are you??' },
//                 { id: 3, message: 'Yo!' },
//                 { id: 4, message: 'Yo!' },
//             ],
//             newMessageText: 'New message',
//         },
//     },

//     _callsubscriber() {
//         return console.log('state changed');
//     },

//     getState() {
//         return this._state;
//     },

//     subscribe(observer) {
//         this._callsubscriber = observer;
//     },

//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

//         this._callsubscriber(this._state);
//     }
// }



// window.store = store;
// export default store