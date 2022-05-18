import styles from './styles.module.css';
import DemoCarousel from '../Carousel/Carousel.js';
import Recycle from '../../assets/recycle.png';
import Flower from '../../assets/flower.png';
import Earth from '../../assets/terra.png';
import Reuse from '../../assets/reuso.png';


function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.slider}><DemoCarousel /></div>
            <div className={styles.view}>
                <span>Veja também</span>
                <p>Pesquisa inédita mostra que 75% dos brasileiros não sabem que todos os eletroeletrônicos podem ser reciclados.</p>
                <hr/>
                <p>Dúvidas sobre o cumprimento da Política Nacional de Resíduos Sólidos? Convidamos uma especialista para explicar tudo sobre o assunto.</p>
                <hr/>
                <p>De todas as montanhas de lixo geradas no mundo, a dos eletroeletrônicos é a que cresce mais rápido: são 53 milhões de toneladas por ano. Teoricamente, tudo poderia ser reciclado.</p>
            </div>
            <div className={styles.icons}>
                <img src={Recycle} alt=""/>
                <img src={Flower} alt=""/>
                <img src={Earth} alt=""/>
                <img src={Reuse} alt=""/>
            </div>
        </div>
    )
}

export default Content