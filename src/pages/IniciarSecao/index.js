import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class logarFunc extends Component {

    constructor(props){
        super(props)
        this.state = { 
            email: '', senha: ''
        }
        this.setEmail = this.setEmail.bind(this)
        this.setSenha = this.setSenha.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setEmail(e){
        this.setState({email: e.target.value})
    }
    setSenha(e){
        this.setState({senha: e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        console.log(this.state)
        this.setState({email:'', senha:''})
        alert(this.props.userCadastro)
    }

    render() {
        return (
            <div className="Cadastro">
                <div className="cadastrar">
                    <form  className="estilo-cadastro" onSubmit={this.onSubmit}>
                        <br />
                        <h2>Iniciar Seção</h2>
                        <input
                        type="text" 
                        name="email"
                        value={this.state.email}
                        onChange={this.setEmail}
                        placeholder="    E-mail" />
                        <br />
                        <input
                        type="password" 
                        name="senha"
                        value={this.state.senha}
                        onChange={this.setSenha}
                        placeholder="     Senha" />
                        <br /><br />
                        
                        <Link to="/esqueciSenha">Esqueci minha senha</Link><br /><br />

                        <button type="submit">Entrar</button><br />
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
return {
    userCadastro: state.authReducer.MensagemLogin
    }
}

export default connect(mapStateToProps)(logarFunc);


