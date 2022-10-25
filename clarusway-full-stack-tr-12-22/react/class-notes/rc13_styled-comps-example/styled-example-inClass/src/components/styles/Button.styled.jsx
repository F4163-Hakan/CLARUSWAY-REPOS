import styled from "styled-components";

const Button = styled.button`
  background: ${({ bg }) => bg || "white"};
  color: ${({ color }) => color || "white"};
  border: 1px solid #af3a53;
`;

export default Button;
