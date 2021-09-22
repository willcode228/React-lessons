import s from './Message.module.css';

const Message = (props) => {
    return (
        <li className={s.messages__item}>{props.text}</li>
    )
}

export default Message;