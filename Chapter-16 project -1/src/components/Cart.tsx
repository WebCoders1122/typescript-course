import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const [ordered, setOrdered] = useState<boolean>(false);
  const { cart, dispatch, REDUCER_ACTIONS, cartItemsCount } = useCart();
  // function to submit order
  const submitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setOrdered((prev) => !prev);
  };
  return (
    <>
      {ordered ? (
        <p className='m-10'>Thank for placing order</p>
      ) : (
        <ul className='m-2'>
          {cart && cart.length
            ? cart.map((product) => (
                <CartItem
                  key={product.sku}
                  product={product}
                  dispatch={dispatch}
                  REDUCER_ACTIONS={REDUCER_ACTIONS}
                />
              ))
            : null}
        </ul>
      )}
      <button
        disabled={!cartItemsCount}
        onClick={submitOrder}
        className='bg-emerald-600 text-white py-2 px-6 text-center m-5 disabled:bg-gray-500'>
        Place Order
      </button>
    </>
  );
};
export default Cart;
