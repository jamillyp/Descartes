import React, { Component } from "react";

import Pesquisa from "../../components/BarraPesquisa";
import Carousel from "../../components/Carousel";
import Sobre from "../Sobre";
import Parceiros from "../Parceiros";
import Loja from "../Loja";

export default class Home extends Component {
  render() {
    return (
      <div>
        <body>
          <Pesquisa />
          <Carousel />
          <Sobre />
          <Parceiros />
          <Loja />
        </body>
      </div>
    );
  }
}
