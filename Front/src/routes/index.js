import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import CadastroEmpresa from "../pages/CadastroEmpresa";
import iniciarSecao from "../pages/IniciarSecao";
import CadastroArtesao from "../pages/CadastroArtesao";
import perfilArtesao from "../pages/ArtesaoPerfil";
import empresaPerfil from "../pages/EmpresaPerfil";
import PerfilEmpVisualizar from "../pages/PerfilEmpVisualizar";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/iniciarSecao" component={iniciarSecao} />
        <Route path="/cadastrarEmpresa" component={CadastroEmpresa} />
        <Route path="/cadastrarArtesao" component={CadastroArtesao} />
        <Route path="/perfilArtesao" component={perfilArtesao} />
        <Route path="/perfilEmpresa" component={empresaPerfil} />
        <Route path="/perfilEmpresaVisualizacao/:id" component={PerfilEmpVisualizar} />
      </Switch>
    );
  }
}
