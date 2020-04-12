const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 2, name: 'Dima' },
        { id: 2, name: 'Lena' },
        { id: 3, name: 'Vova' },
        { id: 4, name: 'Helen' },
    ],

    messageData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you??' },
        { id: 3, message: 'Yo!' },
        { id: 4, message: 'Yo!' },
    ],
    newMessageText: 'New message',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };

            state.messageData.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newTextMessage;
            return state;

        default:
            return state;
    }
}


export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE }
}
export const updateNewMessageBodyCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newTextMessage: text }
}

export default dialogsReducer