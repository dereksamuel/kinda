import styled from "styled-components";

const chooseColorBtn = ($variant) => {
  const colors = {
    primary: "radiant",
    secondary: "black",
    white: "radiant"
  };

  return colors[$variant] || "radiant";
}

export const Button = styled.button`
  border: none;
  background-color: ${({ theme, $variant }) => theme.colors[$variant]};
  color: ${({ theme, $variant }) => theme.colors[chooseColorBtn($variant)]};
  padding: ${({ theme }) => theme.sizes.fontSmall} ${({ theme }) => theme.sizes.small};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  font-size: ${({ theme }) => theme.sizes.fontMedium};
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizes.small} ${({ theme }) => theme.sizes.medium};
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizes.small} ${({ theme }) => theme.sizes.medium};
  border-radius: 5px;
`;
