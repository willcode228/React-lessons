import s from './Aside.module.css';
import { Link } from 'react-router-dom';
const Aside = () => {
    return (
        <aside className={`${s.aside} aside`}>
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/dialogs">Massages</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </aside>
    );
}

export default Aside;