import React from "react";
import Slider from "react-slick";

import Slide1 from "@/assets/images/Home/Slide1.png";
import Slide2 from "@/assets/images/Home/Slide2.png";
import Slide3 from "@/assets/images/Home/Slide3.png";
import Slide4 from "@/assets/images/Home/Slide4.png";
import Slide5 from "@/assets/images/Home/Slide5.png";
import Slide6 from "@/assets/images/Home/Slide6.png";
import ArrowNext from "@/assets/images/Home/ArrowNext.png";
import ArrowPrev from "@/assets/images/Home/ArrowPrev.png";
import { SliderContainer, ImageSlider, CarouselText, SliderItem } from "@/styled-components/Home/layout";
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


const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <SliderContainer>
      <Slider {...settings}>
        <SliderItem>
          <CarouselText $position="center">
            <h3>Conoce las <strong>5 As de Kinda</strong> que la hacen única</h3>
          </CarouselText>
          <ImageSlider src={Slide1} alt="logo" width={1700} height={600} />
        </SliderItem>
        <SliderItem>
          <CarouselText $position="left">
            <h3><strong>All-in-One</strong></h3>
            <p>Gestiona la atención virtual y presencial de los pacientes.</p>
            <p>Mide la satisfacción a través de encuestas.</p>
            <p>Administra pagos y procesos de aprobación.</p>
            <p>
              <strong>¡Toda la actividad de tu centro de salud en un mismo lugar!</strong>
            </p>
          </CarouselText>
          <ImageSlider src={Slide2} alt="logo" width={1700} height={600} />
        </SliderItem>
        <SliderItem>
          <CarouselText $position="right">
            <h3><strong>Ágil</strong></h3>
            <p>Reduce el tiempo de espera de tus pacientes.</p>
            <p>Logra un uso más eficiente de tus recursos.</p>
            <p>Haz que tu equipo mejore su desempeño.</p>
            <p>
              <strong>¡Experiencia más satisfactoria para todos!</strong>
            </p>
          </CarouselText>
          <ImageSlider src={Slide3} alt="logo" width={1700} height={600} />
        </SliderItem>
        <SliderItem>
          <CarouselText $position="left">
            <h3><strong className="radiant-green">Amigable</strong></h3>
            <p>Gestiona todos los canales de atención en Kinda: chat, video, autogestión, presencial y call center.</p>
            <p>Puedes integrar fácilmente los sistemas de gestión con los que ya cuentas.</p>
            <p>
              <strong className="radiant-green">¡Todo conectado con Kinda!</strong>
            </p>
          </CarouselText>
          <ImageSlider src={Slide4} alt="logo" width={1700} height={600} />
        </SliderItem>
        <SliderItem>
          <CarouselText $position="right">
            <h3><strong className="radiant-sec">Adaptable</strong></h3>
            <p>Kinda ofrece una multiplicidad de módulos.</p>
            <p>Elígelos todos para una experiencia omnicanal al 100% o selecciona y paga por los que tu centro necesita.</p>
            <p>
              <strong>¡Personaliza tu interfaz!</strong>
            </p>
          </CarouselText>
          <ImageSlider src={Slide5} alt="logo" width={1700} height={600} />
        </SliderItem>
        <SliderItem>
          <CarouselText $position="left">
            <h3><strong className="radiant">AI</strong></h3>
            <p>Próximamente, integraremos herramientas de inteligencia artificial para que la atención en tu centro de salud se destaque aún más.</p>
            <p>
              <strong className="radiant">¡Síguenos para no perderte las novedades!</strong>
            </p>
          </CarouselText>
          <ImageSlider src={Slide6} alt="logo" width={1700} height={600} />
        </SliderItem>
      </Slider>
    </SliderContainer>
  );
};

export default SimpleSlider;
