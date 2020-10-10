import React from 'react';
import './styles.css';
import { connect } from 'react-redux';

class BlocoTabelMatArtesao extends React.Component {
    render() {
        return (
            <div className='BlocoMateriais'>
                <div className='BlFundo2'>
                    <section className='CabecalhoBlMateriais'>
                         <h1>Materiais Disponíveis para Retirada</h1>
                         <p id='DivisoriaTabel'></p>
                    </section>
                    <section classname='TabelaMateriaisParaArtesao'>
                        <table className='TabelaListaTitle'>
                            <thead className='TitleTabelaMateriais'>
                                <tr>
                                    <th id='th1'>Cdg</th>
                                    <th id='th2'>Descrição</th>
                                    <th id='th3'>Qtd</th>
                                    <th id='th4'>Disponibilidade</th>
                                    <th id='th5'>Solicitar</th>
                                </tr>
                            </thead>
                        </table>
                        <table className='TabelaListaProdVisu'>
                            <tbody className='ListagemMateriaisTabela'>
                                <tr className="ListaMateriais">
                                    <td id='tdM1'>001</td>
                                    <td id='tdM2'>{this.props.material[0].tipoMaterial}</td>
                                    <td id='tdM3'>{this.props.material[0].qtdTam}</td>
                                    <td id='tdM4'>{this.props.material[0].disponibilidade}<p>
                                    {this.props.material[0].horario}</p></td>
                                    <td id='tdM5'><input id="Check1" type="checkbox" /></td>
                                </tr>
                                <tr className="ListaMateriais">
                                    <td id='tdM1'>002</td>
                                    <td id='tdM2'>{this.props.material[1].tipoMaterial}</td>
                                    <td id='tdM3'>{this.props.material[1].qtdTam}</td>
                                    <td id='tdM4'>{this.props.material[1].disponibilidade}
                                    <p>{this.props.material[1].horario}</p></td>
                                    <td id='tdM5'><input id="Check1" type="checkbox" /></td>
                                </tr>
                            </tbody>
                        </table>
                        <button id='AtualizarSolicitacao'>Atualizar</button>
                    </section>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        material: state.materialReducer
    }
}

export default connect(mapStateToProps)(BlocoTabelMatArtesao);