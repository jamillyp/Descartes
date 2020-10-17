import React, { Component } from 'react';
import './styles.css';

import { connect } from 'react-redux';
import { fetchMaterialDoado } from '../../store/actions/actionCadastroM';

class listaMaterial extends Component {
    state = {
        selected: ''
    }

    selectMaterial = (e) => {
        this.setState({selected: e.target.value})
    }
    
    render() { 

        const materialInserido = this.props.materiais.map(material =>
            
            <tr id="lista">
                <td id='td2'>{material.tipoMaterial}</td>
                <td id='td3'>{material.qtdTam}</td>
                <td id='td4'><input id="Check1" type="checkbox" /></td>
                <td id='td5'><input id="Check2" type="checkbox" /></td>
                <td id='td6'><input id="Check3" type="checkbox" value={material._id} onChange={this.selectMaterial} /></td>
            </tr>
        )
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
                            <tr>
                             {materialInserido}   
                            </tr>
                            </tbody>
                        </table>
                    </form>
                        <button 
                            id='Atualizar'
                            type='button'
                            
                            onClick={()=> this.props.cadastrarM(this.state.selected)}
                        >Atualizar</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('PE----',state)
        return {
            materiais: state.EmpLogadaReducer.materiais
        }
}

function mapDispatchToProps(dispatch) {
    return {
      cadastrarM: (dadosMaterial) => { dispatch(fetchMaterialDoado(dadosMaterial))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(listaMaterial);
