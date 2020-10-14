import React, { Component } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class subNav extends Component {
    render() {
        return (
            <div className='SubNav'>
                <nav className="Navegador-menu">
                    <p className="p1">
                        <ul className="ul">
                            <li><a href="" >Sobre</a></li>
                            <li><a href="" >Parceiros</a></li>
                            <li><a href="" >Loja</a></li>
                        </ul>
                    </p>
                    <p className="p2">Bem vindo! 
                    {
                        this.props.empresaNome ?
                        <span> {this.props.empresaNome} </span> :
                        <>
                            {
                                (this.props.location.pathname === '/CadastrarEmpresa' 
                                || this.props.location.pathname === '/cadastrarArtesao')
                                || <Link to="/cadastrarArtesao" pathname='Cadastre-se'>Cadastre-se</Link>
                            }
                            {
                                this.props.location.pathname === '/iniciarSecao' || <Link to="/iniciarSecao" pathname='Login'>Login</Link>
                            }
                        </>
                    }
                        
                    </p>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        empresaNome: state.EmpLogadaReducer.nome,
        artesaoNome: state.EmpLogadaReducer.nome
    }
}

export default connect(mapStateToProps)(withRouter(subNav));