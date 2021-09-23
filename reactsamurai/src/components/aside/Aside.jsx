import s from './Aside.module.css';
import { NavLink } from 'react-router-dom';
const Aside = (props) => {
    
    let navLink = props.data.navLinks.map(obj => (
        <li><NavLink activeClassName={s.active} to={obj.path}>{obj.title}</NavLink></li>
    ));

    let friend = props.data.friends.map(friend => (
        <li className={s.friends}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkiT-yyLmJNm-LFIkIuz04Wd-sOUYRrpt-bQ&usqp=CAU" alt="ava" />
            <p>{friend.name}</p>
        </li>
    ));

    return (
        <aside className={`${s.aside} aside`}>
            <ul className="mainLinks">
                {navLink}
            </ul>

            <ul className={s.mainFriends}>
                {friend}
            </ul>
        </aside>
    );
}

export default Aside;