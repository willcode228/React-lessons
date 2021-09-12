import s from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={`${s.aside} aside`}>
            <ul>
                <li><a href="#l1">Profile</a></li>
                <li><a href="#l2">Massages</a></li>
                <li><a href="#l3">News</a></li>
                <li><a href="#l4">Music</a></li>
                <li><a href="#l5">Settings</a></li>
            </ul>
        </aside>
    );
}

export default Aside;