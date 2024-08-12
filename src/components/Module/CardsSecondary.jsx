import SmartSrc from "@/assets/images/Module/SmartSrc.png";
import SatisfaccionSrc from "@/assets/images/Module/SatisfaccionSrc.png";
import BussinessSrc from "@/assets/images/Module/BussinessSrc.png";

import { CardsContainer } from "@/styled-components/Module/layout";
import Card from "./Card";

const CardsSecondary = () => {
  return (
    <CardsContainer>
      <div className="box">
        <h4 className="Title">Smart Call Center</h4>
        <Card src={SmartSrc}>
          <ul>
            <li>Módulo muy flexible para rápida y sencilla implementación.</li>
            <li>Fácilmente parametrizable.</li>
            <li>Multicanal (Web, App y Whatsapp).</li>
          </ul>
        </Card>
      </div>
      <div className="box">
        <h4 className="Title">Módulo de satisfacción</h4>
        <Card src={SatisfaccionSrc}>
          <ul>
            <li>Módulo muy flexible para rápida y sencilla implementación.</li>
            <li>Fácilmente parametrizable.</li>
            <li>Multicanal (Web, App y Whatsapp).</li>
          </ul>
        </Card>
      </div>
      <div className="box">
        <h4 className="Title">Bussiness Intelligence</h4>
        <Card src={BussinessSrc}>
          <ul>
            <li>Módulo muy flexible para rápida y sencilla implementación.</li>
            <li>Fácilmente parametrizable.</li>
            <li>Multicanal (Web, App y Whatsapp).</li>
          </ul>
        </Card>
      </div>
    </CardsContainer>
  );
};

export default CardsSecondary;
