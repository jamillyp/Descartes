import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import CadastroEmpresa from "../pages/CadastroEmpresa";
import iniciarSecao from "../pages/IniciarSecao";
import perfilEmpresa from "../pages/PerfilEmpresa"

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/iniciarSecao" component={iniciarSecao} />
        <Route path="/cadastrar" component={CadastroEmpresa} />
        <Route path="/perfilEmpresa" component={perfilEmpresa} />
      </Switch>
    );
  }
}
