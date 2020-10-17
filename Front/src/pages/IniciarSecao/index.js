import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchFazerLogin } from '../../store/actions/actionLogin';
import { Container } from 'react-bootstrap';

import './styles.css';

class logarFunc extends Component {

    constructor(props){
        super(props)
        this.state = { 
            email: '', senha: ''
        }
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
        this.setState({email:'', senha:''})
        this.props.loginGeral(this.state)
    }

    render() {
        return (
            <Container>
                <div className="Cadastro">
                <div className="cadastrar">
                    <form method='post' action='/logado'  className="estilo-cadastro" onSubmit={this.onSubmit}>
                        <br />
                        <h2>Iniciar Seção</h2>
                        <input
                        type="text" 
                        name="email"
                        value={this.state.email}
                        onChange={this.setValores}
                        placeholder="E-mail" />
                        <br />
                        <input
                        type="password" 
                        name="senha"
                        value={this.state.senha}
                        onChange={this.setValores}
                        placeholder="Senha" />
                        <br />
                        
                        <Link to="/esqueciSenha" id='esqueceu'>Esqueci minha senha</Link><br />

                        <button type="submit">Entrar</button><br />
                    </form>
                </div>
                
            </div>
            </Container>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        id: state.logarFunc
    }
  }

function mapDispatchToProps(dispatch) {
    return {
      loginGeral: (dadosLogin) => { dispatch(fetchFazerLogin(dadosLogin))}
    }
  }

export default connect( mapStateToProps, mapDispatchToProps)(logarFunc);


