import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={`${styles.header} app__wrapper-item`}>
			<img className={styles.header__logo} src="https://png.pngtree.com/element_origin_min_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt="Logo"/>
			<h1 className={styles.header__title}>My first React App</h1>
		</header>
    );
}
export default Header;