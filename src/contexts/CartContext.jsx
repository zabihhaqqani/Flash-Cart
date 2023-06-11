import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { CartReducer } from "../reducer/CartReducer";
import { useProductContext } from "./ProductsContext";

export const CartContext = createContext();



export function CartProvider({ children }) {
  const initalState = {
    cartItems:[],
    totalAmount:0,
    totalItem:0,
    inCart:[]
  };
  
  const { products, isLoading } = useProductContext();
  
    const [isAddedToCart,setIsAddedToCart] = useState(false)

    const navigate = useNavigate()
  // use reducer
    const [state, dispatch] = useReducer(CartReducer, initalState);

    // useEffect(()=> {    setIsAddedToCart("Add To Cart")},[])

console.log(state);
  const addToCart = (product) => {
    dispatch({type:"ADD_TO_CART",payload:product})
    //  setIsAddedToCart("Go To Cart")

  }
   const removeFromCart = (products) => {
    dispatch({type:"REMOVE_FROM_CART",payload:products})
  }
 
  return (
    <CartContext.Provider value={{...state,addToCart,removeFromCart,isAddedToCart}}>
      {children}
    </CartContext.Provider>
  );
}

const useCartContext = () => {
  return useContext(CartContext);
};

export { useCartContext };
