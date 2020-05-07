const ADD_MESSAGE = 'ADD_MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messageData: [...state.messageData, { id: 6, message: body }],
            };
        default:
            return state;
    }
}


export const addMessageActionCreator = (newMessageBody) => {
    return { type: ADD_MESSAGE, newMessageBody: newMessageBody }
}

export default dialogsReducer