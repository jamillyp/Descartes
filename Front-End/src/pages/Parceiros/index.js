import React, { Component } from 'react';
import './styles.css';

import maos from '../../assets/svg/img-maos.svg';
import selos from '../../assets/svg/quadro-img-selos.svg';
import anuncios from '../../assets/svg/anuncios.svg';


export default class Parceiros extends Component {
    
    
    render() {
        return (
            <div className="pagina3">

                <div className="titulo">
                    <h1>Nossos parceiros</h1>
                </div>
                <div className="cards">
                    <div className="empresas">
                    <h3>Empresas</h3><a href="">Veja mais...</a><br />
                    <div className="fundo">
                    <img src={maos} id="empresas"></img>
                    <p>Conheça as empresas parceiras que<br /> 
                    contribuem para o desenvolvimento<br />  
                    do seu trabalho e com uma<br />  
                    sociedade mais sustentável</p>
                    </div>
                    </div>
                    <div className="selo">
                    <h3>Selo de sustentabilidade</h3><a href="">Veja mais...</a><br />
                <div className="fundo">
                    <img src={selos} id="empresas"></img>
                    <p>Nossos parceiros ganham selos de<br />
                    sustentabilidade por maior contribuição<br /> 
                    e engajamento. Referência em<br /> 
                    comprometimento e responsabilidade<br />
                    com o ambiente e a sociedade</p>
                    </div>
                    </div>
                <div className="publicidade">
                    <h3>Publicidade</h3><a href="">Veja mais...</a><br />
                    <div className="fundo">
                    <img src={anuncios} id="anuncios"></img>
                    </div>
                    </div>
                </div>
            </div>     
        )
    }
}

