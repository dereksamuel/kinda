import styled from "styled-components";

const chooseRadiantSep = ($variant) => {
  switch ($variant) {
    case "primary":
      return "white";
    case "secondaryMistery":
      return "primary";
    case "secondaryRadiant":
      return "primary";
    default:
      return "white";
  }
};

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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const MenuItem = styled.li`
  font-size: ${({ theme }) => theme.sizes.fontMedium};
  font-weight: 500;
  padding: ${({ theme }) => `0 ${theme.sizes.medium}`};
  border-right: 2px solid ${({ theme }) => theme.colors.secondary};

  a {
    cursor: ${({ $active }) => $active ? "default" : "pointer"};
    text-decoration: none;
    font-weight: ${({ $active }) => $active ? "700" : "500"};
    color: ${({ theme, $active, $variant }) => $active ? theme.colors[$variant] : theme.colors.primary};
  }

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
  background-color: ${({ theme, $right, $variant }) => theme.colors[$right ? $variant : chooseRadiantSep($variant)]};

  &::before {
    content: "";
    display: block;
    width: 50%;
    height: 100%;
    background-color: ${({ theme, $right, $variant }) => theme.colors[$right ? chooseRadiantSep($variant) : $variant ]};
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

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 1700px;
  margin: 0 auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.sizes.large} ${({ theme }) => theme.sizes.small};
`;

export const BlueFooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1700px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizes.small};

  .box-footer:last-child {
    border-left: 1px solid ${({ theme }) => theme.colors.radiant};
    list-style: none;
  }

  .box-footer {
    list-style: none;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.sizes.small};

    p {
      padding-right: ${({ theme }) => theme.sizes.small};
    }
    li {
      list-style: none;
      display: flex;
      strong {
        color: ${({ theme }) => theme.colors.radiant};
        margin-right: ${({ theme }) => theme.sizes.small};
        font-weight: 600;
      }
    }
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.medium};
  width: 100%;
  padding: ${({ theme }) => theme.sizes.small};
  font-size: ${({ theme }) => theme.sizes.fontMedium};
`;
