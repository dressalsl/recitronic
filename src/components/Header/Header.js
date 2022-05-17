import styles from './styles.module.css';
import Logo from '../../assets/logo.png';
import Menu from '../Menu/Menu.js';
import Profile from '../Profile/Profile.js';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo Recitronic" />
                    <span>recitronic</span>
                </div>
                <Menu />
                <Profile />
            </div>
        </div>
    )
}

export default Header