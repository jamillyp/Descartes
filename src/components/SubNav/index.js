import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class subNav extends Component {
    render() {
        return (
            <div>
                <nav className="Navegador-menu">
                    <p className="p1">
                        <ul className="ul">
                            <li><a href="" >Sobre</a></li>
                            <li><a href="" >Parceiros</a></li>
                            <li><a href="" >Loja</a></li>
                        </ul>
                    </p>
                    <p className="p2">Bem vindo! <Link to="/iniciarSecao" >{this.props.loginAparece}</Link>
                    <Link to="/cadastrarArtesao" >Cadastre-se</Link></p>
                </nav>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginAparece: state.authReducer.loginInicial
    }
}

export default connect(mapStateToProps)(subNav);