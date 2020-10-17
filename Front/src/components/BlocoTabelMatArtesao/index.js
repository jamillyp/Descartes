import React from 'react';
import { fetchMaterialSolicitado } from '../../store/actions/actionCadastroM';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import './styles.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
class BlocoTabelMatArtesao extends React.Component {
    
    state = {
        selected: ''
    }
    
    selectMaterial = (e) => {
        this.setState({selected: e.target.value})
    }
    
    render() {

        const materiais = this.props.empresa.materiais
        
        const materialInserido = materiais.map(material =>
            <tr className="ListaMateriais">
                <td id='tdM2'>{material.tipoMaterial}</td>
                <td id='tdM3'>{material.qtdTam}</td>
                <td id='tdM4'>{material.disponibilidade} até: {material.horario}</td>
                <td id='tdM5'><input id="Check1" type="checkbox" value={material._id} onChange={this.selectMaterial} /></td>
            </tr>
        )

        const notify = () => {
            toast('Solicitação enviada com sucesso!', {position: toast.POSITION.TOP_RIGHT})
        }

        return (
                <div className='BlocoMateriais'>
                    <div className='BlFundo2'>
                        {this.alertaSolicitacao}
                        <section className='CabecalhoBlMateriais'>
                            <h1>Materiais Disponíveis para Retirada</h1>
                            <p id='DivisoriaTabel'></p>
                        </section>
                        <section classname='TabelaMateriaisParaArtesao'>
                            <table className='TabelaListaTitle'>
                                <thead className='TitleTabelaMateriais'>
                                    <tr>
                                        <th id='th2'>Descrição</th>
                                        <th id='th3'>Qtd</th>
                                        <th id='th4'>Disponibilidade</th>
                                        <th id='th5'>Solicitar</th>
                                    </tr>
                                </thead>
                            </table>
                            <table className='TabelaListaProdVisu'>
                                <tbody className='ListagemMateriaisTabela'>
                                {materialInserido}
                                </tbody>
                            </table>
                            <button
                            id='Atualizar'
                            type='button'
                            onClick={notify}
                            >Atualizar</button>
                        </section>
                    </div>
                </div>   
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
      cadastrarM: (dadosMaterial) => { dispatch(fetchMaterialSolicitado(dadosMaterial))}
    }
}

export default connect(null, mapDispatchToProps)(BlocoTabelMatArtesao);