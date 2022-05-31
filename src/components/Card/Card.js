import styles from './styles.module.css';
import Logo from '../../assets/logofaq.png'



const Text = 'Dúvidas frequentes';
const Text1 = 'O que são resíduos eletrônicos?';
const Text2 = 'Porquê  o lixo eletrônico é um problema?';
const Text3 = 'Quais são os riscos ambientais de não realizar o descarte correto?';
function  Card(){
    return ( 
    <div>

        <div className = {styles.title}>
            {Text} 
        </div>

        <div className={styles.principal}>

            <div className={styles.logo}>
                <img src={Logo} alt="Logo Recitronic" /> 
            </div>

            <ol className={styles.lista}>
               <li><a href = 'Text1'>{Text1}</a></li> 
               <li><a href = 'Text2'>{Text2}</a></li> 
               <li><a href = 'Text3'>{Text3}</a></li> 
             </ol>

        </div>

    </div>        
    );
};

export default  Card

/* const teste= ['O que são resíduos eletrônicos?','Porquê  o lixo eletrônico é um problema?','Quais são os riscos ambientais de não realizar o descarte correto?'];
<ol className={styles.lista}>
    {teste.map(teste=> <li>{ teste }</li>) }  
</ol> */