import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import styles from './Nav.module.css'
const Nav = (props) => {
    let friends = props.data.friend.map(el => <Friend name={el.name}/>);
    return (
        <nav className={`${styles.content__nav} app__wrapper-item`}>
            <ul>
                <li className={styles.content__li}>
                    <NavLink className={styles.content__a} activeClassName={styles.activeLink} to="/profile">Home</NavLink>
                </li>
                <li className={styles.content__li}>
                    <NavLink className={styles.content__a} activeClassName={styles.activeLink} to="/dialogs">Message</NavLink>
                </li>
                <li className={styles.content__li}>
                    <NavLink className={styles.content__a} activeClassName={styles.activeLink} to="/about">About</NavLink>
                </li>
                <li className={styles.content__li}>
                    <NavLink className={styles.content__a} activeClassName={styles.activeLink} to="/music">Music</NavLink>
                </li>
                <li className={styles.content__li}>
                    <NavLink className={styles.content__a} activeClassName={styles.activeLink} to="/settings">Settings</NavLink>
                </li>
                <li className={styles.content__li}>
                    <NavLink className={styles.content__a} activeClassName={styles.activeLink} to="/footer">Footer</NavLink>
                </li>
            </ul>
            <div className={styles.nav__friend}>
                {friends}
            </div>
        </nav>
    );
}
export default Nav;