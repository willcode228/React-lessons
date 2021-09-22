import s from './Dialog.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    return (
        <li className={s.dialogs__item}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active} className={s.dialog}>
                {props.name}
            </NavLink>
        </li>
    );
}

export default Dialog;