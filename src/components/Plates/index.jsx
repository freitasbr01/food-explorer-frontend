import { Container, ButtonArrow, Gradient } from './styles';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Card } from '../../components/Card';

import ravanello from '../../assets/imgs/ravanello.svg';
import gambe from '../../assets/imgs/gambe.svg';
import parma from '../../assets/imgs/parma.svg';
import prugna from '../../assets/imgs/prugna.svg';
import pastry from '../../assets/imgs/pastry.svg';
import macaron from '../../assets/imgs/macaron.svg';
import expresso from '../../assets/imgs/espresso.svg';
import suco from '../../assets/imgs/suco.svg';
import cha from '../../assets/imgs/cha.svg';


export function Plates({ addToOrderList, ...rest }) {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);

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

  return (
    <Container {...rest}>

      <div className="content">
        <h2>Refeições</h2>        

        <Slider ref={slider1} {...settings}>
          <Card
            img={ravanello}
            title="Salada Ravanello >"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            value="R$ 49,97"
            addToOrderList={addToOrderList}
          />

          <Card
            img={gambe}
            title="Spaguetti Gambe >"
            description="Massa fresca com camarões e pesto. "
            value="R$ 79,97"
            addToOrderList={addToOrderList}
          />

          <Card
            img={parma}
            title="Torradas de Parma >"
            description="Presunto de parma e rúcula em um pão com fermentação natural."
            value="R$ 25,97"
            addToOrderList={addToOrderList}
          />
        </Slider>

        <Gradient>
          <div className="gradient left"></div>
          <div className="gradient right"></div>
        </Gradient>

        <ButtonArrow>
          <button className='arrow left' onClick={() => slider1.current.slickPrev()}><SlArrowLeft /></button>
          <button className='arrow right' onClick={() => slider1.current.slickNext()}><SlArrowRight /></button>
        </ButtonArrow>

      </div>      

      <div className="content">
        <h2>Sobremesas</h2>
        <Slider ref={slider2} {...settings}>
          <Card
            img={prugna}
            title="Prugna Pie >"
            value="R$ 79,97"
            addToOrderList={addToOrderList}
          />

          <Card
            img={pastry}
            title="Peachy pastrie >"
            value="R$ 32,97"
            addToOrderList={addToOrderList}
          />

          <Card
            img={macaron}
            title="Macarons >"
            value="R$ 79,97"
            addToOrderList={addToOrderList}
          />
        </Slider>

        <Gradient>
          <div className="gradient left"></div>
          <div className="gradient right"></div>
        </Gradient>

        <ButtonArrow>
          <button className='arrow left' onClick={() => slider2.current.slickPrev()}><SlArrowLeft /></button>
          <button className='arrow right' onClick={() => slider2.current.slickNext()}><SlArrowRight /></button>
        </ButtonArrow>

      </div>

      <div className="content">
        <h2>Bebidas</h2>
        <Slider ref={slider3} {...settings}>
          <Card
            img={expresso}
            title="Expresso >"
            value="R$ 15,97"
            addToOrderList={addToOrderList}
          />

          <Card
            img={suco}
            title="Suco de maracujá >"
            value="R$ 13,97"
            addToOrderList={addToOrderList}
          />

          <Card
            img={cha}
            title="Tè d'autunno >"
            value="R$ 19,97"
            addToOrderList={addToOrderList}
          />
        </Slider>


        <Gradient>
          <div className="gradient left"></div>
          <div className="gradient right"></div>
        </Gradient>

        <ButtonArrow>
          <button className='arrow left' onClick={() => slider3.current.slickPrev()}><SlArrowLeft /></button>
          <button className='arrow right' onClick={() => slider3.current.slickNext()}><SlArrowRight /></button>
        </ButtonArrow>

      </div>

    </Container>
  )
}