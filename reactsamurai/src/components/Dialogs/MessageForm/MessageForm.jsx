import React from 'react';
import s from './MessageForm.module.css';

const MessageForm = (props) => {


    let textareaLink = React.createRef();

    const addMessage = () => {
        console.log(textareaLink.current.value);
    }

    return (
        <div className={s.form}>
            <textarea placeholder="Your message here" ref={textareaLink} />
            <button onClick={ addMessage } >Add new message</button>
        </div>
    );
}

export default MessageForm;