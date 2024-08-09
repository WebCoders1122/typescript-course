import { memo } from "react";
import { useCart } from "../context/CartContext";

type Props = {
  product: ProductType;
  inCart: boolean;
  dispatch: React.Dispatch<any>;
  REDUCER_ACTIONS: CART_REDUCER_ACTION_TYPES;
};
const Product = ({ product, inCart, dispatch, REDUCER_ACTIONS }: Props) => {
  console.log("product");
  const imgUrl = new URL(
    `../../public/images/${product.sku}.jpg`,
    import.meta.url
  ).href;
  const content = (
    <article className='flex flex-col gap-2 rounded-md overflow-hidden'>
      <img
        src={imgUrl}
        alt={product.name}
      />
      <div className='mx-3 flex items-center justify-between'>
        <div>
          <h3 className='font-medium text-xl text-emerald-700'>
            {product.name}
          </h3>
          <p>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "pkr",
            }).format(product.price)}
          </p>
        </div>
        <button
          onClick={() =>
            dispatch({ type: REDUCER_ACTIONS.ADD, payload: product })
          }
          className='bg-emerald-600 rounded px-4 py-2 text-white'>
          Add to cart
        </button>
      </div>
      {inCart ? (
        <div className='text-center py-1 bg-slate-100'>"Added to Cart ✅"</div>
      ) : null}
    </article>
  );
  return content;
};

function areProductsEqual(
  { product: prevProduct, inCart: prevCart }: Props,
  { product: nextProduct, inCart: nextCart }: Props
) {
  // console.log(prevProduct, nextProduct, prevCart, nextCart);
  console.log(prevCart === nextCart);
  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType]
      );
    }) && prevCart === nextCart
  );
}

const memoizedProduct = memo(Product, areProductsEqual);
export default memoizedProduct;
