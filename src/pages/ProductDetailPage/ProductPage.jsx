// import { useCartContext } from "../../contexts/CartContext";
import { useProductContext } from "../../contexts/ProductsContext";
// import { useWishlistContext } from "../../contexts/WishlistContext";
import {useNavigate} from "react-router-dom"
import { addToCartHandler } from "../../utils/addToCart";
import { IsItemInCart } from "../../utils/isItemInCart";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlist";
import { isItemInWishlList } from "../../utils/isIteminWishlist";
import { addToWishlistHandler } from "../../utils/addToWishlist";
import { useAuthContext } from "../../contexts/AuthContext";
import { toast } from 'react-toastify';
import "../Products/Products.css";


export function ProductPage() {

    const {singleProduct} = useProductContext()
    // const {wishListProducts,removeFromWishlist,addToWishlist,wishlistDispatch} = useWishlistContext()
    // const {addToCart,cartItems,cartDispatch} = useCartContext()
    const navigate = useNavigate()
    const {getSingleProduct,dispatch,cartData,wishListData} = useProductContext()
    const {isUserLoggedIn} = useAuthContext()
    // console.log(singleProduct)
    return <>{
          <div className="categories-container">
            {singleProduct?.length > 0 &&
              singleProduct?.map(product => {
                const { _id, name, price, category,url } = product;
                return (
                  <div
                    // style={{ maxHeight: "50vh" }}
                    className="category-card"
                    key={_id}
                    >
                   
                      {wishListData?.find(item => item._id === _id) ? (
                      <i
                        style={{ color: "red" }}
                        onClick={() =>
                          {if(isUserLoggedIn){

                            removeFromWishlistHandler(dispatch, _id)
                               toast.success("Product removed from Wishlist!")
                            
                          }
                        }}
                        className="fa-solid fa-heart"
                      ></i>
                    ) : (
                      <i
                        style={{ color: "blue" }}
                        onClick={e => {
                          if (isUserLoggedIn) {
                            if (isItemInWishlList(wishListData, _id)) {
                              navigate("/wishlist");
                            } else {
                              addToWishlistHandler(
                                product,
                                dispatch,
                                e
                              );
                               toast.success("Product added to Wishlist!")
                            }
                          } else {
                            navigate("/login");
                                  toast.warning("Login to access Wishlist!")
                          }
                        }}
                        className="fa-regular fa-heart"
                      ></i>
                    )}
                    
                   <div className="inner-box-products">
                    <p><img height="215px" width="210px" src={url} alt="" /></p>
                    <h3>{name}</h3>
                    <p>₹{price}</p>
                    <p>₹{category}</p>
                 </div>            
                  <button
                      onClick={e => {
                        if (isUserLoggedIn) {
                          if (IsItemInCart(cartData, _id)) {
                            navigate("/cart");
                          } else {
                            addToCartHandler(product, dispatch, e);
                            toast.success("Product added to Cart!")
                          }
                        } else {
                         toast.warning("Login to access Cart!")
                          navigate("/login");
                        }
                      }}
                      value="Add to Cart"
                      className="add-to-cart-btn"
                    >
                      {cartData?.find(item => item._id === _id)
                        ? "Go to Cart"
                        : "Add  to Cart"}
                    </button>
                    
                  </div>
                );
              })}
          </div>
        }</>
}