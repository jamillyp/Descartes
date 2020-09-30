import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './styles.css';
import { connect } from 'react-redux';
import { fetchCadastrarPessoaf } from '../../store/actions/actionCadastroPF';

class CadastroArtesao extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: '', cpf:'', dataNasc:'', endereco:'',
      numero:'', complemento:'', cep:'', cidade:'',
      tel1:'', tel2: '', email:'', senha:'',
      senhaRep: ''}
      this.setValores = this.setValores.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }

  setValores(e){
    this.setState({...this.state, [e.target.name]: e.target.value})
    console.log(`{ ${e.target.name}: ${e.target.value} }`)
  }
  
  onSubmit(e){
    e.preventDefault()
    this.props.cadastroPessoaf(this.state)
    console.log(this.state)
    this.setState({nome: '', cpf: '', dataNasc:'', endereco:'', numero:'',
    complemento:'',cep:'', cidade:'', tel1:'', tel2:'', email:'', senha:'', senhaRep:''})
  }
  
  render() {
    return (
      <div className="cadastroArtesao">
        <div className="idArtesao">

            <div className="link-empresa">

              <Link to="/CadastrarEmpresa">Quero criar cadastro empresa</Link>
              
            </div>

            <form onSubmit={this.onSubmit}>
              <fieldset className="Artesao">
                <br />
                <h2>Cadastre seus dados</h2><br />
                <p>*Todos os campos com asterisco o preenchimento é obrigatório.</p>
                <input
                  type="text"
                  name= "nome"
                  value={this.state.nome}
                  onChange={this.setValores}
                  placeholder="Nome Completo*"
                  className="inputMaior"
                />
                <br />
                <input
                  type="text"
                  name= "cpf"
                  value={this.state.cpf}
                  onChange={this.setValores}
                  placeholder="CPF*"
                  className="inputMenor"
                />
                <input
                  type="date"
                  name= "dataNasc"
                  value={this.state.dataNasc}
                  onChange={this.setValores}
                  placeholder="Data de Nascimento*"
                  className="inputMenor"
                />
                <br />
                <input
                  type="text"
                  name= "endereco"
                  value={this.state.endereco}
                  onChange={this.setValores}
                  placeholder="Endereço*"
                  className="inputMaior"
                />
                <br />
                <input
                  type="text"
                  name= "numero"
                  value={this.state.numero}
                  onChange={this.setValores}
                  placeholder="Nº*"
                  className="inputMenor1"
                />
                <input
                  type="text"
                  name= "complemento"
                  value={this.state.complemento}
                  onChange={this.setValores}
                  placeholder="Complemento*"
                  className="inputMenor1"
                />
                <input
                  type="text"
                  name= "cep"
                  value={this.state.cep}
                  onChange={this.setValores}
                  placeholder="CEP*"
                  className="inputMenor1"
                />
                <input
                  type="text"
                  name= "cidade"
                  value={this.state.cidade}
                  onChange={this.setValores}
                  placeholder="Cidade/UF*"
                  className="inputMenor1"
                />
                <br />
                <input
                  type="text"
                  name= "tel1"
                  value={this.state.tel1}
                  onChange={this.setValores}
                  placeholder="Telefone 1*"
                  className="inputMenor"
                />
                <input
                  type="text"
                  name= "tel2"
                  value={this.state.tel2}
                  onChange={this.setValores}
                  placeholder="Telefone 2*"
                  className="inputMenor"
                />
                <br /> 
                <input
                  type="text"
                  name= "email"
                  value={this.state.email}
                  onChange={this.setValores}
                  placeholder="E-mail*"
                  className="inputMaior"
                /><br />
                <input
                  type="password"
                  name= "senha"
                  value={this.state.senha}
                  onChange={this.setValores}
                  placeholder="Senha*"
                  className="inputMenor"
                />
                <input
                  type="password"
                  name= "senhaRep"
                  value={this.state.senhaRep}
                  onChange={this.setValores}
                  placeholder="Repetir senha*"
                  className="inputMenor"
                />
                <br />
                <br />
                <p>
                  Ao clicar em "Cadastrar", você concorda com os{" "}
                  <strong>
                    Termos e Condições Gerais
                    do Descartes 
                  </strong>{" "}
                  e confirma que leu a 
                  <strong> Política de <br /> 
                  Privacidade.</strong>
                </p><br />
                <button type="submit" className="botaoArtesao" value="cadastrar">
                  Cadastrar
                </button>
              </fieldset>
            </form>
            </div>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      id: state.cadastroArtesao
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cadastroPessoaf: (dadosPessoaf) => { dispatch(fetchCadastrarPessoaf(dadosPessoaf))}
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(CadastroArtesao);

