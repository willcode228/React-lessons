import React from 'react';
import { addMessageActionCreator, changeMessageTexActionCreator } from '../../../redux/state';
import s from './MessageForm.module.css';

const MessageForm = (props) => {

    const addMessage = () => {
        let action = addMessageActionCreator();
        props.dispatch(action);
    }

    const changeAreaText = (e) => {
        let action = changeMessageTexActionCreator(e.target.value);
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