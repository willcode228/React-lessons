import { addDialogMessageActionCreator, updateDialogMessageActionCreator } from '../../../Redux/state';
import styles from './Dialog.module.css';
import Message from './Messsage/Message';

const Dialog = (props) => {

    let messageInfo = props.dialog.map(el => <Message message={el.message} />);

    const onUpdateMessage = (e) => {
        let text = e.target.value;
        props.dispatch(updateDialogMessageActionCreator(text));
    }
    const onAddMessage = () => { props.dispatch(addDialogMessageActionCreator()) }

    return (
        <div className={styles.wrapper}>
            <div>{messageInfo}</div>
            <div>
                <textarea placeholder='Enter your message'
                          value={props.message}
                          onChange={ onUpdateMessage }></textarea>
                <button onClick={ onAddMessage }>Add</button>
            </div>
        </div>
    );
}
export default Dialog;