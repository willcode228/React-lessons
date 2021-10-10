import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {

    if(!props.isAuth) {
        return (
            <header className={`${s.header} header`}>
                <NavLink to='/login' className={s.login}>Login</NavLink>
            </header>
        )
    }

    return (
        <header className={`${s.header} header`}>
            <p>{props.login}</p>
            <p>{props.email}</p>
        </header>
    )
}

export default Header;