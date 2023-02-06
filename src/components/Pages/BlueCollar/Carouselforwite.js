import React from "react";
import img1 from "../../Images/IMAGE.png";
import img2 from "../../Images/IMAGEphoto2.png";
import img3 from "../../Images/IMAGE3.png";
import img4 from "../../Images/IMAGE4.png";
import { Carousel } from "react-bootstrap";
import "./style/carouselstyle.css";
const CarouselContainer = () => {
  return (
    <>
      <div className='CarouselContainer'>
        <Carousel>
          <Carousel.Item>
            <img className='d-block ' src={img1} alt='First slide' />
            <Carousel.Caption>
              <h3>Fiber cable change</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block' src={img2} alt='Second slide' />
            <Carousel.Caption>
              <h3>Industry machine issue</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block ' src={img3} alt='Third slide' />
            <Carousel.Caption>
              <h3>Wheel Alloy Change</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className='d-block ' src={img4} alt='Third slide' />
            <Carousel.Caption>
              <h3>Roof Cleaning</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselContainer;
