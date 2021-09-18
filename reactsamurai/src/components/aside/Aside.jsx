import s from './Aside.module.css';
import { NavLink } from 'react-router-dom';
const Aside = () => {
    return (
        <aside className={`${s.aside} aside`}>
            <ul>
                <li><NavLink activeClassName={s.active} to="/profile">Profile</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/dialogs">Massages</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/news">News</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/music">Music</NavLink></li>
                <li><NavLink activeClassName={s.active} to="/settings">Settings</NavLink></li>
            </ul>
        </aside>
    );
}

export default Aside;