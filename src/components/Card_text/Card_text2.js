import styles from './styles.module.css';
import Logo from '../../assets/logofaq.png'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Text ='Porquê  o lixo eletrônico é um problema?';

const Desc = 'Os equipamentos elétricos e eletrônicos possuem diversos componentes tóxicos em suas estruturas. Se descartados de maneira incorreta, esses resíduos tóxicos podem contaminar o solo e os lençóis freáticos, colocando em risco a saúde pública. Segundo o Centro de Tecnologia Mineral(CETEM), cerca de 70% dos metais pesados encontrados em lixões e aterros sanitários controlados são provenientes de equipamentos eletrônicos descartados incorretamente.';

function  Card_text(){
    return ( 
        <div>
             <Header />
            <div className = {styles.title}>
                {Text} 
            </div>
    
            <div className={styles.principal}>
    
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo Recitronic" /> 
                </div>
                <p className={styles.texto}>{Desc}</p>

            </div>
            <Footer />
        </div>        
        );
    };
export default Card_text