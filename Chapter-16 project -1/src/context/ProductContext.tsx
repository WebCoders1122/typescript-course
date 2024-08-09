import { createContext, useContext, useEffect, useState } from "react";

const initContextState: ProductType[] = [];

const ProductContext = createContext<ProductType[]>(initContextState);
export const useProducts = () => useContext(ProductContext);
export default function ProductContextProvider({ children }: ChildrenType) {
  //storing products in state
  const [products, setProducts] = useState<ProductType[]>([]);

  //fetching products form server
  useEffect(() => {
    const fetchProducts = async (): Promise<ProductType[]> => {
      const response = await fetch("../../data/products.json");
      const data = await response.json();
      return data.products;
    };
    fetchProducts().then((products) => setProducts(products));
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}
