import styles from './styles.module.css';
import Wizard from '../../../src/assets/wizard.png';
import Message from '../../../src/assets/message.png';
import Ranking from '../../../src/assets/ranking.png';
import Notification from '../../../src/assets/notification.png';

function Menu() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><a href="#">INÍCIO</a></li>
                <li className={styles.navItem}><a href="ponto-coleta">PONTOS DE COLETA</a></li>
                <li className={styles.navItem}><a href="#">ANÚNCIOS</a></li>
                <li className={styles.navItem}><a href="#">FAQ</a></li>
                <li className={styles.navItem}><a href="#"><img src={Wizard} /></a></li>
                <li className={styles.navItem}><a href="#"><img src={Ranking} /></a></li>
                <li className={styles.navItem}><a href="#"><img src={Message} /></a></li>
                <li className={styles.navItem}><a href="#"><img src={Notification} /></a></li>
            </ul>   
        </nav>    
    )
}

export default Menu