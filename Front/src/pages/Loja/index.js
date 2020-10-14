import './styles.css';
import React, { Component } from 'react';
import lupa from '../../assets/svg/lupa.svg';
import movel from '../../assets/svg/movel.svg';
import decoracao from '../../assets/svg/decoracao.svg';
import brinquedo from '../../assets/svg/brinquedo.svg';
import escritorio from '../../assets/svg/escritorio.svg';
import jardim from '../../assets/svg/jardim.svg';
import bolsa from '../../assets/svg/bolsa.svg';
import oferta from '../../assets/svg/produtos-ofertas.svg';
import { Container } from 'react-bootstrap';


export default class Loja extends Component {
    render() {
        return (
            <Container>
               <div className="loja">
                <div className="Titulos-BarraP">
                    <div className="titulos-loja">
                    <h1>Os melhores produtos você encontra aqui.</h1>
                    <h3><img src={lupa} />Encontre os produtos, lojas e artesãos que deseja.</h3>
                </div>
                <div className="barra-pesquisa">
                    <div className="barra-pesquisa1">
                        <label for="barra-pesquisa">Qual produto procura?</label><br />
                        <select name="material" id="material">
                        <option value="opcao0" aria-checked="">Selecione o produto. Ex.: vaso de planta...</option>
                        <option value="opcao1" >Vaso de madeira para plantas</option>
                        <option value="opcao2">Sofá de Paletes</option>
                        <option value="opcao3">Balanço de Pneus</option>
                        <option value="opcao4">Todas</option>
                        </select></div>
                    <div className="barra-pesquisa2">
                        <label for="barra-pesquisa">Qual loja/artesão procura?</label><br />
                        <select name="material" id="material">
                        <option value="opcao0" aria-checked="">Selecione um nome. Ex.: Artesão A, Loja B...</option>
                        <option value="opcao1" >Artesão A</option>
                        <option value="opcao2">Loja A</option>
                        <option value="opcao3">Artesão C</option>
                        <option value="opcao4">Todos</option>
                        </select></div>
                    <div className="barra-pesquisa3">
                        <br />
                        <button type="submit" id="botao-pesquisar">Pesquisar</button><br /></div>
                </div>
            </div>
            <div className="loja-visual">
                <div className="categorias">
                    <br />
                    <h4>Categorias populares</h4>
                    <br />
                    <ul>
                        <a href=""><li>
                            <img src={movel} />
                             Móveis</li></a> 
                        <a href=""><li>
                            <img src={decoracao} />
                            Decoração</li></a>
                        <a href=""><li>
                            <img src={brinquedo} />
                            Brinquedos</li></a>
                        <a href=""><li>
                            <img src={jardim} />
                            Jardim</li></a>
                        <a href=""><li>
                            <img src={escritorio} />
                            Escritório</li></a>
                        <a href=""><li>
                            <img src={bolsa} />
                            Bolsas e Mochilas</li></a>
                    </ul><br />
                </div>
                <div className="ofertas">
                        <img src={oferta} />
                </div>
            </div>
        </div> 
            </Container>
            
        )
    }
}

