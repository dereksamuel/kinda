import React from "react";
import Slider from "react-slick";

import ArrowNext from "@/assets/images/Home/ArrowNext.png";
import ArrowPrev from "@/assets/images/Home/ArrowPrev.png";
import FirstClientPage from "@/assets/images/Home/firstClientPage.png";
import SecondClientPage from "@/assets/images/Home/secondClientPage.png";
import ThirdClientPage from "@/assets/images/Home/thirdClientPage.png";
import { SliderContainerClients, SliderItem } from "@/styled-components/Home/layout";
import Image from "next/image";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image
      src={ArrowNext}
      height={30}
      alt="next"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Image
      src={ArrowPrev}
      alt="prev"
      className={className}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}


const SliderClients = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    speed: 500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <SliderContainerClients>
      <Slider {...settings}>
        <SliderItem>
          <Image style={{ width: "100%", objectFit: "contain" }} src={FirstClientPage} loading="lazy" alt="logo" />
        </SliderItem>
        <SliderItem>
          <Image style={{ width: "100%", objectFit: "contain" }} src={SecondClientPage} loading="lazy" alt="logo" />
        </SliderItem>
        <SliderItem>
          <Image style={{ width: "100%", objectFit: "contain" }} src={ThirdClientPage} loading="lazy" alt="logo" />
        </SliderItem>
      </Slider>
    </SliderContainerClients>
  );
};

export default SliderClients;
