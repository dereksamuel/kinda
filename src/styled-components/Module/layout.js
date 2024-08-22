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
  */height: ${({ $rect }) => $rect ? '400px' : '300px'};*/
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

  ul {
    list-color: ${({ theme }) => theme.colors.secondaryMistery};
    text-align: start;
    font-size: ${({ theme }) => theme.sizes.fontSM};
    color: ${({ theme }) => theme.colors.primary};
    max-width: 260px;
    margin: 0 auto;
    min-height: 200px;
    height: 100%;
    margin-top: ${({ theme }) => theme.sizes.small};
    list-style-position: inside;
    margin-bottom: ${({ theme }) => theme.sizes.small};

    .title-ul {
      font-weight: 600;
      font-size: ${({ theme }) => theme.sizes.fontMedium};
      line-height: 1;
      margin-bottom: ${({ theme }) => theme.sizes.small};
    }

    li {
      margin-bottom: ${({ theme }) => theme.sizes.fontSmall};
      line-height: 1.2;

      &.secondaryMistery::marker {
        color: ${({ theme }) => theme.colors.secondaryMistery};
      }

      &.secondaryRadiant::marker {
        color: ${({ theme }) => theme.colors.secondaryRadiant};
      }
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.sizes.large} 0;
  margin-top: ${({ theme }) => theme.sizes.large};
  margin-bottom: ${({ theme }) => theme.sizes.large};

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 ${({ theme }) => theme.sizes.large};
    padding: ${({ theme }) => theme.sizes.small};
    /*border-right: 2px solid ${({ theme }) => theme.colors.secondary};*/

    &.gradient {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${({ theme }) => theme.colors.secondary} 100%);
    }
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
