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
    font-size: ${({ theme }) => theme.sizes.fontExtraLargePlus};
    position: absolute;
    top: 150px;
    left: 55%;
    transform: translateX(-50%);
  }
`;
