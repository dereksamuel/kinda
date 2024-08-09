import Image from "next/image";
import styled from "styled-components";

export const MainHeader = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.small} ${({ theme }) => theme.sizes.medium};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const MenuItem = styled.li`
  font-size: ${({ theme }) => theme.sizes.fontMedium};
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `0 ${theme.sizes.medium}`};
  border-right: 2px solid ${({ theme }) => theme.colors.secondary};

  &:last-child {
    border-right: none;
    padding-right: 0;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.sizes.fontSmall};
  max-width: 1700px;
  margin: 0 auto;
  opacity: 0.98;
  margin-top: -8px;
  background-color: ${({ theme, $right }) => theme.colors[$right ? "radiant" : "white"]};

  &::before {
    content: "";
    display: block;
    width: 50%;
    height: 100%;
    background-color: ${({ theme, $right }) => theme.colors[$right ? "white" : "radiant"]};
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
  height: 100%;
  max-height: 600px;
  max-width: 1700px;
  position: relative;
  margin: 0 auto;
`;

export const ImageSlider = styled(Image)`
  width: 100%;
  height: 100%;
  max-height: 600px;
  max-width: 1700px;
  display: block;
  margin: 0 auto;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, #2b2b2b 100%);
  object-fit: cover;
`;

export const CarouselText = styled.h3`
  font-size: ${({ theme }) => theme.sizes.fontExtraLargePlus};
  font-weight: 500;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  line-height: 1.2;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.white};
  strong {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.radiant};
  }
`;

export const SliderItem = styled.div`
  position: relative;
`;

export const HeroText = styled.h1`
  font-size: ${({ theme }) => theme.sizes.fontExtraLarge};
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.primary};

  strong {
    font-weight: 800;
    color: ${({ theme }) => theme.colors.radiant};
  }
`;

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

export const MainFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.medium} ${({ theme }) => theme.sizes.large};
  margin-top: ${({ theme }) => theme.sizes.medium};
  background-color: ${({ theme }) => theme.colors.primary};
`;
