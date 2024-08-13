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
      <ImgSteps src={ImgStepsSrc}>
        <ul>
          <li>
            <p className="number">1.</p>
            <p><strong>Sistema de citas Kinda o integración</strong> con sistema de citas de la institución.</p>
          </li>
          <li>
            <p className="number">2.</p>
            <p><strong>Manejo de prioridades</strong> en el tiempo de llegada, citas, perfil del cliente, prioritario (edad/embarazo/discapacidad) y trámites.</p>
          </li>
          <li>
            <p className="number">3.</p>
            <p><strong>Autogestión</strong> del proceso de admisión, incluido pagos, validación de identidad, firma y escaneo de documentos.</p>
          </li>
          <li>
            <p className="number">4.</p>
            <p><strong>Panel doctor</strong> consultorio.</p>
          </li>
        </ul>
      </ImgSteps>
      <ImgSteps src={ImgSteps2Src} isSecondary>
        <ul className="secondary">
          <li>
            <p className="number">5.</p>
            <p><strong>Señalización digital inteligente</strong> de consultorios.</p>
          </li>
          <li>
            <p className="number">6.</p>
            <p><strong>Wayfinding - guiado</strong> con realidad aumentada (AR).</p>
          </li>
          <li>
            <p className="number">7.</p>
            <p><strong>Información completa de proceso de urgencias</strong> en móvil para familiares y pacientes.</p>
          </li>
          <li>
            <p className="number">8.</p>
            <p><strong>Panel doctor</strong> urgencias.</p>
          </li>
        </ul>
      </ImgSteps>
      <CardsSecondary />
    </>
  );
}
