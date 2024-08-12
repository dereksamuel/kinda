import { ModuleHeroContainer } from "@/styled-components/Module/layout";
import HeroModule from "@/assets/images/Module/Intro.png";

const MainModuleHero = () => {
  return (
    <ModuleHeroContainer $src={HeroModule}>
      <h3>MÓDULOS</h3>
      <p>Con <strong>Kinda</strong> tienes la opción de adquirir todos los módulos para una atención 100% omnicanal o módulos individuales que se integran a los sistemas y procesos existentes en la institución.</p>
    </ModuleHeroContainer>
  );
};

export default MainModuleHero;
