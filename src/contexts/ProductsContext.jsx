import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import ProductReducer from "../reducer/ProductReducer";

import { useNavigate } from "react-router-dom";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const initalState = {
    isLoading: false,
    isError: false,
    products: [],
    singleProduct:[]
};

const navigate = useNavigate()
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

  const showSingleProduct = (product) => {
    dispatch({type:"SHOW SINGLE PRODUCT",payload:product})
    navigate(`/product/${product._id}`)
  }

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <ProductsContext.Provider value={{...state,showSingleProduct}}>
      {children}
    </ProductsContext.Provider>
  );
}

const useProductContext = () => {
  return useContext(ProductsContext);
};

export { useProductContext };
