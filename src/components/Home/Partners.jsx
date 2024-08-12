import { PartnersContainer } from "@/styled-components/Home/layout";

import PartnersSrc from "@/assets/images/Home/partners.png";
import Image from "next/image";

const Partners = () => {
  return (
    <PartnersContainer $src={PartnersSrc}>
      <div className="container-border-blue">
        <p>Integramos los microservicios de <strong>AWS</strong> y el motor de turnos en la región, <strong>Debmedia.</strong></p>
        <p>Optimiza y potencia la experiencia de tus clientes integrando canales físicos y digitales.</p>
      </div>
    </PartnersContainer>
  );
};

export default Partners;
