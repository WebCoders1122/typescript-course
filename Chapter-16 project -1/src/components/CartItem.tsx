import React from "react";

type Props = {
  product: CartItemType;
  dispatch: React.Dispatch<any>;
  REDUCER_ACTIONS: CART_REDUCER_ACTION_TYPES;
};
const CartItem = ({ product, dispatch, REDUCER_ACTIONS }: Props) => {
  console.log("cart item");
  const imageURL = new URL(
    `../../public/images/${product.sku}.jpg`,
    import.meta.url
  ).href;
  //generating quantiti options
  const maxQuantity = product.quantity <= 20 ? 20 : product.quantity;
  const options =
    maxQuantity &&
    Array(maxQuantity)
      .fill(0)
      .map((_, index) => (
        <option
          key={index + 1}
          value={index + 1}>
          {index + 1}
        </option>
      ));
  const selectList = (
    <select
      className='p-3'
      onChange={(e) =>
        dispatch({
          type: REDUCER_ACTIONS.QUANTITY,
          payload: { sku: product.sku, quantity: e.target.value },
        })
      }>
      {options}
    </select>
  );
  const content = (
    <li
      key={product.sku}
      className='flex justify-between items-center bg-slate-50 shadow p-2 px-4 m-1'>
      <img
        className='rounded-md'
        width={80}
        src={imageURL}
        alt={product.name}
      />

      <p>
        {Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "pkr",
        }).format(product.price)}
      </p>
      {selectList}
      <button
        className='bg-slate-200 rounded p-2 hover:bg-gray-300'
        onClick={() =>
          dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: product })
        }>
        ❌
      </button>
    </li>
  );
  return content;
};

function areItemsEqual(
  { product: prevProduct }: Props,
  { product: nextProduct }: Props
) {
  return Object.keys(prevProduct).every((key) => {
    return (
      prevProduct[key as keyof CartItemType] ===
      nextProduct[key as keyof CartItemType]
    );
  });
}

const memoizedCartItem = React.memo(CartItem, areItemsEqual);
export default memoizedCartItem;
