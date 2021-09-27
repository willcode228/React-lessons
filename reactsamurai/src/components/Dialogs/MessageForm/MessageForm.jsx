import React from 'react';
import s from './MessageForm.module.css';

const MessageForm = (props) => {

    let textareaLink = React.createRef();

    const addMessage = () => {
        props.addMessage();
    }

    const changeAreaText = () => {
        let text = textareaLink.current.value.trim();
        props.newMessageText(text);
    }


    return (
        <div className={s.form}>
            <textarea placeholder="Your message here" ref={textareaLink} value={props.text} onChange={ changeAreaText }/>
            <button onClick={ addMessage } >Add new message</button>
        </div>
    );
}

export default MessageForm;