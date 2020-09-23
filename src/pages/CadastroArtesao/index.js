import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './styles.css';

export class CadastroArtesao extends Component {

  render() {
    return (
      <div className="cadastroArtesao">
        <div className="idArtesao">

            <div className="link-empresa">

              <Link to="/CadastrarEmpresa">Quero criar cadastro empresa</Link>
              
            </div>

            <form method="POST">
              <fieldset className="Artesao">
                <br />
                <h2>Cadastre seus dados</h2><br />
                <p>*Todos os campos com asterisco o preenchimento é obrigatório.</p>
                <input
                  type="text"
                  Component="input"
                  placeholder="Nome Completo*"
                  className="inputMaior"
                />
                <br />
                <input
                  type="text"
                  Component="input"
                  placeholder="CPF*"
                  className="inputMenor"
                />
                <input
                  type="text"
                  Component="input"
                  placeholder="Data de Nascimento*"
                  className="inputMenor"
                />
                <br />
                <input
                  type="text"
                  Component="input"
                  placeholder="Endereço*"
                  className="inputMaior"
                />
                <br />
                <input
                  type="text"
                  Component="input"
                  placeholder="Nº*"
                  className="inputMenor1"
                />
                <input
                  type="text"
                  Component="input"
                  placeholder="Complemento*"
                  className="inputMenor1"
                />
                <input
                  type="text"
                  Component="input"
                  placeholder="CEP*"
                  className="inputMenor1"
                />
                <input
                  type="text"
                  Component="input"
                  placeholder="Cidade/UF*"
                  className="inputMenor1"
                />
                <br />
                <input
                  type="text"
                  Component="input"
                  placeholder="Telefone 1*"
                  className="inputMenor"
                />
                <input
                  type="text"
                  Component="input"
                  placeholder="Telefone 2*"
                  className="inputMenor"
                />
                <br /> 
                <input
                  type="text"
                  Component="input"
                  placeholder="E-mail*"
                  className="inputMaior"
                /><br />
                <input
                  type="text"
                  Component="input"
                  placeholder="Senha*"
                  className="inputMenor"
                />
                <input
                  type="text"
                  Component="input"
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
                <button type="submit" className="botaoArtesao">
                  Cadastrar
                </button>
              </fieldset>
            </form>
            </div>
        
      </div>
    );
  }
}

export default CadastroArtesao;
