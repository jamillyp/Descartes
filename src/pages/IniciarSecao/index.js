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
                        name="email"
                        placeholder="    E-mail" />
                        <br />
                        <input
                        type="numero" 
                        name="senha"
                        placeholder="     Senha" />
                        <br /><br />
                        
                        <Link to="/esqueciSenha">Esqueci minha senha</Link><br /><br />

                        <button type="submit">Entrar</button><br />
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


