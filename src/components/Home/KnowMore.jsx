import { KnowMoreContainer } from "@/styled-components/Home/layout";

import KnowMoreImage from "@/assets/images/Home/KnowMoreBg.png";

const KnowMore = () => {
  return (
    <KnowMoreContainer $src={KnowMoreImage}>
      <div className="boxcontent">
        <h1>MIDE, CONTROLA Y DISMINUYE</h1>
        <p>tiempos de espera y atención a pacientes, además <strong>aumenta</strong> los tiempos de utilización de recursos de las instituciones.</p>
      </div>
    </KnowMoreContainer>
  );
};

export default KnowMore;
