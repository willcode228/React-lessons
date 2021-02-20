import DialogsContacts from './DialogsContacts/DialogsContacts'
import Dialog from './Dialog/Dialog';
import styles from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={`${styles.wrapper} app__wrapper-item`}>
            <DialogsContacts contacts={props.data.contactsObj}/>
            <Dialog dialog={props.data.messageData}/>
        </div>
    );
}
export default Dialogs;