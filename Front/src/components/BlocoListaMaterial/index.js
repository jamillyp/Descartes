import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { fetchCadastrarMaterial } from '../../store/actions/actionCadastroM';

class listaMaterial extends Component {

    componentDidMount(){
        this.props.fetchCadastrarMaterial();
    }
    gerarLista = () => {
        let trs = []
        for (let materiais of this.props.materiais) {
            trs.push(
                <tr id="lista">
                    <td id='td1'>-</td>
                    <td id='td2'>{materiais.tipoMaterial}</td>
                    <td id='td3'>{materiais.qtdTam}</td>
                    <td id='td4'><input id="Check1" type="checkbox" /></td>
                    <td id='td5'><input id="Check2" type="checkbox" /></td>
                    <td id='td6'><input id="Check3" type="checkbox" /></td>
                </tr>
        )}
        return (<tr className="ListaMateriais">{trs}</tr>)
    }

    render() {
        return (
            <div className='TerceiroBloco'>
                <div className='BlocoVerde'>
                    <section className='CabecalhoBlAmarelo'>
                        <h1>Lista de Materiais</h1>
                        <p id='DivisoriaTabel'></p>
                    </section>
                    <form method="GET" className='TabelaProdCadastrados'>
                        <table className='TabelaListaProd1'>
                            <thead id='TituloTabela'>
                                <tr>
                                    <th id='th1'>Cdg</th>
                                    <th id='th2'>Descrição</th>
                                    <th id='th3'>Qtd</th>
                                    <th id='th4'>Apagar</th>
                                    <th id='th5'>Reservar</th>
                                    <th id='th6'>Doado</th>
                                </tr>
                            </thead>
                        </table>
                        <table className='TabelaListaProd2'>
                            <tbody className='ListagemTabela'>
                            {this.props.materiais==null?
                                <tr className="ListaMateriais">nenhum material</tr> : this.gerarLista()}
                            </tbody>
                        </table>
                        <button id='Atualizar'>Atualizar</button>
                    </form>
                </div>
        </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('PE----',state)
        return {
            materiais: state.materialReducer
        }
}

export default connect(mapStateToProps, {fetchCadastrarMaterial})(listaMaterial);
