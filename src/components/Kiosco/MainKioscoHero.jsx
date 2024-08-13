import { ModuleHeroContainer } from "@/styled-components/Module/layout";
import HeroKiosco from "@/assets/images/Kiosco/Intro.png";

const MainKioscoHero = () => {
  return (
    <ModuleHeroContainer $src={HeroKiosco}>
      <h3 className="kioscos">KIOSKOS</h3>
      <p className="k-desc"><strong>BRILLIANT SMART INTERACTIVE</strong><strong style={{ fontWeight: 400, display: "block" }}>soluciones inteligentes para cada</strong> paso del Customer Journey</p>
    </ModuleHeroContainer>
  );
};

export default MainKioscoHero;
