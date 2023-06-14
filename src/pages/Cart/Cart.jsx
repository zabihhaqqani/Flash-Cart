import { useState } from "react";
import { useCartContext } from "../../contexts/CartContext";
import { useWishlistContext } from "../../contexts/WishlistContext";

export function Cart() {

    const {cartItems,removeFromCart,totalAmount} = useCartContext()
    const {removeFromWishlist,wishListProducts,addToWishlist} = useWishlistContext() 
    const [quantity,setQuantity] = useState(0)
    return <>
      <div>
        {cartItems.length <= 0 ?'':<h3>My Cart ({cartItems.length})</h3>}
          {
            <div className="categories-container">
            {cartItems.length <= 0 ?<h3>You Cart is Empty!</h3>:
            
            cartItems?.map(product => {
              const { _id, name, price, category } = product;
              return (
                <div
                style={{ maxHeight: "50vh" }}
                className="category-card"
                key={_id}
                >
                
    {wishListProducts?.find(item=>item._id===_id)?
                      <i style={{color:"red"}} onClick={()=>removeFromWishlist(product)} className="fa-solid fa-heart"></i>:
                      <i style={{color:"blue"}}  onClick={()=>addToWishlist(product)} className="fa-regular fa-heart" >
                      </i>  }
                                        <h3>{name}</h3>
                    <p>₹{price}</p>
                    <p>₹{category}</p>
                    <p>Quantity</p>
                    <div style={{display:"flex",justifyContent:"center"}}>
                    <i onClick={()=>setQuantity(quantity+1)} className="fa-solid fa-circle-plus"></i>
                    <p style={{width:"20px",height:"20px",border:"1px solid"}}>{quantity}</p>
                    <i onClick={()=>setQuantity(quantity-1)} className="fa-solid fa-circle-minus"></i>
                    </div>

                    <button onClick={()=>removeFromCart(product)} className="add-to-cart-btn">Remove From Cart</button>
                  </div>
                );

                
              })}
                      {cartItems.length <= 0 ?'':
              <div style={{textAlign:"left"}} className="category-card">
                <h3>Cart Price Details: </h3>
                <p>Items:</p>
                <p>{cartItems.map(product=><p>{product.name} -- {product.price}</p>)}</p>
                <p>Total Amount: {cartItems.reduce(
            (total, curr) => total + curr.price,
            0
          )}</p>
              </div>}



          </div>
        }
    </div></>
}