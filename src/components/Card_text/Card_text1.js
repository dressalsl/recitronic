import styles from './styles.module.css';
import Logo from '../../assets/logofaq.png'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Text ='O que são resíduos eletrônicos?';

const Desc = 'Resíduos de Equipamentos Elétricos e Eletrônicos (REEE) é um termo usado para se referir a todos os equipamentos elétricos e eletrônicos, suas partes e acessórios, que foram descartados pelo seu proprietário como resíduos, sem a intenção de utilizá-los.São também chamados de “Lixo ELetrônico”. Segundo a maioria das leis que tratam deste assunto, maior atenção é dada ao descarte de equipamentos eletrônicos de uso doméstico, tais como celulares, computadores, ferro de passar, chapinha, sanduicheiras, TVs, DVDs, geladeiras, máquinas de lavar roupa, controle remoto, aparelho de som, fones dentre outros tipos de equipamentos eletrônicos de uso corporativo também  devem ser descartados adequadamente pelas empresas, que são responsáveis pela gestão de todos os resíduos gerados em sua operação. ';

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