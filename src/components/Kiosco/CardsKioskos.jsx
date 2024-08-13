import Atril1Src from "@/assets/images/Module/Agendamiento.png";
import OficinaSrc from "@/assets/images/Module/OficinaSrc.png";
import TurnoVirtualSrc from "@/assets/images/Module/TurnoVirtualSrc.png";

import { CardsContainer } from "@/styled-components/Module/layout";
import Card from "../Module/Card";

const CardsKioskos = () => {
  return (
    <>
      <CardsContainer>
        <div className="box start">
          <h4 className="Title" style={{ margin: 0 }}>Kiosco dispensador de turnos</h4>
          <small style={{ paddingBottom: "15px" }}>BSI-AP21</small>
          <Card src={Atril1Src} rect>
            <ul>
              <li>Módulo muy flexible para rápida y sencilla implementación.</li>
              <li>Fácilmente parametrizable.</li>
              <li>Multicanal (Web, App y Whatsapp).</li>
            </ul>
          </Card>
        </div>
        <div className="box start">
          <h4 className="Title" style={{ margin: 0 }}>Atril dispensador de turnos compacto de escritorio</h4>
          <small style={{ paddingBottom: "15px" }}>BSI-AL15</small>
          <Card src={OficinaSrc} rect>
            <ul>
              <li>Módulo muy flexible para rápida y sencilla implementación.</li>
              <li>Fácilmente parametrizable.</li>
              <li>Multicanal (Web, App y Whatsapp).</li>
            </ul>
          </Card>
        </div>
        <div className="box start">
          <h4 className="Title" style={{ margin: 0 }}>Atril Informacional</h4>
          <small style={{ paddingBottom: "15px" }}>BSI-AV15</small>
          <Card src={TurnoVirtualSrc} rect>
            <ul>
              <li>Módulo muy flexible para rápida y sencilla implementación.</li>
              <li>Fácilmente parametrizable.</li>
              <li>Multicanal (Web, App y Whatsapp).</li>
            </ul>
          </Card>
        </div>
      </CardsContainer>
      <CardsContainer>
        <div className="box start">
          <h4 className="Title" style={{ margin: 0 }}>Kiosco Transaccional</h4>
          <small style={{ paddingBottom: "15px" }}>BSI-KT21</small>
          <Card src={Atril1Src} rect>
            <ul>
              <li>Módulo muy flexible para rápida y sencilla implementación.</li>
              <li>Fácilmente parametrizable.</li>
              <li>Multicanal (Web, App y Whatsapp).</li>
            </ul>
          </Card>
        </div>
        <div className="box start">
          <h4 className="Title" style={{ margin: 0 }}>Kiosco QSR</h4>
          <small style={{ paddingBottom: "15px" }}>BSI-KQ32</small>
          <Card src={OficinaSrc} rect>
            <ul>
              <li>Módulo muy flexible para rápida y sencilla implementación.</li>
              <li>Fácilmente parametrizable.</li>
              <li>Multicanal (Web, App y Whatsapp).</li>
            </ul>
          </Card>
        </div>
        <div className="box start">
          <h4 className="Title" style={{ margin: 0 }}>Kiosco Impacto</h4>
          <small style={{ paddingBottom: "15px" }}>BSI-KI46</small>
          <Card src={TurnoVirtualSrc} rect>
            <ul>
              <li>Módulo muy flexible para rápida y sencilla implementación.</li>
              <li>Fácilmente parametrizable.</li>
              <li>Multicanal (Web, App y Whatsapp).</li>
            </ul>
          </Card>
        </div>
      </CardsContainer>
      <CardsContainer>
        <div className="box start">
          <h4 className="Title" style={{ margin: 0 }}>Totem Indoor</h4>
          <small style={{ paddingBottom: "15px" }}>BSI-TO65</small>
          <Card src={Atril1Src} rect>
            <ul>
              <li>Módulo muy flexible para rápida y sencilla implementación.</li>
              <li>Fácilmente parametrizable.</li>
              <li>Multicanal (Web, App y Whatsapp).</li>
            </ul>
          </Card>
        </div>
      </CardsContainer>
    </>
  );
};

export default CardsKioskos;
