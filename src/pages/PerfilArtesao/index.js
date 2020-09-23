import React, { Component } from 'react';
import Pesquisa from "../../components/BarraPesquisa";
import './styles.css';
import { Link } from 'react-router-dom';
import mapaG from '../../assets/svg/mapa1.svg';

export default class paginaArtesao extends Component {
    render() {
        return (
            <div className="Artesao-Perfil">
                <Pesquisa></Pesquisa>
                <div className="busca-mapa">
                    <div className="menuBusca">
                        <br />
                        <h3>Nome Bairro</h3>
            
                        <p>Cidade/UF</p><br />
                        <th></th>

                        <table>
                            <tr>
                                <td>Empresa A <Link to="">Ver Empresa</Link></td>
                            </tr>
                            <tr>
                                <td>Empresa B <Link to="">Ver Empresa</Link></td>
                            </tr>
                            <tr>
                                <td>Empresa C <Link to="">Ver Empresa</Link></td>
                            </tr>
                            <tr>
                                <td>Empresa D <Link to="">Ver Empresa</Link></td>
                            </tr>
                        </table>

                    </div>
                    <div className="mapaBusca">

                    </div>
                </div>
            </div>
        )
    }
}

