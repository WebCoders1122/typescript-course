import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";
import Product from "./Product";

const ProductList = () => {
  const products = useProducts();
  const { cart, dispatch, REDUCER_ACTIONS } = useCart();

  const content = (
    <main className='grid grid-cols-3 gap-5 m-6'>
      {products.map((product) => {
        const inCart: boolean = cart.some((item) => item.sku === product.sku);
        return (
          <Product
            key={product.sku}
            product={product}
            inCart={inCart}
            dispatch={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        );
      })}
    </main>
  );
  return content;
};
export default ProductList;
