import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './styles.css';
import { connect } from 'react-redux';

class CadastroArtesao extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: '', cpf:'', dataNasc:'', endereco:'',
      numero:'', complemento:'', cep:'', cidade:'',
      tel1:'', tel2: '', email:'', senha:'',
      senhaRep: ''}
      this.setEmail = this.setEmail.bind(this)
      this.setSenhaVer = this.setSenhaVer.bind(this)
      this.setSenha = this.setSenha.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      this.setEndereco = this.setEndereco.bind(this)
      this.setNumero = this.setNumero.bind(this)
      this.setDataNasc = this.setDataNasc.bind(this)
      this.setCidade = this.setCidade.bind(this)
      this.setCPF = this.setCPF.bind(this)
      this.setComplemento = this.setComplemento.bind(this)
      this.setTel1 = this.setTel1.bind(this)
      this.setTel2 = this.setTel2.bind(this)
      this.setNome = this.setNome.bind(this)
      this.setCEP = this.setCEP.bind(this)

  }

  setEndereco(e){
    this.setState({endereco: e.target.value})
  }
  setNumero(e){
    this.setState({numero: e.target.value})
  }
  setComplemento(e){
    this.setState({complemento: e.target.value})
  }
  setCidade(e){
    this.setState({cidade: e.target.value})
  }
  setTel1(e){
    this.setState({tel1: e.target.value})
  }
  setTel2(e){
    this.setState({tel2: e.target.value})
  }
  setEmail(e){
    this.setState({email: e.target.value})
  }
  setSenha(e){
    this.setState({senha: e.target.value})
  }
  setSenhaVer(e){
    this.setState({senhaRep: e.target.value})
  }
  setNome(e){
    this.setState({nome: e.target.value})
  }
  setCPF(e){
    this.setState({cpf: e.target.value})
  }
  setDataNasc(e){
    this.setState({dataNasc: e.target.value})
  }
  setCEP(e){
    this.setState({cep: e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    console.log(this.state)
    this.setState({nome: '', cpf: '', dataNasc:'', endereco:'', numero:'',
    complemento:'',cep:'', cidade:'', tel1:'', tel2:'', email:'', senha:'', senhaRep:''})
    alert(this.props.userCadastro)
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
                  value={this.state.nome}
                  onChange={this.setNome}
                  placeholder="Nome Completo*"
                  className="inputMaior"
                />
                <br />
                <input
                  type="text"
                  value={this.state.cpf}
                  onChange={this.setCPF}
                  placeholder="CPF*"
                  className="inputMenor"
                />
                <input
                  type="data"
                  value={this.state.dataNasc}
                  onChange={this.setDataNasc}
                  placeholder="Data de Nascimento*"
                  className="inputMenor"
                />
                <br />
                <input
                  type="text"
                  value={this.state.endereco}
                  onChange={this.setEndereco}
                  placeholder="Endereço*"
                  className="inputMaior"
                />
                <br />
                <input
                  type="text"
                  value={this.state.numero}
                  onChange={this.setNumero}
                  placeholder="Nº*"
                  className="inputMenor1"
                />
                <input
                  type="text"
                  value={this.state.complemento}
                  onChange={this.setComplemento}
                  placeholder="Complemento*"
                  className="inputMenor1"
                />
                <input
                  type="text"
                  value={this.state.cep}
                  onChange={this.setCEP}
                  placeholder="CEP*"
                  className="inputMenor1"
                />
                <input
                  type="text"
                  value={this.state.cidade}
                  onChange={this.setCidade}
                  placeholder="Cidade/UF*"
                  className="inputMenor1"
                />
                <br />
                <input
                  type="text"
                  value={this.state.tel1}
                  onChange={this.setTel1}
                  placeholder="Telefone 1*"
                  className="inputMenor"
                />
                <input
                  type="text"
                  value={this.state.tel2}
                  onChange={this.setTel2}
                  placeholder="Telefone 2*"
                  className="inputMenor"
                />
                <br /> 
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.setEmail}
                  placeholder="E-mail*"
                  className="inputMaior"
                /><br />
                <input
                  type="password"
                  value={this.state.senha}
                  onChange={this.setSenha}
                  placeholder="Senha*"
                  className="inputMenor"
                />
                <input
                  type="password"
                  value={this.state.senhaRep}
                  onChange={this.setSenhaVer}
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
      userCadastro: state.authReducer.Mensagem
  }
}

export default connect(mapStateToProps)(CadastroArtesao);
