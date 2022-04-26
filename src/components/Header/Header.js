import styles from './styles.module.css';
import Logo from '../../assets/logo.png';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo Recitronic" />
                    <span>recitronic</span>
                </div>
            </div>
        </div>
    )
}

export default Header