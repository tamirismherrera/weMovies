import { colors } from "./../../assets/styles/variables";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 734px;
  padding: 16px;
  margin: 0 auto;

  footer {
    display: flex;
    width: 100%;

    flex-direction: column-reverse;
    gap: 20px;
    align-items: center;

    button {
      width: 100%;
    }

    @media (min-width: 1000px) {
      justify-content: space-between;
      padding: 12px;
      flex-direction: row;

      button {
        width: unset;
      }
    }
  }
`;

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  border-radius: 4px;
  padding: 0px 70px;
  width: 100%;
  height: 617px;

  h1 {
    color: ${colors.blue900};
    font-size: 20px;
  }

  @media (min-width: 1000px) {
    padding: 0px 150px;
  }
`;

export const EmptyCartImage = styled.img`
  width: 179px;
  height: 264px;
  margin-top: 49px;
`;

export const StyledLine = styled.hr<{
  lineColor?: string;
}>`
  background-color: ${(props) =>
    props.lineColor ? props.lineColor : colors.darkBlue};
  height: 1.36px;
  width: 100%;
  margin-bottom: 12px;
`;

export const CartWithItem = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.white};
  border-radius: 4px;
  margin-bottom: 28px;
  padding: 8px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

export const ImageItemCart = styled.img`
  width: 90px;
  height: 114px;
  cursor: default !important;
`;

export const StyledTable = styled.table`
  width: 100%;
  th {
    color: #999999;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    width: 712px;
    height: 37px;
  }

  tr {
    text-align: left;
  }
  td {
    color: ${colors.blue900};
    font-weight: 700;
    font-size: 14px;

    div.quantityControl {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  img {
    cursor: pointer;
  }
`;

export const StyledInput = styled.input`
  border-radius: 4px;
  width: 47px;
  height: 27px;
  background: #ffffff;
  border: 1px solid #d9d9d9;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999999;
    font-weight: 700;
    font-size: 14px;
  }
  strong {
    font-size: 28px;
    margin-left: 5px;
    color: ${colors.blue900};
  }

  @media (min-width: 1000px) {
    justify-content: flex-end;
  }
`;

export const MobileCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  max-height: 100vh;
  overflow: auto;
  gap: 12px;
`;

export const MobileCardItem = styled.div`
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  width: 100%;
  gap: 15px;

  div.titleAndPrice {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    color: ${colors.blue900};
    font-weight: 700;
    font-size: 14px;
    width: 100%;
    margin-bottom: 17px;
  }

  div.subtotal {
    display: flex;
    justify-content: flex-end;
    color: ${colors.gray};
    
    span {
      font-size: 12px;
    }
  }

  div.quantityAndTotal {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.quantityControl {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }

  div.deleteIcon {
    display: flex;
    justify-content: flex-end;
  }

  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
  }
`;
