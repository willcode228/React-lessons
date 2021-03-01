import styles from './Dialog.module.css';
import Message from './Message/Message';

const Dialog = (props) => {

    let messageInfo = props.messageInfo.map(el => <Message message={el.message} />);

    const onUpdateMessage = (e) => {
        let text = e.target.value;
        props.messageUpdate(text);
    }
    const onAddMessage = (text) => { props.messageAdd(text) }

    return (
        <div className={styles.wrapper}>
            <div>{messageInfo}</div>
            <div>
                <textarea placeholder='Enter your message'
                          value={props.messageText}
                          onChange={ onUpdateMessage }></textarea>
                <button onClick={ onAddMessage }>Add</button>
            </div>
        </div>
    );
}
export default Dialog;