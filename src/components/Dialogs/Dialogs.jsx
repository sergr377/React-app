import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { reduxForm, Field } from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;


    let dialogsElements = state.dialogs.map(d =>
        <DialogItem name={d.name} key={d.id} />
    );
    let messagesElements = state.messageData.map(m =>
        <Message message={m.message} key={m.id} />
    );
    
    let addMessage = (value) => {
        props.sendMessage(value.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem} >
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.textArea}>
                <AddMessageFormRedux onSubmit={addMessage} />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div>
                <button> New message </button>
            </div>
        </form>
    )

}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)


export default Dialogs