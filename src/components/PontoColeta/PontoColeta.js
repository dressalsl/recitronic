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
                     <Typography className ={styles.text}>REECICLE-iPUTINGA</Typography>
                        
                       
                            
                </CardContent>  
                <ul className ={styles.desc}>
                    <p>CPF/CNPJ: 25.257.840/0001-65</p> 
                    <p>Rua: Rua Rocha Pombo</p> 
                    <p>Email:contato@reeecicle.com </p>
                </ul>
               


               
                
                 {/* <svg data-testid="StarBorderIcon"></svg> */}
                 <CardContent className={styles.card}>
                     <img src={Fundaj} alt=""/>
                     <Typography className ={styles.text}>Fundaj</Typography>
                </CardContent>
                <ul className ={styles.desc}>
                            <p>CPF/CNPJ:09.773.169/0001-59 </p> 
                            <p>Rua:R. Henrique Dias </p> 
                            <p>Email:contato@fundaj.com </p>
                </ul>
                    
               
               
                <CardContent className={styles.card}>
                     <img src={EcoRecife} alt=""/>
                     <Typography className ={styles.text}>Eco Recife</Typography> 
                     
                </CardContent>
                <ul className ={styles.desc}>
                            <p>CPF/CNPJ:23.688.897/0001-93</p> 
                            <p>Rua:República da Argélia com a Rua Cristiano</p> 
                            <p>Email:EcoRecife@recife.com</p>
                </ul>
                
            </div>
            <Footer />
        </>

    )
}

export default PontoColeta