import styles from './Message.module.css';

const Message = (props) => {
    return (
        <div className={styles.messageItem}>
           -{props.message}
        </div>
    );
}
export default Message;