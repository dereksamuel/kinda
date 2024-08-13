import { KnowMoreContainer } from "@/styled-components/Home/layout";

import KnowMoreImage from "@/assets/images/Home/KnowMoreBg.png";
import { Button } from "@/styled-components/inputOutput";

const KnowMore = () => {
  return (
    <KnowMoreContainer $src={KnowMoreImage}>
      <div className="boxcontent">
        <div className="contentText">
          <h3>MIDE, CONTROLA Y DISMINUYE</h3>
          <p>tiempos de espera y atención a pacientes, además <strong>aumenta</strong> los tiempos de utilización de recursos de las instituciones.</p>
        </div>
        <Button variant="white">Descubre más</Button>
      </div>
    </KnowMoreContainer>
  );
};

export default KnowMore;
