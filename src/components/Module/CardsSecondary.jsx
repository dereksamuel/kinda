import SmartSrc from "@/assets/images/Module/SmartSrc.png";
import SatisfaccionSrc from "@/assets/images/Module/SatisfaccionSrc.png";
import BussinessSrc from "@/assets/images/Module/BussinessSrc.png";

import { CardsContainer } from "@/styled-components/Module/layout";
import Card from "./Card";

const CardsSecondary = () => {
  return (
    <CardsContainer>
      <div className="box" id="Smart">
        <h4 className="Title">Smart Call Center</h4>
        <Card src={SmartSrc} idContainer="Smart">
          <ul>
            <p className="title-ul">Funciones principales</p>
            <li className="secondaryMistery">Información de horarios y direcciones</li>
            <li className="secondaryMistery">Pre-Agendamiento y cancelación de citas con reconocimiento de voz</li>
            <p className="title-ul" style={{ marginTop: "30px" }}>Opcionales</p>
            <li className="secondaryMistery">Transcripción de audio</li>
            <li className="secondaryMistery">Reconocimiento por voz de usuario</li>
            <li className="secondaryMistery">Identificación de identidad por voz y automatización de procesos de integración</li>
          </ul>
        </Card>
      </div>
      <div className="box" id="Satisfaccion">
        <h4 className="Title">Módulo de satisfacción</h4>
        <Card src={SatisfaccionSrc} idContainer="Satisfaccion">
          <ul>
            <p className="title-ul">Ayuda a guiar al cliente a nuevos ciclos de atención</p>
            <li className="secondaryMistery">Cita</li>
            <li className="secondaryMistery">Atención</li>
            <li className="secondaryMistery">Admisión</li>
            <li className="secondaryMistery">Medición de satisfacción</li>
          </ul>
        </Card>
      </div>
      <div className="box" id="Bussiness">
        <h4 className="Title">Bussiness Intelligence</h4>
        <Card src={BussinessSrc} idContainer="Bussiness">
          <ul>
            <p className="title-ul">Facilidad en el análisis data</p>
            <li className="secondaryMistery">Priorización de atención a los usuarios </li>
            <li className="secondaryMistery">Análisis y toma de decisiones en tiempo real</li>
            <li className="secondaryMistery">Seguimiento a efectividad</li>
            <li className="secondaryMistery">Toma de decisiones de recursos</li>
            <p className="title-ul" style={{ marginTop: "30px" }}>Puntos de contacto del Customer Journey</p>
            <li className="secondaryMistery">Comunicación digital</li>
            <li className="secondaryMistery">Turnos y citas</li>
            <li className="secondaryMistery">Proceso de atención</li>
            <li className="secondaryMistery">Atención virtual y presencial</li>
            <li className="secondaryMistery">Puesto de autoservicio</li>
            <li className="secondaryMistery">Canal digital</li>
            <li className="secondaryMistery">Satisfacción</li>
          </ul>
        </Card>
      </div>
    </CardsContainer>
  );
};

export default CardsSecondary;
