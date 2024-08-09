import { useCart } from "../context/CartContext";

type Props = {
  isCartPage: boolean;
  setIsCartPage: React.Dispatch<React.SetStateAction<boolean>>;
};
const Header = ({ isCartPage, setIsCartPage }: Props) => {
  const { cartItemsCount, cartPriceCount } = useCart();

  const Button = isCartPage ? (
    <button
      onClick={() => setIsCartPage(false)}
      className='bg-emerald-600 rounded px-4 py-2 text-white'>
      View Products
    </button>
  ) : (
    <button
      onClick={() => setIsCartPage(true)}
      className='bg-emerald-600 rounded px-4 py-2 text-white'>
      View Cart
    </button>
  );
  const content = (
    <div className='flex justify-between h-16 px-10 w-full py-3 border-b'>
      <h1 className='text-2xl font-bold'>Commerce</h1>
      <div className='flex gap-5 items-center'>
        <div>
          <p>Total Items : {cartItemsCount}</p>
          <p>Total Price : {cartPriceCount}</p>
        </div>
        {Button}
      </div>
    </div>
  );
  return content;
};
export default Header;
