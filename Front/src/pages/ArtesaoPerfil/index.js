import React, { Component } from 'react';
import Pesquisa from "../../components/BarraPesquisa";
import './styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCadastrarEmpresa } from '../../store/actions/actionsCadastro';

class paginaArtesao extends Component {

    componentDidMount(){
        this.props.fetchCadastrarEmpresa();
    }

    gerarListaEmpresas = () => {
        let trs = []
        for (let empresas of this.props.empresaX) {
            trs.push(
                <tr>
                    <td><Link to="/perfilEmpresaVisualizacao">{empresas.nome}</Link></td>
                </tr>
            )
        }
        return (<ul>{trs}</ul>)
    }

    render() {
        return (
            <div className="Artesao-Perfil">
                <Pesquisa />
                <div className="busca-mapa">
                    <div className="menuBusca">
                        <br />
                        <h3>Bairro</h3>
                        <p>Cidade/UF</p><br />
                        
                        <table>
                        {this.props.empresas == [] ?
                                <tbody>
                               </tbody>
                                : this.gerarListaEmpresas()}
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
            empresaX: state.empresaReducer
        }
}

export default connect(mapStateToProps, {fetchCadastrarEmpresa})(paginaArtesao);

