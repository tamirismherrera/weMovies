import { Header } from "../../componentes/Header";
import {
  CartWithItem,
  EmptyCart,
  EmptyCartImage,
  ImageItemCart,
  MobileCardItem,
  MobileCart,
  StyledInput,
  StyledLine,
  StyledTable,
  Total,
  Wrapper,
} from "./styles";
import emptyCartImage from "../../assets/images/emptyCart.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import minusIcon from "../../assets/icons/minusIcon.svg";
import moreIcon from "../../assets/icons/moreIcon.svg";
import { Button } from "../../componentes/Button";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";
import { formatCurrency } from "../../utils/formatCurrency";
import { colors } from "../../assets/styles/variables";
import { useEffect, useState } from "react";

export function Cart() {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const isMobile = screenWidth < 480;
  const {
    quantityItems,
    cartItems,
    removeItemFromCart,
    moreQuantity,
    minusQuantity,
    finalizeOrder,
  } = useCart();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function multiply(a: number, b: number) {
    return a * b;
  }

  const total = cartItems.reduce((sumTotal, item) => {
    return (sumTotal += (item.quantity ? item.quantity : 0) * item.price);
  }, 0);

  return (
    <Wrapper>
      <Header />
      {quantityItems === 0 ? (
        <EmptyCart>
          <h1>Parece que não há nada por aqui :(</h1>
          <EmptyCartImage src={emptyCartImage} />
          <StyledLine />
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </EmptyCart>
      ) : (
        <CartWithItem>
          {isMobile ? (
            <MobileCart>
              {cartItems.map((item) => (
                <MobileCardItem key={item.id}>
                  <img src={item.image} />
                  <div style={{width: '100%'}}>
                    <div className="titleAndPrice">
                      <span>{item.title}</span>
                      <span>{formatCurrency(item.price)}</span>
                    </div>
                    <div className="subtotal">
                      <div />
                      <span>SUBTOTAL</span>
                    </div>
                    <div className="quantityAndTotal">
                      <div className="quantityControl">
                        <img
                          src={minusIcon}
                          onClick={() => minusQuantity(item)}
                        />
                        <StyledInput
                          readOnly
                          pattern="[0-9]*"
                          value={item.quantity}
                          type="number"
                        />

                        <img
                          src={moreIcon}
                          onClick={() => moreQuantity(item)}
                        />
                      </div>
                      <span>
                        {" "}
                        {formatCurrency(
                          multiply(Number(item.quantity), item.price)
                        )}
                      </span>
                    </div>
                    <div className="deleteIcon">
                      <img
                        src={deleteIcon}
                        onClick={() => removeItemFromCart(item)}
                      />
                    </div>
                  </div>
                </MobileCardItem>
              ))}
            </MobileCart>
          ) : (
            <StyledTable>
              <tbody>
                <tr>
                  <th aria-label="movie image"></th>
                  <th>PRODUTOS</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th aria-label="delete icon"></th>
                </tr>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td style={{ display: "flex", justifyContent: "center" }}>
                      <ImageItemCart src={item.image} />
                    </td>
                    <td>
                      <span>
                        {item.title}
                        <br />
                        {formatCurrency(item.price)}
                      </span>
                    </td>
                    <td>
                      <div className="quantityControl">
                        <img
                          src={minusIcon}
                          onClick={() => minusQuantity(item)}
                        />
                        <StyledInput
                          readOnly
                          pattern="[0-9]*"
                          value={item.quantity}
                          type="number"
                        />

                        <img
                          src={moreIcon}
                          onClick={() => moreQuantity(item)}
                        />
                      </div>
                    </td>
                    <td>
                      {formatCurrency(
                        multiply(Number(item.quantity), item.price)
                      )}
                    </td>
                    <td>
                      <img
                        src={deleteIcon}
                        onClick={() => removeItemFromCart(item)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          )}

          <StyledLine lineColor={colors.gray} />
          <footer>
            <Button
              onClick={() => {
                navigate("/confirmation");
                finalizeOrder();
              }}
            >
              Finalizar pedido
            </Button>
            <Total>
              <span>TOTAL </span>
              <strong>{formatCurrency(total)}</strong>
            </Total>
          </footer>
        </CartWithItem>
      )}
    </Wrapper>
  );
}
