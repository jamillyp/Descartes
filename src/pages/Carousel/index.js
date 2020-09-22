import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import './styles.css';
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";


//importação de imagens Carousel
import img1 from "../../assets/images/banner1.png";
import img2 from "../../assets/images/banner2.png";
import img3 from "../../assets/images/banner3.png";

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        key={img3}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        className="carousel-styles"
        
      >
        <div>
          <img src={img1} alt="Banner 01" />
        </div>
        <div>
          <img src={img2} alt="Banner 01" />
        </div>
        <div>
          <img src={img3} alt="Banner 01" />
        </div>
      </Carousel>
    );
  }
}
