import React from "react";
import { Carousel } from "react-bootstrap";
import img from "../constants/Img";
import '../pages/Home/home.scss'

const Slider = () => {
  return (
    <div className="slider container mt-5">
      <Carousel indicators={true} controls={true}>
        <Carousel.Item>
          <img className="d-block " src={img.offer1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block " src={img.offer2} alt="Second slide" />
        </Carousel.Item>

      </Carousel>
    </div>
  );
};

export default Slider;
