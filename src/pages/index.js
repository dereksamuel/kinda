import Menu from "@/components/Menu";
import ImageHero from "@/components/Home/ImageHero";
import KnowMore from "@/components/Home/KnowMore";
import OurClients from "@/components/Home/OurClients";
import { Separator } from "@/styled-components/layout";

import MainImage from "@/assets/images/Home/MainImage.png";
import SimpleSlider from "@/components/SimpleSlider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <>
      <Menu />
      <ImageHero src={MainImage} alt="logo" />
      <Separator $right />
      <SimpleSlider />
      <Separator />
      <KnowMore />
      <OurClients />
    </>
  );
}
