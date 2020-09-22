import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { submitUserAction } from '../../Actions/login/loginAction';

const logarFunc = props => {
        return (
            <div className="Cadastro">
                <div className="cadastrar">
                    <form  className="estilo-cadastro">
                        <br />
                        <h2>Iniciar Seção</h2>
                        <input
                        type="text" 
                        name="email-cpf"
                        placeholder="e-mail ou CPF" />
                        <br />
                        <input
                        type="numero" 
                        name="senha"
                        placeholder="senha" />
                        <br />
                        
                        <Link to="/esqueciSenha">Esqueci minha senha</Link><br /><br />

                        <button type="submit"><strong>Entrar</strong></button><br />

                        <p>ou</p>

                        <Link to='/cadastrar'><button><strong>Quero me cadastrar</strong></button></Link>
                    </form>
                </div>
                <Footer></Footer>
            </div>
        )
    }
const iniciarSecao = (reduxForm({
    form: 'formEmpresa'
}))(logarFunc)

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {submitUserAction})(iniciarSecao);


