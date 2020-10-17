import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEmpresas } from '../../store/actions/actionEmpresa';
import { Map, TileLayer } from 'react-leaflet';

import Pesquisa from "../../components/BarraPesquisa";

import './styles.css';
import 'leaflet/dist/leaflet.css';

class paginaArtesao extends Component {

    componentDidMount(){
        this.props.fetchEmpresas();
    }

    gerarListaEmpresas = () => {
        let trs = []
        for (let empresas of this.props.empresaX) {
            trs.push(
                <tr className='ListaEmpresas'>
                    <td><Link to={`/perfilEmpresaVisualizacao/${empresas._id}`}>{empresas.nome}</Link></td>
                </tr>
            )
        }
        return (<ul>{trs}</ul>)
    }

    render() {
        return (
            <div className="TamanhoCorpoPerfilArtesao">
                <div className="Artesao-Perfil">
                    <Pesquisa />
                    <div className="busca-mapa">
                        <div className="menuBusca">
                            <br />
                            <h3>Empresas</h3>
                            <p>Listagem de empresas cadastradas</p>
                                
                            <table >
                                {this.gerarListaEmpresas()}
                            </table>
                        </div>
                        <div className="mapaBusca">
                        <Map 
                            center={[-4.9713662,-39.0188777,]}
                            zoom={11}
                            style={{ width:'100%', height:'100%'}} 
                            >
                            <TileLayer 
                                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        </Map>
                        </div>
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

export default connect(mapStateToProps, {fetchEmpresas})(paginaArtesao);

