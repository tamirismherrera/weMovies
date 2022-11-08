import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleHeader = styled.h1<{
  titleColor?: string;
}>`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  color: ${(props) => (props.titleColor ? props.titleColor : colors.white)};
  cursor: pointer;
`;

export const CartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${colors.white};

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-weight: 600;

    span:first-child {
      font-size: 14px;
      line-height: 14px;

      @media (max-width: 700px) {
        display: none;
      }
    }

    span:last-child {
      font-size: 12px;
      line-height: 14px;
      color: ${colors.gray};
    }
  }
`;

export const StyledIcon = styled.img`
  height: 32px;
  width: 32px;
  cursor: pointer;
`;
