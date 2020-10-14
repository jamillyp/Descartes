import React, { Component } from "react";
import "./styles.css";
import video from "../../assets/video/video_conceitual.mp4";
import videoThumb from "../../assets/svg/video.svg";
import youtube from "../../assets/svg/youtube@4x.svg";
import instagram from "../../assets/svg/instagran@4x.svg";
import { Container } from 'react-bootstrap';

export default class Sobre extends Component {
  render() {
    return (
      <Container>
        <div >
        <div className="sobre-titulo">
          <h2>Somos uma rede colaborativa que ajuda você,</h2>
          <h2 className="h2-azul">empresa e artesão</h2>
          
        </div>
        <div className="sobre">
            <div className="texto-sobre">
            
            <h4>Confira o vídeo e saiba como atuamos!</h4><br/>
            <p>
              A quantidade de resíduos sólidos que são descartados
              de maneira incorreta tem sido um dos maiores
              problemas dentro da nossa sociedade. Assim, a
              <strong> Descartes</strong>, vem para auxiliar o gereciamento desses
              resíduos, atuando como intermediário entre empresas
              que quere destinar seus resíduos sólidos descartáveis
              para pessoas que as utilizarão para fins artesanais.
            </p>
            <h4>Acompanhem nas nossas redes sociais:</h4><br/>
            <a href="https://www.youtube.com/channel/UCECIHlguuhCiSk24xiSWCew/featured">
              <img src={youtube} alt="youtube logo"></img>/projetodescartes
            </a>
            <a href="https://www.instagram.com/projetodescartes/">
              <img src={instagram} alt="youtube logo"></img>/projetodescartes
            </a>
          </div>
          <div className="video">
            <video controls poster={videoThumb}>
              <source src={video} type="video/mp4"></source>
            </video>
          </div>

        </div>
        
      </div>
      </Container>
      
    );
  }
}
