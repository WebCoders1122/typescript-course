import { createContext, useContext, useMemo, useReducer } from "react";

const initialState: CartItemType[] = []; // for reducer state
const ReducerActionTypes: CART_REDUCER_ACTION_TYPES = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};
//hook to maintain all logic and provide variables
const useCartContextValues = () => {
  // all logic
  const reducer = (state: CartItemType[], action: any) => {
    switch (action.type) {
      case ReducerActionTypes.ADD: {
        const { sku, price, name } = action.payload;
        const existingItem = state.find((item) => item.sku === sku);
        if (!existingItem) {
          return [...state, { sku, price, name, quantity: 1 }];
        }
        const filteredItems = state.filter((item) => item.sku !== sku);
        return [
          ...filteredItems,
          { sku, price, name, quantity: existingItem.quantity + 1 },
        ];
      }
      case ReducerActionTypes.REMOVE: {
        const { sku } = action.payload;
        const existingItem = state.find((item) => item.sku === sku);
        if (!existingItem) {
          throw new Error("No items found in the cart to remove");
        }
        const filteredItems = state.filter((item) => item.sku !== sku);
        return filteredItems;
      }
      case ReducerActionTypes.QUANTITY: {
        const { sku, quantity } = action.payload;
        const existingItem = state.find((item) => item.sku === sku);
        if (!existingItem) {
          throw new Error("No items found in the cart to update quantity");
        }
        const filteredItems = state.filter((item) => item.sku !== sku);
        return [...filteredItems, { ...existingItem, quantity: quantity }];
      }
      case ReducerActionTypes.SUBMIT: {
        return [];
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  //sorted cart

  const cart = state.sort((a, b) => {
    const itemA = +a.sku.slice(-4);
    const itemB = +b.sku.slice(-4);
    return itemA - itemB;
  });
  //total items in cart
  const cartItemsCount = cart.reduce((prev, curr) => prev + curr.quantity, 0);
  //total price of cart
  const price = cart.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );
  const cartPriceCount = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "pkr",
  }).format(price);
  //memoized reducre actions
  const REDUCER_ACTIONS = useMemo(() => ReducerActionTypes, []);
  return { cart, dispatch, cartItemsCount, cartPriceCount, REDUCER_ACTIONS };
};
type initialCartStateType = ReturnType<typeof useCartContextValues>;
const initialCartState: initialCartStateType = {
  cart: [],
  dispatch: () => {},
  cartItemsCount: 0,
  cartPriceCount: "0",
  REDUCER_ACTIONS: ReducerActionTypes,
};

const CartContext = createContext<initialCartStateType>(initialCartState);
export const useCart = () => useContext(CartContext);

//making provider
export default function CartContextProvider({ children }: ChildrenType) {
  const { cart, dispatch, cartItemsCount, cartPriceCount, REDUCER_ACTIONS } =
    useCartContextValues();
  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        cartItemsCount,
        cartPriceCount,
        REDUCER_ACTIONS,
      }}>
      {children}
    </CartContext.Provider>
  );
}
