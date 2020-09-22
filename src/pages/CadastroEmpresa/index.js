import React, { Component } from "react";
import subNav from "../../components/SubNav";
import "./styles.css";

export class CadastroEmpresa extends Component {


  render() {
    return (
      <div className="cadastroEmpresa">
        <subNav />

        <div className="idEmpresa">
          <form method="POST">
            <fieldset className="Empresa">
              <br />
              <h2>Cadastro</h2><br />
              <button type="submit" className="botaoSeletor">
                Empresa
              </button>
              <button type="submit" className="botaoSeletor">
                Artesão
              </button>
              <br />

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
                className="inputMaior"
              />
              <br />
              <input
                type="text"
                Component="input"
                placeholder="CNPJ*"
                className="inputMaior"
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
                placeholder="Bairro*"
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
                Ao clicar em "Enviar" você concorda com os{" "}
                <strong>
                  Termos e Condições
                  <br />
                  do Descartes
                </strong>{" "}
                e confirma que leu a <strong>Política de Privacidade.</strong>
              </p><br />
              <button type="submit" className="enviarEmpresa">
                Enviar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default CadastroEmpresa;
