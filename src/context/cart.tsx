import { createContext, ReactNode, useContext, useState } from "react";
import { IMovie } from "../Interfaces";

interface ICartContext {
  cartItems: IMovie[];
  quantityItems: number;
  addItemToCart: (movie: IMovie) => void;
  removeItemFromCart: (movie: IMovie) => void;
  moreQuantity: (movie: IMovie) => void;
  minusQuantity: (movie: IMovie) => void;
  finalizeOrder: () => void;
}

const CartContext = createContext({} as ICartContext);

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<IMovie[]>([]);

  const quantityItems = cartItems.reduce((sum, item) => {
    if (item.quantity) {
      return sum + item.quantity;
    } else {
      return sum;
    }
  }, 0);

  function addItemToCart(movie: IMovie) {
    const itemAlreadyExistsOnCart = cartItems.filter(
      (item) => item.id === movie.id
    );

    if (itemAlreadyExistsOnCart.length > 0) {
      const updatedItemsCart = cartItems.map((item) => {
        if (item.id === movie.id && item.quantity) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedItemsCart);
    } else {
      setCartItems((stateCart) => [...stateCart, { ...movie, quantity: 1 }]);
    }
  }

  function removeItemFromCart(movie: IMovie) {
    const updatedItemsCart = cartItems.filter((item) => item.id !== movie.id);
    setCartItems(updatedItemsCart);
  }

  function moreQuantity(movie: IMovie) {
    const updatedItemsCart = cartItems.map((item) => {
      if (item.id === movie.id ) {
        return { ...item, quantity: (item.quantity ? item.quantity : 0) + 1 };
      } else {
        return item;
      }
    });
    setCartItems(updatedItemsCart);
  }

  function minusQuantity(movie: IMovie) {
    const updatedItemsCart = cartItems.map((item) => {
      if (item.id === movie.id) {
        if (item.quantity && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      } else {
        return item;
      }
    });
    setCartItems(updatedItemsCart);
  }

  function finalizeOrder() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        quantityItems,
        addItemToCart,
        removeItemFromCart,
        moreQuantity,
        minusQuantity,
        finalizeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  const {
    cartItems,
    quantityItems,
    addItemToCart,
    removeItemFromCart,
    moreQuantity,
    minusQuantity,
    finalizeOrder,
  } = context;
  return {
    cartItems,
    quantityItems,
    addItemToCart,
    removeItemFromCart,
    moreQuantity,
    minusQuantity,
    finalizeOrder,
  };
}
