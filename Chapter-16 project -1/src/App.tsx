import { useProducts } from "./context/ProductContext";

const App = () => {
  const products = useProducts();
  console.log(products);
  return <div>App</div>;
};
export default App;
