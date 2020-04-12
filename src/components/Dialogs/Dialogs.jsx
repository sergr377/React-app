import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogsElements = state.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} />
    );
    let messagesElements = state.messageData.map(m =>
        <Message message={m.message} id={m.id} />
    );
    let newMessageBody = state.newMessageBody;


    let addMessage = () => {
        props.sendMessage();
    };

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem} >
                {dialogsElements}
            </div>
            
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div
                className={s.textArea}><textarea
                    onChange={onMessageChange}
                    value={newMessageBody}> </textarea>
                <div><button onClick={addMessage}> New message </button></div>
            </div>
        </div>
    )
}

export default Dialogs