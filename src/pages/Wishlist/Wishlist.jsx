import { useEffect, useState } from "react";
import {  useWishlistContext } from "../../contexts/WishlistContext"
import { useCartContext } from "../../contexts/CartContext";

export function Wishlist() {
  
    const {wishListProducts,removeFromWishlist} = useWishlistContext()
    const {cartItems,removeFromCart,addToCart} = useCartContext()

  
    return (<>
    <div>
              {wishListProducts.length <= 0 ?'':<h3>My WishList ({wishListProducts.length})</h3>}
          {
          <div className="categories-container">
            {wishListProducts.length <= 0 ?<h3>You don't have any product in your wishlist</h3>:
              wishListProducts?.map(product => {
                const { _id, name, price, category } = product;
                return (
                  <div
                    style={{ maxHeight: "50vh" }}
                    className="category-card"
                    key={_id}
                    >
                    <i style={{color:"red"}} onClick={()=>removeFromWishlist(product)} className="fa-solid fa-heart"></i>                    
                    <h3>{name}</h3>
                    <p>₹{price}</p>
                    <p>₹{category}</p>
                    

               <button onClick={(e)=>addToCart(product,e,_id)} value="Add to Cart" className="add-to-cart-btn">  
                     {cartItems?.find(item=>item._id === _id)?"Go to Cart":"Add  to Cart"}
                    </button>
                

                  </div>
                );
              })}



          </div>
        }
    </div>
    </>)
}