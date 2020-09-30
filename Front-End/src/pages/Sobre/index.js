import React, { Component } from "react";
import "./styles.css";
import video from "../../assets/video/video_conceitual.mp4";
import videoThumb from "../../assets/svg/video.svg";
import youtube from "../../assets/svg/youtube@4x.svg";
import instagram from "../../assets/svg/instagran@4x.svg";

export default class Sobre extends Component {
  render() {
    return (
      <div >
        <div className="sobre-titulo">
          <h2>Somos uma rede colaborativa que ajuda você,</h2>
          <h2 className="h2-azul">empresa e artesão</h2>
          
        </div>
        <div className="sobre">
            <div className="texto-sobre">
            
            <h2>Confira o vídeo e saiba como atuamos!</h2><br/><br/>
            <p>
              A quantidade de resíduos sólidos que são descartados
              <br />
              de maneira incorreta tem sido um dos maiores
              <br />
              problemas dentro da nossa sociedade. Assim, a<br />
              Descartes, vem para auxiliar o gereciamento desses
              <br />
              resíduos, atuando como intermediário entre empresas
              <br />
              que quere destinar seus resíduos sólidos descartáveis
              <br />
              para pessoas que as utilizarão para fins artesanais.
            </p><br/><br/>
            <h2>Acompanhem nas nossas redes sociais:</h2><br/>
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
    );
  }
}
