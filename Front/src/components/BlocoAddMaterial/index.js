import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { fetchCadastrarMaterial } from '../../store/actions/actionCadastroM';


class BlocoAddMaterial extends React.Component{

    constructor(props) {
        super(props);
        this.state = [{
            tipoMaterial: '',
            qtdTam: '',
            disponibilidade: '',
            horario: ''
        },]
        this.setDados = this.setDados.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setDados(e){
        this.setState({...this.state, [e.target.name]: e.target.value});
        console.log(`{ ${e.target.name}: ${e.target.value} }`);
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
        this.props.cadastrarM(this.state);
        this.setState({tipoMaterial: '', qtdTam: '', disponibilidade: '', horario: ''});
    }

    render() {
        return (
            <div className='AddMaterial'>
                <div className='SegundoBloco'>
                    <div className='BlocoAmarelo'>
                        <section className='CabecalhoBlAmarelo'>
                            <h1>Cadastrar Material</h1>
                            <p id='Divisoria'></p>
                        </section>
                        <form className='CorpoBlAmarelo' onSubmit={this.onSubmit}>
                            <p>Tipo de material</p>
                            <input 
                            type="text" 
                            name="tipoMaterial" 
                            id="txtCadTipo" 
                            placeholder="Digite o tipo de material"
                            value={this.state.tipoMaterial}
                            onChange={this.setDados} />
                            <p> Quantidade / Tamanho </p>
                            <input 
                            type="text" 
                            name="qtdTam" 
                            id="txtCadQnt" 
                            placeholder="Digite a quantidade/tamanho"
                            value={this.state.qtdTam}
                            onChange={this.setDados} />
                            <p>Disponibilidade</p>
                            <input 
                            type="date" 
                            name="disponibilidade" 
                            id="Data"
                            value={this.state.disponibilidade} 
                            onChange={this.setDados} />
                            <input 
                            type="time" 
                            name="horario" 
                            id="Hora" 
                            min="09:00" 
                            max="18:00" 
                            required
                            value={this.state.horario} 
                            onChange={this.setDados} />
                            <p id='BotaoCadastrar'><button id='BotaoCad' >Cadastrar</button></p>
                        </form>
                    </div>
                </div>
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
                                    <tr id="lista">
                                        <td id='td1'>001</td>
                                        <td id='td2'>{this.state.tipoMaterial[0].value}</td>
                                        <td id='td3'>{this.props.qtdTamanho}</td>
                                        <td id='td4'><input id="Check1" type="checkbox" /></td>
                                        <td id='td5'><input id="Check2" type="checkbox" /></td>
                                        <td id='td6'><input id="Check3" type="checkbox" /></td>
                                    </tr>
                                    <tr>
                                        <td id='td1'>002</td>
                                        <td id='td2'>Retalhos de tecido</td>
                                        <td id='td3'>30m</td>
                                        <td id='td4'><input id="Check1" type="checkbox" /></td>
                                        <td id='td5'><input id="Check2" type="checkbox" /></td>
                                        <td id='td6'><input id="Check3" type="checkbox" /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button id='Atualizar'>Atualizar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        tipoM: state.materialReducer.tipoMaterial,
        qtdTamanho: state.materialReducer.qtdTam
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
      cadastrarM: (dadosMaterial) => { dispatch(fetchCadastrarMaterial(dadosMaterial))}
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BlocoAddMaterial);