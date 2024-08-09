import { ImageLayer, HeroText, ImageHeroContainer } from "@/styled-components/layout";

const ImageHero = ({ src, alt }) => {
  return (
    <ImageHeroContainer>
      <HeroText>Gestión integral de <strong>salud,</strong> fácil y ágil</HeroText>
      <ImageLayer src={src} alt={alt} />
    </ImageHeroContainer>
  );
};

export default ImageHero;
