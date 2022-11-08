import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";
import { CardImage, CardWrapper } from "./styles";
import addShoppingCartIcon from "../../assets/icons/addShoppingCart.svg";
import { useCart } from "../../context/cart";
import { IMovie } from "../../Interfaces";

interface MovieCardProps {
  movie: IMovie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const { addItemToCart, cartItems } = useCart();
  const movieExistsOnCart = cartItems.filter((item) => item.id === movie.id);

  function renderQuantity(){
    if(movieExistsOnCart.length>0){
      return movieExistsOnCart[0].quantity?.toString();
    }else{
      return "0";
    }
  }

  return (
    <CardWrapper>
      <CardImage src={movie.image} />
      <span className="title">{movie.title}</span>
      <span className="price">{formatCurrency(movie.price)}</span>

      <Button
        qtItems={renderQuantity()}
        icon={addShoppingCartIcon}
        onClick={() => addItemToCart(movie)}
      >
        ADICIONAR AO CARRINHO
      </Button>
    </CardWrapper>
  );
}
