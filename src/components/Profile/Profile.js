import styles from './styles.module.css';
import ProfileImg from '../../assets/profile.png';

// criar o fluxo do get para recuperar a imagem do perfil do user logado
function Profile() {
    return(
        <div className={styles.profile}>
            <img src={ProfileImg} alt=""/>
        </div>
    )
}

export default Profile