import AgendamientoSrc from "@/assets/images/Module/Agendamiento.png";
import OficinaSrc from "@/assets/images/Module/OficinaSrc.png";
import TurnoVirtualSrc from "@/assets/images/Module/TurnoVirtualSrc.png";

import { CardsContainer } from "@/styled-components/Module/layout";
import Card from "./Card";

const Cards = () => {
  return (
    <CardsContainer>
      <div className="box" id="Agendamiento">
        <h4 className="Title">Agendamiento</h4>
        <Card src={AgendamientoSrc} idContainer="Agendamiento">
          <ul>
            <p className="title-ul">Funciones principales</p>
            <li className="secondaryMistery">Módulo muy flexible para rápida y sencilla implementación</li>
            <li className="secondaryMistery">Fácilmente parametrizable</li>
            <li className="secondaryMistery">Multicanal (Web, App y Whatsapp)</li>
          </ul>
        </Card>
      </div>
      <div className="box" id="Oficinas">
        <h4 className="Title">Oficina Virtual</h4>
        <Card src={OficinaSrc} idContainer="Oficinas">
          <ul>
            <p className="title-ul">Solución Omnicanal</p>
            <li className="secondaryMistery">Videollamada</li>
            <li className="secondaryMistery">Chat entre asesor y paciente</li>
            <li className="secondaryMistery">Transferencia fácil de archivos</li>
            <li className="secondaryMistery">Pantalla compartida</li>
            <li className="secondaryMistery">Grabación de atención opcional</li>
          </ul>
        </Card>
      </div>
      <div className="box" id="TurnoVirtual">
        <h4 className="Title">Turno Virtual</h4>
        <Card src={TurnoVirtualSrc} idContainer="TurnoVirtual">
          <ul>
            <p className="title-ul">Posibilidad de tomar turnos en el teléfono</p>
            <li className="secondaryMistery">Pre Llamado</li>
            <li className="secondaryMistery">Tiempos estimados de atención</li>
            <li className="secondaryMistery">Videos en la espera</li>
            <li className="secondaryMistery">Turnos anteriores</li>
            <li className="secondaryMistery">Nuevas vías de autogestión</li>
          </ul>
        </Card>
      </div>
    </CardsContainer>
  );
};

export default Cards;
