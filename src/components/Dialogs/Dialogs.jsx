import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'

const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map(d =>
        <DialogItem name={d.name} id={d.id} />
    );

    let messagesElements = props.messageData.map(m =>
        <Message message={m.message} id={m.id} />
    );

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    };


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem} >
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textArea}><textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText}> </textarea>
                <div><button onClick={addMessage}> New message </button></div>
            </div>
        </div>
    )
}

export default Dialogs