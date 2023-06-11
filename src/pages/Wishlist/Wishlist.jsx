import { useEffect, useState } from "react";
import {  useWishlistContext } from "../../contexts/WishlistContext"

export function Wishlist() {
  
    const {wishListProducts,removeFromWishlist} = useWishlistContext()
   


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
                    <i style={{color:"red"}} onClick={()=>removeFromWishlist(product)} class="fa-regular fa-heart"></i>                    
                    <h3>{name}</h3>
                    <p>₹{price}</p>
                    <p>₹{category}</p>
                  </div>
                );
              })}



          </div>
        }
    </div>
    </>)
}