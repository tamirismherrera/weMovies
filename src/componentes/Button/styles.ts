import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const StyledButton = styled.button<{
  buttonColor?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.buttonColor ? props.buttonColor : colors.blue500};
  height: 40px;
  border-radius: 4px;
  text-transform: uppercase;
  border-color: ${colors.blue500};
  color: ${colors.white};
  cursor: pointer;
  font-size: 12px;
  padding: 0 12px;
`;

export const SpanButton = styled.span`
  align-self: center;
  font-weight: 400;
  font-size: 12px;
  margin: 5px;
`;

export const StyledIcon = styled.img`
  height: 13.6px;
  width: 13.6px;
`;
