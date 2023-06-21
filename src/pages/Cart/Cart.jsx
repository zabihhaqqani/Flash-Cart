
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
const {dispatch,discount} = useProductContext()
    // const {cartDispatch} = useCartContext()
    const navigate = useNavigate()
    const {cartData,wishListData,getSingleProduct} = useProductContext()
    // const [discount,setDiscount] = useState(200)
    // const {dispatch} = useProductContext()
  // const discount = cartData?.reduce((acc,curr)=>acc * curr.qty,200)
  const {isUserLoggedIn} = useAuthContext()
  return (
    <>
      <div className="cart-checkout-container">
        {cartData?.length <= 0 ? "" : <h3 style={{margin:"1rem"}}>My Cart ({cartData?.length})</h3>}
        {
          <div className="categories-container">
            {cartData?.length <= 0 ? (
              <h3 style={{margin:"1rem"}}>You Cart is Empty!</h3>
            ) : (
              cartData?.map(product => {
                const { _id, name, price, category,qty ,url,rating} = product;
                return (
                  <div
                    // style={{ maxHeight: "50vh" }}
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
                    <div className="inner-box-products" onClick={() => getSingleProduct(_id)}>
                       <p><img height="200px" width="210px" src={url} alt="" /></p>
                    <h3>{name}</h3>
                    <p>₹{price}</p>
                    <p>₹{category}</p>
                    <p>Quantity</p>
                    <p>Rating: {rating}<i style={{color:"orange"}} className="fa-solid fa-star"></i></p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button
                       onClick={
                         ()=>
                         {if(isUserLoggedIn){

                           setCartQuantity(dispatch,_id,"decrement")
                               toast.success("Product Quantity Decreased!")

                         }
                          }}
                        className="fa-solid fa-circle-minus"  disabled={qty>1?false:true}>
                      
                      </button>
                      <p
                        style={{
                          width: "20px",
                          height: "20px",
                          border: "1px solid",
                        }}
                      >
                      <span className="cart-qty-number"> {qty}</span> 
                      </p>
                      <button
                        onClick={
                         ()=>
                         {if(isUserLoggedIn){

                           setCartQuantity(dispatch,_id,"increment")
                               toast.success("Product Quantity Increment!")

                         }
                          }}
                        className="fa-solid fa-circle-plus"
                       
                       
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
                            toast.warning("Login to access Cart!")

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
              <div style={{ textAlign: "left" }} className="checkout-card">
                <hr />
                <h3 style={{padding:"0.2rem"}}>Price Details: </h3>
                <hr />
                {/* <p>Items:</p> */}
                <div>
                  {cartData?.map(product => (
                    <div className="inner-card-cart" key={product._id}>
                    <p   >
                      {product.name}:
                    </p>
                    <p> ₹{product.price*product.qty}</p>
                    
                    </div>
                  ))}
                </div>
              <div className="inner-card-cart" >
                 <p >
                  Discount:  
                </p>
                <p >
                   -₹{discount}
                </p>
                </div>
                <hr  />
                <div className="inner-card-cart">
                <p style={{padding:"0.2rem"}}>
                  Total Amount:{" "}
                  
                </p>
                <p>₹{cartData?.reduce((total, curr) => total + curr.price*curr.qty-discount, 0)}</p>
                </div>
                <hr />


                <button  className="checkout-btn" onClick={()=>navigate("/checkout")}>Checkout</button>

              </div>
            )}
          </div>
        }
      </div>
    </>
  );
}
