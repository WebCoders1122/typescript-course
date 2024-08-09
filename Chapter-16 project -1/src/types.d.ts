type ProductType = {
  sku: string;
  name: string;
  price: number;
};
type ChildrenType = {
  children: React.ReactElement | React.ReactElement[];
};
type CartItemType = {
  sku: string;
  name: string;
  price: number;
  quantity: number;
};
type CART_REDUCER_ACTION_TYPES = {
  ADD: "ADD";
  REMOVE: "REMOVE";
  QUANTITY: "QUANTITY";
  SUBMIT: "SUBMIT";
};
