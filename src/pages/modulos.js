import { Separator } from "@/styled-components/layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainModuleHero from "@/components/Module/MainModuleHero";
import Cards from "@/components/Module/Cards";

export default function Modulos() {
  return (
    <>
      <MainModuleHero />
      <Separator $variant="secondaryMistery" />
      <Cards />
    </>
  );
}
