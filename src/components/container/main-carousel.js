import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  kos1,
  kos2,
  kos3,
  kos4,
  kos5,
  kos6,
  kos7,
  kos8,
} from "../../assets/img";

class MainCarousel extends Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={kos1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={kos2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={kos3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default MainCarousel;
