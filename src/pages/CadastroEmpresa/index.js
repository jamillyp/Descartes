import React, { Component } from "react";
import subNav from "../../components/SubNav";
import "./styles.css";
import { Link } from 'react-router-dom';

export class CadastroEmpresa extends Component {


  render() {
    return (
      <div className="cadastroEmpresa">

        <div className="idEmpresa">

          <div className="link-pfisica">

            <Link to="/CadastrarArtesao">Quero criar cadastro pessoa física</Link>
            
          </div>

          <form method="POST">
            <fieldset className="Empresa">
              <br />
              <h2>Cadastre os dados da empresa</h2><br />
              <p>*Todos os campos com asterisco o preenchimento é obrigatório.</p>
              <input
                type="text"
                Component="input"
                placeholder="Nome da empresa*"
                className="inputMaior"
              />
              <br />
              <input
                type="text"
                Component="input"
                placeholder="Razão Social*"
                className="inputMenor"
              />
              <input
                type="text"
                Component="input"
                placeholder="CNPJ*"
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
                placeholder="Site da empresa*"
                className="inputMaior"
              /><br />
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
              <button type="submit" className="enviarEmpresa">
                Cadastrar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default CadastroEmpresa;
