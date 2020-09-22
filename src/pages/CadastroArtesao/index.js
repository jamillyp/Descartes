import React, { Component } from "react";
import Navegador from "../../components/Navegador";
import subNav from "../../components/SubNav";

export class CadastroArtesao extends Component {
  render() {
    return (
      <div className="cadastroEmpresa">
        <Navegador />
        <subNav />
        <div className="idEmpresa">
          <form method="POST">
            <fieldset className="Artesão">
              <button type="submit">Empresa</button>
              <button type="submit">Artesão</button>
              <br />
              <input type="text" placeholder="Nome completo*"></input>
              <br />
              <input type="text" placeholder="E-mail*"></input>
              <br />
              <input type="text" placeholder="CPF*"></input>
              <br />
              <input type="text" placeholder="Data de Nascimento"></input>
              <br />
              <input type="text" placeholder="Endereço"></input>
              <br />
              <input type="text" placeholder="Número*"></input>
              <input type="text" placeholder="Bairro*"></input>
              <br />
              <input type="text" placeholder="Telefone 1*"></input>
              <br />
              <input type="text" placeholder="Telefone 2*"></input>
              <br />
              <p>
                Ao clicar em "Enviar" você concorda com os Termos e Condições
                <br />
                do Descartes e confirma que leu a política de privacidade.
              </p>
              <button type="submit">Enviar</button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default CadastroArtesao;
