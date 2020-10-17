import React from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import "./styles.css";


import logo from "../../assets/images/descarteslogo.png";
import perfil from "../../assets/svg/perfil.svg";
import notificacao from "../../assets/svg/notificacao.svg";
import favoritos from "../../assets/svg/favoritos.svg";
import sacola from "../../assets/svg/sacola.svg";
import mapa from "../../assets/svg/mapa.svg";

class Navegador extends React.Component {
  render() {

    const notify = () => {
      toast('Juliana solicitou o seu material: Papel, 30kg')
    }

    return (
      <div className="Navegador">
        <div className="Navegador-principal">
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
                <a to="">
                  <img
                    src={notificacao}
                    alt="notificacao"
                    className="notificacao"
                    onClick={notify}
                  />
                  Notificações
                </a>
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
        </div>
      </div>
    );
  }
}

export default Navegador;
