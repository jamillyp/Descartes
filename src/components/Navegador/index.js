import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

import logo from "../../assets/images/descarteslogo.png";
import perfil from "../../assets/svg/perfil.svg";
import notificacao from "../../assets/svg/notificacao.svg";
import favoritos from "../../assets/svg/favoritos.svg";
import sacola from "../../assets/svg/sacola.svg";
import mapa from "../../assets/svg/mapa.svg";


class Navegador extends React.Component {
  render() {
    return (
      <div className="Navegador">
        <nav className="Navegador-principal">
          <div className="logo">
            <Link to="/">
              <img
                src={logo}
                id="logo"
                alt="Logo-descartes"
                name="logo"
              />
            </Link>
          </div>
          <div className="Nav-icones">
            <ul className="ul">
              <li>
                <Link to={"/iniciarSecao"}>
                  <img src={perfil} alt="perfil" className="perfil" />
                  Minha conta
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img
                    src={notificacao}
                    alt="notificacao"
                    className="notificacao"
                  />
                  Notificações
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img
                    src={favoritos}
                    alt="favoritos"
                    className="favoritos"
                  />
                  Favoritos
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={sacola} 
                  alt="sacola" 
                  className="sacola" />
                  Sacola
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src={mapa} 
                  alt="mapa" 
                  className="mapa" />
                  Mapa
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navegador;
