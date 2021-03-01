import DialogsContacts from './DialogsContacts/DialogsContacts'
import styles from './Dialogs.module.css';
import DialogContainer from './Dialog/DialogContainer';

const Dialogs = (props) => {
    return (
        <div className={`${styles.wrapper} app__wrapper-item`}>
            <DialogsContacts contacts={props.data.contactsObj}/>
            <DialogContainer store={props.store}/>
        </div>
    );
}
export default Dialogs;