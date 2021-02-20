import styles from './DialogsContacts.module.css';
import Contact from './Contact/Contact';


const DialogsContacts = (props) => {

    let contactsInfo = props.contacts.map(el => <Contact name={el.name} id={el.id} />);

    return (
        <div className={styles.wrapper}>
            {contactsInfo}
        </div>
    );
}
export default DialogsContacts;