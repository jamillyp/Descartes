import React, { Component } from "react";

import Pesquisa from "../../components/BarraPesquisa";
import Carousel from "../../components/Carousel";
import Sobre from "../Sobre";
import Parceiros from "../Parceiros";
import Loja from "../Loja";
import { Container } from 'react-bootstrap'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Pesquisa />
        <Carousel />
        <Sobre />
        <Parceiros />
        <Loja />
      </Container>
    );
  }
}
