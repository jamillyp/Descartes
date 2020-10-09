import React, { Component } from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCadastrarEmpresa } from '../../store/actions/actionsCadastro';


class CadastroEmpresa extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: '', razaoSocial:'', cnpj:'', endereco:'',
      numero:'', complemento:'', cep:'', cidade:'',
      tel1:'', tel2: '', site:'', email:'', senha:'',
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
    console.log(this.state)

    this.props.cadastrarE(this.state)
    
    this.setState({nome: '', razaoSocial:'', cnpj: '', endereco:'', numero:'',
    complemento:'',cep:'', cidade:'', tel1:'', tel2:'', site:'', email:'', senha:'', senhaRep:''})
  }


  render() {
    return (
      <div className="cadastroEmpresa">

        <div className="idEmpresa">

          <div className="link-pfisica">

            <Link to="/CadastrarArtesao">Quero criar cadastro pessoa física</Link>
            
          </div>

          <form onSubmit={this.onSubmit}>
            <fieldset className="Empresa">
              <br />
              <h2>Cadastre os dados da empresa</h2><br />
              <p>*Todos os campos com asterisco o preenchimento é obrigatório.</p>
              <input
                type="text"
                value={this.state.nome}
                onChange={this.setValores}
                placeholder="Nome da empresa*"
                className="inputMaior"
                name="nome"
              />
              <br />
              <input
                name="razaoSocial"
                type="text"
                value={this.state.razaoSocial}
                onChange={this.setValores}
                placeholder="Razão Social*"
                className="inputMenor"
              />
              <input
                name="cnpj"
                type="text"
                value={this.state.cnpj}
                onChange={this.setValores}
                placeholder="CNPJ*"
                className="inputMenor"
              />
              <br />
              <input
                type="text"
                name="endereco"
                value={this.state.endereco}
                onChange={this.setValores}
                placeholder="Endereço*"
                className="inputMaior"
              />
              <br />
              <input
                type="text"
                name="numero"
                value={this.state.numero}
                onChange={this.setValores}
                placeholder="Nº*"
                className="inputMenor1"
              />
              <input
                type="text"
                name ="complemento"
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
                name="tel1"
                value={this.state.tel1}
                onChange={this.setValores}
                placeholder="Telefone 1*"
                className="inputMenor"
              />
              <input
                type="text"
                name="tel2"
                value={this.state.tel2}
                onChange={this.setValores}
                placeholder="Telefone 2*"
                className="inputMenor"
              />
              <br /> 
              <input
                type="text"
                name="site"
                value={this.state.site}
                onChange={this.setValores}
                placeholder="Site da empresa*"
                className="inputMaior"
              /><br />
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.setValores}
                placeholder="E-mail*"
                className="inputMaior"
              /><br />
              <input
                type="password"
                name="senha"
                value={this.state.senha}
                onChange={this.setValores}
                placeholder="Senha*"
                className="inputMenor"
              />
              <input
                type="password"
                name="senhaRep"
                value={this.state.senhaRep}
                onChange={this.setValores}
                placeholder="Repetir senha*"
                className="inputMenor"
              />
              <br />
              <br />
              <p>
                Ao clicar em "Enviar", você concorda com os{" "}
                <strong>
                  Termos e Condições Gerais
                  do Descartes 
                </strong>{" "}
                e confirma que leu a 
                <strong> Política de <br /> 
                Privacidade.</strong>
              </p><br />
              
              <button type="submit" value="cadastrar" className="enviarEmpresa">
                Cadastrar
              </button><br /><br />
              <Link to="/perfilEmpresa">Ver Perfil</Link>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      id: state.CadastroEmpresa
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cadastrarE: (dadosEmpresa) => { dispatch(fetchCadastrarEmpresa(dadosEmpresa))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CadastroEmpresa);

