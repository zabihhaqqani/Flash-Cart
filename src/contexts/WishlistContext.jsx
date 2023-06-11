import {
  createContext,
  useContext,
  useReducer,
} from "react";

import WishlistReducer from "../reducer/WishlistReducer";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const initalState = {
  wishListProducts:[],
  iconName:'fa-regular fa-heart'
};

  // use reducer
  const [state, dispatch] = useReducer(WishlistReducer, initalState);

  const addToWishlist = (products) => {
    
   dispatch({type:"ADD_TO_WISHLIST",payload:products})
  }

  
  const removeFromWishlist = (products) => {
    
    dispatch({type:"REMOVE_FROM_WISHLIST",payload:products})
  }

  // const iconName = "fa-solid fa-heart"
  
  return (
    <WishlistContext.Provider value={{...state,addToWishlist,removeFromWishlist}}>
      {children}
    </WishlistContext.Provider>
  );
}

const useWishlistContext = () => {
  return useContext(WishlistContext);
};

export { useWishlistContext };
