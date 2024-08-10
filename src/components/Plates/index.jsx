import { Container, ButtonArrow, Gradient } from './styles';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Card } from '../../components/Card';


export function Plates({ addToOrderList, plates, ...rest }) {
  const sliderRefs = [useRef(null), useRef(null), useRef(null)];
  
  const settings = {
    className: "center",
    centerMode: true,
    dots: false,
    arrows: false,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    focusOnSelect: true,
    swipeToSlide: true,
    variableWidth: true,
  };  

  const categories = [...new Set(plates.map(plate => plate.category))];

  return (
    <Container {...rest}>
      {categories.map((category, index) => {
        const filteredPlates = plates.filter(plate => plate.category === category);
        
        return (
          <div className="content" key={category}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            

            <Slider ref={sliderRefs[index]} {...settings}>
              {
                filteredPlates.map(plate => (
                  <Card
                    key={String(plate.id)}
                    data={plate}
                    addToOrderList={addToOrderList}
                  />
                ))
              }
            </Slider>

            <Gradient>
              <div className="gradient left"></div>
              <div className="gradient right"></div>
            </Gradient>

            <ButtonArrow>
              <button className='arrow left' onClick={() => sliderRefs[index].current.slickPrev()}><SlArrowLeft /></button>
              <button className='arrow right' onClick={() => sliderRefs[index].current.slickNext()}><SlArrowRight /></button>
            </ButtonArrow>
          </div>
        );
      })}

    </Container>
  )
}

