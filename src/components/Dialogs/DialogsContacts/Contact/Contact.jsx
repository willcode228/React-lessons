import { NavLink } from 'react-router-dom';
import styles from './Contact.module.css'

const Contact = (props) => {
    return (
        <NavLink className={styles.contact} to={`/dialogs/${props.id}`}>
            {props.name}
        </NavLink>
    );
}
export default Contact