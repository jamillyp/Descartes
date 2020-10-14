import React from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEmpresas } from '../../store/actions/actionEmpresa';
import { Container } from 'react-bootstrap';

class BlocoTabelMatArtesao extends React.Component {

    componentDidMount() {
        console.log(this.props)
        // alert(this.props.match.params.id)
        console.log(this.props.materiais(this.props.match.params.id))
    }
    
    render() {
        
        const empresa = this.props.materiais(this.props.match.params.id)
        
        const materialInserido = empresa.materiais.map(material =>
            <tr className="ListaMateriais">
                <td id='tdM1'>-</td>
                <td id='tdM2'>{material.tipoMaterial}</td>
                <td id='tdM3'>{material.qtdTam}</td>
                <td id='tdM4'>{material.disponibilidade} até: {material.horario}</td>
                <td id='tdM5'><input id="Check1" type="checkbox" /></td>
            </tr>
        )

        return (
            <Container>
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
                                {materialInserido}
                                </tbody>
                            </table>
                            <button id='AtualizarSolicitacao'>Atualizar</button>
                        </section>
                    </div>
                </div>    
            </Container>
            
        )
    }
}
function mapStateToProps(state) { 
    return {
        materiais: (id) => state.empresaReducer.find(empresa => empresa._id === id)
    }
}

export default withRouter(connect(mapStateToProps, {fetchEmpresas})(BlocoTabelMatArtesao));