import styles from '/src/styles/Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <a href="/" className={styles.link}>Home</a>
            </nav>
        </header>
    );
};

export default Header;