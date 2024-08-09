import React from "react";
import Slider from "react-slick";

import Slide1 from "@/assets/images/Home/Slide1.png";
import Slide2 from "@/assets/images/Home/Slide2.png";
import Slide3 from "@/assets/images/Home/Slide3.png";
import Slide4 from "@/assets/images/Home/Slide4.png";
import Slide5 from "@/assets/images/Home/Slide5.png";
import Slide6 from "@/assets/images/Home/Slide6.png";
import { SliderContainer, ImageSlider, CarouselText, SliderItem } from "@/styled-components/layout";

const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        <SliderItem>
          <CarouselText>Conoce las <strong>5 As de Kinda</strong> que la hacen única</CarouselText>
          <ImageSlider src={Slide1} alt="logo" width={1700} height={600} />
        </SliderItem>
        <SliderItem>
          <CarouselText><strong>All-in-One</strong></CarouselText>
          <ImageSlider src={Slide2} alt="logo" width={1700} height={600} />
        </SliderItem>
        <SliderItem>
          <CarouselText><strong>Ágil</strong></CarouselText>
          <ImageSlider src={Slide3} alt="logo" width={1700} height={600} />
        </SliderItem>
        <SliderItem>
          <CarouselText><strong>Amigable</strong></CarouselText>
          <ImageSlider src={Slide4} alt="logo" width={1700} height={600} />
        </SliderItem>
        <SliderItem>
          <CarouselText><strong>Adaptable</strong></CarouselText>
          <ImageSlider src={Slide5} alt="logo" width={1700} height={600} />
        </SliderItem>
        <SliderItem>
          <CarouselText><strong>AI</strong></CarouselText>
          <ImageSlider src={Slide6} alt="logo" width={1700} height={600} />
        </SliderItem>
      </Slider>
    </SliderContainer>
  );
};

export default SimpleSlider;
