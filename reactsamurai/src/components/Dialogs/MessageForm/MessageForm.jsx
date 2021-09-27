import React from 'react';
import s from './MessageForm.module.css';

const MessageForm = (props) => {

    const addMessage = () => {
        let action = {
            type: 'ADD-MESSAGE'
        }
        props.dispatch(action);
    }

    const changeAreaText = (e) => {
        let action = {
            type: 'CHANGE-DIALOGS-TEXT', 
            text: e.target.value
        }
        props.dispatch(action);
    }


    return (
        <div className={s.form}>
            <textarea placeholder="Your message here" value={props.text} onChange={ changeAreaText }/>
            <button onClick={ addMessage } >Add new message</button>
        </div>
    );
}

export default MessageForm;