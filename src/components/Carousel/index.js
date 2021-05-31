import React from 'react';
import slider from './slider1.png';
import slider1 from './slider2.png';
import slider2 from './slider3.png';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel';


const Carousele = props => (
  <React.Fragment>
  	 <Carousel>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={slider}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={slider1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={slider2}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
  </React.Fragment>
);

export default Carousel;
