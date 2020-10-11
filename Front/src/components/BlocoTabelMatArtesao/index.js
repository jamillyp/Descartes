import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { fetchCadastrarMaterial } from '../../store/actions/actionCadastroM';

class BlocoTabelMatArtesao extends React.Component {

    componentDidMount(){
        this.props.fetchCadastrarMaterial();
    }
    gerarListaMaterial = () => {
        let tds = []
        for (let materiais of this.props.materiais) {
            tds.push(
                <tr className="ListaMateriais">
                    <td id='tdM1'>-</td>
                    <td id='tdM2'>{materiais.tipoMaterial}</td>
                    <td id='tdM3'>{materiais.qtdTam}</td>
                    <td id='tdM4'>{materiais.disponibilidade} {materiais.horario}</td>
                    <td id='tdM5'><input id="Check1" type="checkbox" /></td>
                </tr>
            )
        }
        return (<ul>{tds}</ul>)
    }
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
                                {this.props.materiais == [] ?
                                <tr className="ListaMateriais">
                                   <td id='tdM1'>-</td>
                                   <td id='tdM2'></td>
                                   <td id='tdM3'></td>
                                   <td id='tdM4'></td>
                                   <p></p>
                                   <td id='tdM5'><input id="Check1" type="checkbox" /></td>
                               </tr>
                                     : this.gerarListaMaterial()}
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
        materiais: state.materialReducer
    }
}

export default connect(mapStateToProps, {fetchCadastrarMaterial})(BlocoTabelMatArtesao);