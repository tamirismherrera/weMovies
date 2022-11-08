import { colors } from './../../assets/styles/variables';
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadSpinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  background: conic-gradient(
    from 90deg at 50% 50%,
    rgba(128, 128, 128, 0.0001) -46.17deg,
    #e6e6e6 313.55deg,
    rgba(128, 128, 128, 0.0001) 313.83deg,
    #e6e6e6 673.55deg
  );
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

export const DivSpinner = styled.div`
  display: inline-block;
  background: ${colors.blue700};
  width: 51px;
  height: 51px;
  border-radius: 50%;
`;
