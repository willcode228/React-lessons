import styles from './Dialog.module.css';
import Message from './Messsage/Message';

const Dialog = (props) => {

    let messageInfo = props.dialog.map(el => <Message message={el.message} />);

    return (
        <div className={styles.wrapper}>
            {messageInfo}
        </div>
    );
}
export default Dialog;