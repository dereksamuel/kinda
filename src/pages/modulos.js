import { Separator } from "@/styled-components/layout";

import MainModuleHero from "@/components/Module/MainModuleHero";
import Cards from "@/components/Module/Cards";
import CardsSecondary from "@/components/Module/CardsSecondary";
import ImgSteps from "@/components/Module/ImgSteps";

import ImgStepsSrc from "@/assets/images/Module/img-steps.png";
import ImgSteps2Src from "@/assets/images/Module/img-steps-2.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Modulos() {
  return (
    <>
      <MainModuleHero />
      <Separator $variant="secondaryMistery" />
      <Cards />
      <ImgSteps src={ImgStepsSrc} />
      <ImgSteps src={ImgSteps2Src} />
      <CardsSecondary />
    </>
  );
}
