import React from "react";
import sea1 from "../Images/sea1.jpeg";
import sea2 from "../Images/sea2.jpg";
import sea3 from "../Images/sea3.jpg";
import { Carousel } from "react-bootstrap";
import "../../Style.css";
const CarouselContainer = () => {
  return (
    <>
      <div className='CarouselContainer'>
        <h1>Carousel</h1>
        <Carousel>
          <Carousel.Item>
            <img className='d-block ' src={sea1} alt='First slide' />
            <Carousel.Caption>
              <h3>Sea1</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block' src={sea2} alt='Second slide' />
            <Carousel.Caption>
              <h3>Sea2</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block ' src={sea3} alt='Third slide' />

            <Carousel.Caption>
              <h3>Sea3</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselContainer;
