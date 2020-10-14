import React, { Component } from 'react';
import Pesquisa from "../../components/BarraPesquisa";
import './styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEmpresas } from '../../store/actions/actionEmpresa';
import { Container } from 'react-bootstrap'

class paginaArtesao extends Component {

    componentDidMount(){
        this.props.fetchEmpresas();
    }

    gerarListaEmpresas = () => {
        let trs = []
        for (let empresas of this.props.empresaX) {
            trs.push(
                <tr>
                    <td><Link to={`/perfilEmpresaVisualizacao/${empresas._id}`}>{empresas.nome}</Link></td>
                </tr>
            )
        }
        return (<ul>{trs}</ul>)
    }

    render() {
        return (
            <Container>
                <div className="Artesao-Perfil">
                <Pesquisa />
                <div className="busca-mapa">
                    <div className="menuBusca">
                        <br />
                        <h3>Empresas</h3>
                        <br />
                        
                        <table>
                        {this.gerarListaEmpresas()}
                        </table>

                    </div>
                    <div className="mapaBusca">

                    </div>
                </div>
            </div>
            </Container>
            
        )
    }
}

function mapStateToProps(state) {
    console.log('PE----',state)
        return {
            empresaX: state.empresaReducer
        }
}

export default connect(mapStateToProps, {fetchEmpresas})(paginaArtesao);

