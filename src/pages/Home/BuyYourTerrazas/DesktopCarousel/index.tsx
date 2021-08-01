import React, { useRef } from "react";
import Slider from "react-slick";

import ContentContainer from "../../../../components/ContentContainer";
import {
  StyledShopCard,
  CarouselWrapper,
  LeftArrow,
  RightArrow,
} from "./styles";

import { shops } from "../carouselData";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
};

const DesktopCarousel: React.FC = () => {
  const carouselRef = useRef({} as Slider);

  function handleNext() {
    carouselRef.current?.slickNext();
  }

  function handlePrev() {
    carouselRef.current?.slickPrev();
  }

  return (
    <ContentContainer>
      <CarouselWrapper>
        <LeftArrow onClick={handlePrev} />

        <Slider {...settings} ref={carouselRef}>
          {shops.map((shop) => (
            <div key={shop.name}>
              <StyledShopCard data={shop} />
            </div>
          ))}
        </Slider>
        <RightArrow onClick={handleNext} />
      </CarouselWrapper>
    </ContentContainer>
  );
};

export default DesktopCarousel;
