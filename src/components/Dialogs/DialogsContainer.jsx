import React from 'react'
import { addMessageActionCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };


    return (
        <Dialogs
            updateNewMessageBody={onMessageChange}
            sendMessage={addMessage}
            dialogsPage={state} />
    )
}

export default DialogsContainer