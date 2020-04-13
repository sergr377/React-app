import React from 'react'
import { addMessageActionCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../storeContext';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let onMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                };
                return <Dialogs
                    updateNewMessageBody={onMessageChange}
                    sendMessage={addMessage}
                    dialogsPage={state} />
            }}
        </StoreContext.Consumer>)
}

export default DialogsContainer