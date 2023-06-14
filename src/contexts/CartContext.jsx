import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate, Navigate } from "react-router-dom";

import { CartReducer } from "../reducer/CartReducer";
import { useProductContext } from "./ProductsContext";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const initalState = {
    cartItems: [],
    totalAmount: 0,
    totalItem: 0,
    inCart: [],
  };

  const { products, isLoading } = useProductContext();

  const cartButton = e => {
    console.log(e.target.value);
  };

  const navigate = useNavigate();
  // use reducer
  const [state, dispatch] = useReducer(CartReducer, initalState);

  // useEffect(()=> {    setIsAddedToCart("Add To Cart")},[])

  const addToCart = (product, e) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
   return (e.target.innerText === "Go to Cart" )?navigate('/cart'):null
  };
  const removeFromCart = products => {
    dispatch({ type: "REMOVE_FROM_CART", payload: products });
  };

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, cartButton }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext };
