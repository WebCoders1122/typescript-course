import { useCart } from "./context/CartContext";
import { useProducts } from "./context/ProductContext";

const App = () => {
  const products = useProducts();
  const cart = useCart();
  console.log(cart);
  return <div>App</div>;
};
export default App;
