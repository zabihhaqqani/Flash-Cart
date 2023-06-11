import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import ProductReducer from "../reducer/ProductReducer";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const initalState = {
    isLoading: false,
    isError: false,
    products: [],
};

  // use reducer
  const [state, dispatch] = useReducer(ProductReducer, initalState);

  const getProductsData = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch("/api/products");
      const products = await response.json();
      dispatch({ type: "API_DATA", payload: products });
    } catch (err) {
      dispatch({ type: "API_ERROR" });
    } finally {
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <ProductsContext.Provider value={{...state}}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProductContext = () => {
  return useContext(ProductsContext);
};

export { useProductContext };
