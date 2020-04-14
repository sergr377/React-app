const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dima' },
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
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messageData: [...state.messageData, { id: 6, message: body }],
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.body
            };

        default:
            return state;
    }
}


export const addMessageActionCreator = () => {
    return { type: ADD_MESSAGE }
}
export const updateNewMessageBodyCreator = (body) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, body: body }
}

export default dialogsReducer