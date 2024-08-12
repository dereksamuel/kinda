import { InputContainer, InputGroupContainer } from "@/styled-components/inputOutput";

export const Input = ({ ...props }) => {
  return <InputContainer {...props} />;
}

export const InputGroup = ({ children, label }) => {
  return <InputGroupContainer>
    <p>{label}</p>
    <div className="children">
      {children}
    </div>
  </InputGroupContainer>;
}
