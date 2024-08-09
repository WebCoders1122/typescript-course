import { useCart } from "../context/CartContext";

type Props = {
  isCartPage: boolean;
};
const Footer = ({ isCartPage }: Props) => {
  const { cartItemsCount, cartPriceCount } = useCart();
  const content = isCartPage ? (
    <>
      <div>
        <p>Total Items : {cartItemsCount}</p>
        <p>Total Price : {cartPriceCount}</p>
      </div>
      <p>Shopping Cart &copy; 2024</p>
    </>
  ) : (
    <p>All Rights Reserved &copy; 2024</p>
  );
  return content;
};
export default Footer;
