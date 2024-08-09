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


export const MainFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.medium} ${({ theme }) => theme.sizes.large};
  margin-top: ${({ theme }) => theme.sizes.medium};
  background-color: ${({ theme }) => theme.colors.primary};
`;
