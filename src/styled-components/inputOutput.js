import styled from "styled-components";

const chooseColorBtn = ($variant) => {
  const colors = {
    primary: "radiant",
    "primary-white": "white",
    secondary: "black",
    white: "radiant"
  };

  return colors[$variant] || "radiant";
}

const chooseWeightbtn = ($variant) => {
  const weights = {
    primary: 500,
    secondaryMistery: 300,
    "primary-white": 300,
    white: 500
  };

  return weights[$variant] || 500;
}

export const Button = styled.button`
  border: none;
  background-color: ${({ theme, $variant }) => theme.colors[$variant === "primary-white" ? "primary" : $variant]};
  color: ${({ theme, $variant, $colorText }) => theme.colors[$colorText || chooseColorBtn($variant)]};
  padding: ${({ theme }) => theme.sizes.fontSmall} ${({ theme }) => theme.sizes.small};
  border-radius: 25px;
  cursor: pointer;
  font-weight: ${({ $variant }) => chooseWeightbtn($variant)};
  font-size: ${({ theme }) => theme.sizes.fontMedium};
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;

export const InputContainer = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizes.fontSmall};
  background-color: ${({ theme }) => theme.colors.white};
  outline: none;
`;

export const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-bottom: ${({ theme }) => theme.sizes.medium};

  p {
    color: ${({ theme }) => theme.colors.radiant};
    font-size: ${({ theme }) => theme.sizes.fontML};
    font-style: italic;
    font-weight: 700;
    margin-top: ${({ theme }) => theme.sizes.medium};
  }

  .children {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 375px;

    input {
      flex: 2;
      height: 41px;
    }

    button {
      flex: 1;
      margin-left: 1px;
      border-radius: 0 50px 50px 0;
    }
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.sizes.small} ${({ theme }) => theme.sizes.medium};
  border-radius: 5px;
`;
