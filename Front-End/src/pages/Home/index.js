import React, { Component } from "react";

import "./styles.css";

import Pesquisa from "../../components/BarraPesquisa";
import Footer from "../../components/Footer";
import Carousel from "../Carousel";
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
          <Loja></Loja>

          <Footer />
        </body>
      </div>
    );
  }
}
