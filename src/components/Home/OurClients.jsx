import { OurClientsContainer, TitleContainerClient } from "@/styled-components/Home/layout";
import OurClientsSrc from "@/assets/images/Home/OurClientsSrc.png";
import SmileSrc from "@/assets/images/Smile.png";

import SliderClients from "./SliderClients";
import Image from "next/image";

const OurClients = () => {
  return <OurClientsContainer $src={OurClientsSrc}>
    <TitleContainerClient>
      <Image src={SmileSrc} alt="smile"></Image>
      <h3>NUESTOS <strong>CLIENTES</strong></h3>
      <p><strong>Kinda</strong> es un producto de <strong>GoBriliant,</strong> empresa con experiencia de más de 14 años atendiendo a grandes instituciones de América Latina</p>
    </TitleContainerClient>
    <SliderClients />
  </OurClientsContainer>;
};

export default OurClients;
