import styles from './styles.module.css';
import Logo from '../../assets/logofaq.png'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Text ='Quais são os riscos ambientais de não realizar o descarte correto?';

const Desc = 'O REE  não representa danos imediatos ao meio ambiente. O equipamento quando intacto é inerte, não libera substâncias potencialmente  poluidoras no ambiente. O problema são as  práticas inadequadas de pessoas que desejam recuperar metais e outras substâncias destes equipamentos,sem o devido cuidado. Os resíduos eletrônicos possuem uma grande quantidade de substâncias e materiais em sua composição, alguns com potencial de toxicidade, mas o problema maior reside  nas práticas inadequadas  de reciclagem artesanal destes equipamentos, que se utilizam de soluções ácidas e com potencial de contaminação ainda maior, além de expor os trabalhadores a riscos por trabalhar de modo equivocado.';

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