import { StyledIcon, TitleHeader, HeaderWrapper, CartWrapper } from "./styles";
import shoppingCartIcon from "../../assets/icons/shoppingCart.svg";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart";

export function Header() {

  const {quantityItems} = useCart();
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
       <TitleHeader onClick={()=> navigate('/')}>weMovies</TitleHeader>
      <CartWrapper>
        <div>
          <span>Meu Carrinho</span>
          <span>{quantityItems} itens</span>
        </div>
        <Link to='/cart'><StyledIcon src={shoppingCartIcon} /></Link>
      </CartWrapper>
    </HeaderWrapper>
  );
}
