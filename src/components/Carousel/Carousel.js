import Img1 from '../../assets/img1.jpg';
import Img2 from '../../assets/img2.jpg';
import Img3 from '../../assets/img3.jpg';

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} showArrows={false} showThumbs={false} showStatus={false}>
                <div>
                    <img src={Img1} alt="" />
                    <p className="legend">Pesquisa inédita mostra que 75% dos brasileiros não sabem que todos os eletroeletrônicos podem ser reciclados.</p>
                </div>
                <div>
                    <img src={Img2} alt="" />
                    <p className="legend">Dúvidas sobre o cumprimento da Política Nacional de Resíduos Sólidos? Convidamos uma especialista para explicar tudo sobre o assunto.</p>
                </div>
                <div>
                    <img src={Img3} alt="" />
                    <p className="legend">De todas as montanhas de lixo geradas no mundo, a dos eletroeletrônicos é a que cresce mais rápido: são 53 milhões de toneladas por ano. Teoricamente, tudo poderia ser reciclado.</p>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel