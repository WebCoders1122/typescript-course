import { useProducts } from "../context/ProductContext";
import Product from "./Product";

const ProductList = () => {
  const products = useProducts();

  const content = (
    <main className='grid grid-cols-3 gap-5 m-6'>
      {products.map((product) => (
        <Product
          key={product.sku}
          product={product}
        />
      ))}
    </main>
  );
  return content;
};
export default ProductList;
