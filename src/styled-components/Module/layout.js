import styled from "styled-components";

export const ModuleHeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ $src }) => $src.src}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 800px;
  max-height: 600px;
  max-width: 1700px;
  margin: 0 auto;
  position: relative;
  background-color: ${({ theme }) => theme.colors.primary};

  h3 {
    color: ${({ theme }) => theme.colors.secondaryMistery};
    font-size: ${({ theme }) => theme.sizes.fontExtraLargePlusMore};
    position: absolute;
    top: 120px;
    left: 56%;
    transform: translateX(-50%);

    @media (max-width: 1400px) {
      left: 60%;
      top: 160px;
      transform: translateX(-50%);
    }
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.sizes.fontMedium};
    position: absolute;
    bottom: ${({ theme }) => theme.sizes.ml};
    left: 50%;
    transform: translateX(-50%);
  }

  .kioscos {
    color: ${({ theme }) => theme.colors.secondaryRadiant};
  }

  .k-desc {
    text-align: center;
  }
`;

export const CardContainer = styled.div`
  background-color: transparent;
  width: 300px;
  height: ${({ $rect }) => $rect ? '400px' : '300px'};
  perspective: 1000px;

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    border-radius: 50%;
    transition-delay: 0.05s;
    transform-style: preserve-3d;
  }

  &:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: ${({ $rect }) => $rect ? '0' : '50%'};
  }

  .flip-card-front {
    background-color: white;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flip-card-back {
    color: white;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: start;
  }

  .circle {
    width: 250px;
    height: ${({ $rect }) => $rect ? '400px' : '250px'};
    border-radius: ${({ $rect }) => $rect ? '0' : '50%'};
    background-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: ${({ theme }) => theme.sizes.medium};

    ul {
      list-color: ${({ theme }) => theme.colors.secondaryMistery};
      text-align: start;
      font-size: ${({ theme }) => theme.sizes.fontSM};
      color: ${({ theme }) => theme.colors.primary};
      max-width: 160px;
      margin: 0 auto;

      li {
        margin-bottom: ${({ theme }) => theme.sizes.fontSmall};
      }
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.sizes.large} 0;
  margin-top: ${({ theme }) => theme.sizes.large};
  margin-bottom: ${({ theme }) => theme.sizes.large};

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 ${({ theme }) => theme.sizes.large};
    border-right: 2px solid ${({ theme }) => theme.colors.secondary};
  }

  .Title {
    max-width: 400px;
    line-height: 1;
    margin: 0;
    margin-bottom: ${({ theme }) => theme.sizes.small};
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.sizes.fontML};
  }

  .box:last-child {
    border-right: none;
  }

  small {
    font-size: ${({ theme }) => theme.sizes.fontMedium};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    display: block;
    color: ${({ theme }) => theme.colors.secondaryRadiant};
    text-align: start;
  }

  .start {
    align-items: flex-start;
    .Title {
      text-align: start;
    }
  }
`;

export const ImgStepsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: url(${({ $src }) => $src.src}) no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 700px;
  max-height: 600px;
  max-width: 1700px;
  margin: 0 auto;
  position: relative;

  .content {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-right: ${({ theme }) => theme.sizes.medium};
  }

  small {
    font-size: ${({ theme }) => theme.sizes.fontSM};
    color: ${({ theme }) => theme.colors.white};
    margin-top: -10px;
    display: block;
    margin-bottom: ${({ theme }) => theme.sizes.small};
  }

  small.isSecondarySmall {
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: ${({ theme }) => theme.sizes.fontExtraLargePlus};
    color: ${({ theme }) => theme.colors.secondaryMistery};
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    max-width: 600px;
    gap: ${({ theme }) => theme.sizes.medium};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;

    strong {
      font-weight: 600;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${({ theme }) => theme.sizes.fontSmall}
    }

    .number {
      font-size: ${({ theme }) => theme.sizes.fontExtraLargePlus};
      color: ${({ theme }) => theme.colors.secondaryMistery};
      font-weight: 700;
    }
  }

  ul.secondary {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
