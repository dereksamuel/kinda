import AgendamientoSrc from "@/assets/images/Module/Agendamiento.png";
import OficinaSrc from "@/assets/images/Module/OficinaSrc.png";
import TurnoVirtualSrc from "@/assets/images/Module/TurnoVirtualSrc.png";

import { CardsContainer } from "@/styled-components/Module/layout";
import Card from "./Card";

const Cards = () => {
  return (
    <CardsContainer>
      <div className="box">
        <h4 className="Title">Agendamiento</h4>
        <Card src={AgendamientoSrc}>
          <ul>
            <li>Módulo muy flexible para rápida y sencilla implementación.</li>
            <li>Fácilmente parametrizable.</li>
            <li>Multicanal (Web, App y Whatsapp).</li>
          </ul>
        </Card>
      </div>
      <div className="box">
        <h4 className="Title">Oficina Virtual</h4>
        <Card src={OficinaSrc}>
          <ul>
            <li>Módulo muy flexible para rápida y sencilla implementación.</li>
            <li>Fácilmente parametrizable.</li>
            <li>Multicanal (Web, App y Whatsapp).</li>
          </ul>
        </Card>
      </div>
      <div className="box">
        <h4 className="Title">Turno Virtual</h4>
        <Card src={TurnoVirtualSrc}>
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

export default Cards;
