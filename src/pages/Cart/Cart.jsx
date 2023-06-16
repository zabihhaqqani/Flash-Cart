import { useState } from "react";
// import { useCartContext } from "../../contexts/CartContext";
// import { useWishlistContext } from "../../contexts/WishlistContext";
import {setCartQuantity} from "../../utils/cartQuantity"
import { useProductContext } from "../../contexts/ProductsContext";
import { removeFromCartHandler } from "../../utils/removeFromCart";
import { isItemInWishlList } from "../../utils/isIteminWishlist";
import { useNavigate } from "react-router-dom";
import { addToWishlistHandler } from "../../utils/addToWishlist";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlist";
 import "../Cart/Cart.css";
import { IsItemInCart } from "../../utils/isItemInCart";
import { useAuthContext } from "../../contexts/AuthContext";
import { toast } from 'react-toastify';

export function Cart() {
  // const { cartItems, removeFromCart, totalAmount,cartQuantity } = useCartContext();
  // const { removeFromWishlist, wishListProducts, addToWishlist,wishlistDispatch } =
  //   useWishlistContext();
const {dispatch,showSingleProduct,discount} = useProductContext()
    // const {cartDispatch} = useCartContext()
    const navigate = useNavigate()
    const {cartData,wishListData,getSingleProduct} = useProductContext()
    // const [discount,setDiscount] = useState(200)
    // const {dispatch} = useProductContext()
  // const discount = cartData?.reduce((acc,curr)=>acc * curr.qty,200)
  const {isUserLoggedIn} = useAuthContext()
  return (
    <>
      <div>
        {cartData?.length <= 0 ? "" : <h3>My Cart ({cartData?.length})</h3>}
        {
          <div className="categories-container">
            {cartData?.length <= 0 ? (
              <h3>You Cart is Empty!</h3>
            ) : (
              cartData?.map(product => {
                const { _id, name, price, category,qty } = product;
                return (
                  <div
                    style={{ maxHeight: "50vh" }}
                    className="category-card"
                    key={_id}
                  >
                    {wishListData?.find(item => item._id === _id) ? (
                      <i style={{color:"red"}} onClick={()=>removeFromWishlistHandler(dispatch,_id)} className="fa-solid fa-heart"></i>
                    ) : (
                      <i style={{color:"blue"}}   onClick={(e)=>{if(isItemInWishlList(wishListData,_id)){
                      navigate("/wishlist")
                    }else{
                      
                      addToWishlistHandler(product,dispatch,e)
                    }
                    }}className="fa-regular fa-heart" >
                      </i>  
                    )}
                    <div onClick={() => getSingleProduct(_id)}>
                    <h3>{name}</h3>
                    <p>₹{price}</p>
                    <p>₹{category}</p>
                    <p>Quantity</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <i
                        onClick={() => setCartQuantity(dispatch,_id,"increment")}
                        className="fa-solid fa-circle-plus"
                       
                      ></i>
                      <p
                        style={{
                          width: "20px",
                          height: "20px",
                          border: "1px solid",
                        }}
                      >
                        {qty}
                      </p>
                      <button
                        onClick={
                         ()=> setCartQuantity(dispatch,_id,"decrement")
                          }
                        className="fa-solid fa-circle-minus"
                        disabled={qty>1?false:true}
                        // onClick={e => {
                        //   if (isUserLoggedIn) {
                        //     if (isItemInWishlList(wishListData, _id)) {
                        //       navigate("/wishlist");
                        //     } else {
                        //       addToWishlistHandler(
                        //         product,
                        //         dispatch,
                        //         e
                        //       );
                        //     }
                      ></button>
                    </div>

                    <button
                      // onClick={() => removeFromCartHandler(dispatch,_id)}
                       onClick={e => {
                        if (isUserLoggedIn) {
                          if (IsItemInCart(cartData, _id)) {
                            removeFromCartHandler(dispatch, _id);
                            toast.success("Product removed from Cart!")
                          } else {
                            navigate("/cart");
                          }
                        } else {
                          navigate("/login");
                        }
                      }}
                      className="add-to-cart-btn"
                    >
                      Remove From Cart
                    </button>
                  </div>
                );
              })
            )}
           
            {cartData?.length <= 0 ? (
              ""
            ) : (
              <div style={{ textAlign: "left" }} className="category-card">
                <h3>Cart Price Details: </h3>
                <p>Items:</p>
                <div>
                  {cartData?.map(product => (
                    <div key={product._id}>
                    <p>
                      {product.name} -- {product.price*product.qty}
                    </p>
                    
                    </div>
                  ))}
                </div>
              
                 <p>
                  Discount: -{cartData?.reduce((acc,curr)=>acc * curr.qty,200)}
                </p>
                <p>
                  Total Amount:{" "}
                  {cartData?.reduce((total, curr) => total + curr.price*curr.qty-discount, 0)}
                </p>
                <button onClick={()=>navigate("/checkout")}>Checkout</button>
              </div>
            )}
          </div>
        }
      </div>
    </>
  );
}
