import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEmpresas } from '../../store/actions/actionEmpresa';

import './styles.css';

import lupa from '../../assets/svg/lupa.svg';



class barraPesquisa extends Component {
    
    state = {
        material: '',
        empresa: ''
    }
    
    componentDidMount(){
        this.props.fetchEmpresas();
    }

    alterar = (e) => {
        console.log(e.target.value)
        this.setState({material: e.target.value})
    }

    render() {

        // lista de empresas pro selection
        const gerarListaEmpresas = this.props.empresaX.map(empresa => 
            <option>{empresa.nome}</option>
        )

        return (
            <div className="barraPesquisa">
                <div className="titulo-bpesquisa">
                    <h3><img src={lupa}></img> {this.state.material} Encontre os materiais, locais e empresas que deseja.</h3>
                </div>
                
                <div className="pesquisa-pg1">
                    <div className="busca-material">
                        <label for="material">Qual material busca?</label><br />
                        <select 
                            name="material" 
                            id="material" 
                            value={this.state.material}
                            onChange={this.alterar}
                        >
                            <option value="opcao0" aria-checked="">Selecione o tipo de material. Ex.: Papel</option>
                            <option value="opcao1" >Papel</option>
                            <option value="opcao2">Tecido</option>
                            <option value="opcao3">Papelão</option>
                            <option value="opcao4">Vidro</option>
                            <option value="opcao5">Plástico</option>
                            <option value="opcao6">Gesso</option>
                            <option value="opcao7">Madeira</option>
                        </select>
                    </div>
                    <div className="local-material">
                    <br />
                        <label for="local">Onde deseja encontrar material?</label><br />
                        <input name="local" id="local"></input>
                    <br />
                        <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/">Busca por CEP</a>
                    </div>
                    <div className="busca-empresa">
                        <label for="empresa">Em que empresa busca material?</label><br />
                        <select name="empresa" id="empresa">{gerarListaEmpresas}</select>
                    </div>
                    <div className="pesquisar"><br />
                        <button type="submit" id="botao-pesquisar">Pesquisar</button>
                    </div>        
                </div>
            </div>
            
        )
    }
}
function mapStateToProps(state) {
    console.log('PE----',state)
        return {
            empresaX: state.empresaReducer,
            materialX: state.materialReducer.materiais,
        }
}

export default connect(mapStateToProps, {fetchEmpresas})(barraPesquisa);