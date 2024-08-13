import MainKioscoHero from "@/components/Kiosco/MainKioscoHero";
import { Separator } from "@/styled-components/layout";
import CardsKioskos from "@/components/Kiosco/CardsKioskos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Kiosco() {
  return (
    <>
      <MainKioscoHero />
      <Separator $left $variant="secondaryRadiant" />
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", alignItems: "center", maxWidth: "1700px", margin: "0 auto", }}>
        <CardsKioskos />
      </div>
    </>
  );
}
