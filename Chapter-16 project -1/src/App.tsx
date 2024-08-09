import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

const App = () => {
  //for dynamic button
  const [isCartPage, setIsCartPage] = useState<boolean>(false);

  const content = isCartPage ? <Cart /> : <ProductList />;

  return (
    <>
      <Header
        isCartPage={isCartPage}
        setIsCartPage={setIsCartPage}
      />
      {/* content */}
      {content}
      <Footer isCartPage={isCartPage} />
    </>
  );
};
export default App;
