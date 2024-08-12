import Image from "next/image";
import styled, { css } from "styled-components";

const choosePosition = ($position) => {
  const positions = {
    center: css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
    left: `
      top: 50%;
      text-align: start;
      left: 10%;
      transform: translateY(-50%);
    `,
    right: `
      top: 50%;
      right: 10%;
      text-align: start;
      transform: translateY(-50%);
    `,
  };

  return positions[$position] || positions.center;
};

export const ImageHeroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  h1 {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translateY(-50%);
    max-width: 411px;
    text-align: start;
  }
`;

export const ImageLayer = styled(Image)`
  width: 100%;
  height: fit-content;
  max-height: 600px;
  max-width: 1700px;
  display: block;
  margin: 0 auto;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, #2b2b2b 100%);
  object-fit: cover;
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 600px;
  max-width: 1700px;
  position: relative;
  margin: 0 auto;
`;

export const ImageSlider = styled(Image)`
  width: 100%;
  max-width: 1700px;
  display: block;
  margin: 0 auto;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, #2b2b2b 100%);
  object-fit: cover;
`;

export const CarouselText = styled.div`
  font-size: ${({ theme }) => theme.sizes.fontExtraLargePlus};
  font-weight: 500;
  text-align: center;
  position: absolute;
  ${({ $position }) => choosePosition($position)}
  z-index: 2;
  line-height: 1.2;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.white};
  h3 {
    font-weight: 400;
  }
  p {
    font-size: ${({ theme }) => theme.sizes.fontML};
    max-width: 400px;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.sizes.medium};
    font-weight: 500;
  }
  strong {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.radiant};
  }
  strong.radiant-green {
    color: #03C3CD;
  }
  strong.radiant-sec {
    color: #06CBB6;
  }
  strong.radiant {
    color: ${({ theme }) => theme.colors.secondaryRadiant};
  }
`;

export const SliderItem = styled.div`
  position: relative;
`;

export const SliderContainerClients = styled.div`
  width: 100%;
  height: fit-content;
  max-height: 600px;
  max-width: 1100px;
  position: relative;
  margin: 0 auto;
`;

export const HeroText = styled.h1`
  font-size: ${({ theme }) => theme.sizes.fontExtraLarge};
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.primary};

  strong {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.radiant};
  }
`;

export const OurClientsContainer = styled.section`
  background: url(${({ $src }) => $src.src}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 530px;
  max-height: 530px;
  max-width: 1700px;
  margin: 0 auto;
`;

export const TitleContainerClient = styled.div`
  position: relative;
  text-align: center;
  padding-top: ${({ theme }) => theme.sizes.large};
  padding-bottom: ${({ theme }) => theme.sizes.large};
  max-width: 430px;
  margin: 0 auto;

  h3 {
    font-size: ${({ theme }) => theme.sizes.fontExtraLarge};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: ${({ theme }) => theme.sizes.fontMedium};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.radiant};
    font-style: italic;
    line-height: 1.2;
    max-width: 300px;
    text-align: start;
    margin-left: 150px;

    strong {
      font-weight: 700;
    }
  }

  img {
    position: absolute;
    top: 90px;
    left: -10px;
    width: 150px;
    height: 111px;
  }
`;

export const KnowMoreContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: url(${({ $src }) => $src.src}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 800px;
  max-height: 600px;
  max-width: 1700px;
  margin: 0 auto;
  background-attachment: fixed;

  .boxcontent {
    color: ${({ theme }) => theme.colors.white};
    max-width: 40%;
    min-width: 430px;
    text-align: end;
    line-height: 1;
    padding-right: ${({ theme }) => theme.sizes.large};

    h3 {
      font-size: ${({ theme }) => theme.sizes.fontExtraLarge};
      font-weight: 600;
    }

    p {
      margin-top: ${({ theme }) => theme.sizes.small};
      font-size: ${({ theme }) => theme.sizes.fontML};
      margin-bottom: ${({ theme }) => theme.sizes.medium};
    }

    strong {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const PartnersContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  max-height: 600px;
  max-width: 1700px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.black};
`;
