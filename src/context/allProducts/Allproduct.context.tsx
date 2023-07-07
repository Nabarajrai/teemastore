import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllProductsLimit } from "../../services/api";

const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});
interface ProductProps {
  children: React.ReactNode;
}

export const ProductsProvider: React.FC<ProductProps> = ({ children }) => {
  const [products, setProducts] = useState([]);
  const getallProducts = async () => {
    const response = await getAllProductsLimit();
    setProducts(response.data);
  };
  useEffect(() => {
    getallProducts();
  }, []);
  const value = { products, setProducts: () => null };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const LimitProducts = () => {
  const { products } = useContext(ProductsContext);
  return products.length;
};
