import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./assets/styles/global";
import { CartProvider } from "./context/cart";
import { Router } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyle />
        <Router />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
