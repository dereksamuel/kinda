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

  h3 {
    color: ${({ theme }) => theme.colors.secondaryMistery};
    font-size: ${({ theme }) => theme.sizes.fontExtraLargePlusMore};
    position: absolute;
    top: 120px;
    left: 58%;
    transform: translateX(-50%);
  }
`;
