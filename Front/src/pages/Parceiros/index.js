import React, { Component } from 'react';

import maos from '../../assets/svg/img-maos.svg';
import selos from '../../assets/images/seloscard.png';
import anuncios from '../../assets/svg/anuncios.svg';

import './styles.css';

export default class Parceiros extends Component {
    render() {
        return (
            <div className='TamanhoCorpoParc'>
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
                                <img src={selos} id="selos"></img>
                                <p>Nossos parceiros ganham selos de
                                sustentabilidade por maior contribuição 
                                e engajamento. Referência em
                                comprometimento e responsabilidade
                                com o ambiente e a sociedade</p>
                            </div>
                        </div>
                        <div className="selo">
                            <h3>Publicidade</h3><a href="">Veja mais...</a><br />
                            <div className="fundo">
                                <img src={anuncios} id="empresas"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

