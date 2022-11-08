import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const Wrapper = styled.div`
  max-width: 734px;
  padding: 16px;
  margin: 0 auto;
`;

export const Container = styled.div`
  height: calc(90vh - 72px);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  border-radius: 4px;
  padding: 0px 70px;
  
  h1 {
    color: ${colors.blue900};
    font-size: 20px;
  }
`;

export const ConfirmationImage = styled.img`
  width: 294.96px;
  height: 307px;
  margin-top: 49px;
  margin-bottom: 20px;
`;
