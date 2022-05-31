import styles from './styles.module.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {TextField, Button, Card, Typography, CardContent} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Reecicle from '../../assets/reecicle-iputinga.png';
import Fundaj from '../../assets/fundaj.png'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EcoRecife from '../../assets/eco-recife.png'
import Pesquisa from '../../assets/pesquisa.png'


function PontoColeta() {
    return (
        <>
            <Header />
            <div >
                <input type="text" className={styles.search} placeholder="Faça uma busca pelo ponto de coleta mais próximo de você!"/>
                <img src={Pesquisa} className={styles.buttonFilter} alt="Buscar"/>
            </div>
            <div className={styles.pontoColeta}>
                <h1 className={styles.tituloPontoColeta}>Pontos de Coleta</h1>
            </div>
            <div className={styles.cardPontos}>
                <CardContent className={styles.card}>
                     <img src={Reecicle} alt=""/>
                </CardContent>  
                <Typography>REECICLE-iPUTINGA</Typography>
                 {/* <svg data-testid="StarBorderIcon"></svg> */}
                 <CardContent className={styles.card}>
                     <img src={Fundaj} alt=""/>
                </CardContent>
                <Typography>Fundaj</Typography>
                <CardContent className={styles.card}>
                     <img src={EcoRecife} alt=""/>
                </CardContent>
                <Typography>Eco Recife</Typography>        
            </div>
            <Footer />
        </>

    )
}

export default PontoColeta