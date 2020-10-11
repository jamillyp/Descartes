import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchCadastrarMaterial } from '../../store/actions/actionCadastroM';


class BlocoAddMaterial extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            tipoMaterial: '',
            qtdTam: '',
            disponibilidade: '',
            horario: ''
        }
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
                            <p id='BotaoCadastrar'><button id='BotaoCad' type="submit">Cadastrar</button></p>
                        </form>
                    </div>
                    <Link to="/perfilArtesao">Ver perfilArtesao</Link>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        material: state.EmpLogadaReducer.materiais
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
      cadastrarM: (dadosMaterial) => { dispatch(fetchCadastrarMaterial(dadosMaterial))}
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(BlocoAddMaterial);