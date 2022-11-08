import { colors } from "./../../assets/styles/variables";
import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  background: ${colors.white};
  padding: 10px;
  border-radius: 4px;

  span.title {
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    color: ${colors.darkGray};
  }

  span.price {
    font-weight: 700;
    text-align: left;
    font-size: 10px;
    line-height: 14px;
    align-self: flex-start;
    color: ${colors.blue900};
  }
`;

export const CardImage = styled.img`
  width: 147px;
  height: 188px;
`;

