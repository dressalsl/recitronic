import styles from './styles.module.css';
import DemoCarousel from '../Carousel/Carousel.js';

function Content() {
    return (
        <div className={styles.content}>
            <div className={styles.slider}><DemoCarousel /></div>
            <div>veja também</div>
            <div>icons</div>
        </div>
    )
}

export default Content