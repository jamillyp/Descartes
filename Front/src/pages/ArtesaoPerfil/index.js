import React, { Component } from 'react';
import Pesquisa from "../../components/BarraPesquisa";
import './styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class paginaArtesao extends Component {
    render() {
        return (
            <div className="Artesao-Perfil">
                <Pesquisa />
                <div className="busca-mapa">
                    <div className="menuBusca">
                        <br />
                        <h3>Nome Bairro</h3>
            
                        <p>Cidade/UF</p><br />
                        <th></th>

                        <table>
                            <tr>
                                <td>Empresa A <Link to="">{this.props.material[0].tipoMaterial}</Link></td>
                            </tr>
                            <tr>
                                <td>Empresa B <Link to="">{this.props.material[0].qtdTam}</Link></td>
                            </tr>
                            <tr>
                                <td>Empresa C <Link to="">{this.props.material[0].disponibilidade}</Link></td>
                            </tr>
                            <tr>
                                <td>Empresa D <Link to="">{this.props.material[0].horario}</Link></td>
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

function mapStateToProps(state) {
    console.log('PE----',state)
        return {
            material: state.materialReducer
        }
}

export default connect(mapStateToProps)(paginaArtesao);

