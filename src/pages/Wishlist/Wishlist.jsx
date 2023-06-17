import { useEffect, useState } from "react";
// import {  useWishlistContext } from "../../contexts/WishlistContext"
// import { useCartContext } from "../../contexts/CartContext";
import { IsItemInCart } from "../../utils/isItemInCart";
import { useNavigate } from "react-router-dom";
import { addToCartHandler } from "../../utils/addToCart";
import { removeFromCartHandler } from "../../utils/removeFromCart";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlist";
import { useProductContext } from "../../contexts/ProductsContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { toast } from 'react-toastify';

export function Wishlist() {
  
    // const {wishListProducts,removeFromWishlist,wishlistDispatch} = useWishlistContext()
    // const {cartItems,removeFromCart,addToCart,cartDispatch} = useCartContext()
  const {showSingleProduct,dispatch,cartData,wishListData,getSingleProduct} = useProductContext()
  const {isUserLoggedIn} = useAuthContext()
    const navigate = useNavigate()
    return (<>
    <div>
              {wishListData?.length <= 0 ?'':<h3>My WishList ({wishListData?.length})</h3>}
          {
          <div className="categories-container">
            {wishListData?.length <= 0 ?<h3>You don't have any product in your wishlist</h3>:
              wishListData?.map(product => {
                const { _id, name, price, category } = product;
                return (
                  <div
                    style={{ maxHeight: "50vh" }}
                    className="category-card"
                    key={_id}
                    >
                    <i style={{color:"red"}} onClick={() =>
                          {if(isUserLoggedIn){

                            removeFromWishlistHandler(dispatch, _id)
                               toast.success("Product removed from Wishlist!")
                            
                          }
                        }} className="fa-solid fa-heart"></i>  
                    <div onClick={() => getSingleProduct(_id)}>                  
                    <h3>{name}</h3>
                    <p>₹{price}</p>
                    <p>₹{category}</p>
                    </div>

               <button onClick={(e)=>{if(IsItemInCart(cartData,_id)){
                      navigate("/cart")
                    }else{
                      
                      addToCartHandler(product,dispatch,e)
                               toast.success("Product added to Cart!")

                    }
                    }} value="Add to Cart" className="add-to-cart-btn">  
                     {cartData?.find(item=>item._id === _id)?"Go to Cart":"Add  to Cart"}
                    </button>
                

                  </div>
                );
              })}



          </div>
        }
    </div>
    </>)
}