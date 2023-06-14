import { useCartContext } from "../../contexts/CartContext";
import { useProductContext } from "../../contexts/ProductsContext";
import { useWishlistContext } from "../../contexts/WishlistContext";
import {useNavigate} from "react-router-dom"

export function ProductPage() {

    const {singleProduct} = useProductContext()
    const {wishListProducts,removeFromWishlist,addToWishlist} = useWishlistContext()
    const {addToCart,cartItems} = useCartContext()
    const navigate = useNavigate()

    return <>{
          <div className="categories-container">
            {singleProduct.length > 0 &&
              singleProduct?.map(product => {
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
                 
                    <button onClick={(e)=>addToCart(product,e,_id)} value="Add to Cart" className="add-to-cart-btn">  
                     {cartItems?.find(item=>item._id === _id)?"Go to Cart":"Add  to Cart"}
                    </button>
                    
                  </div>
                );
              })}
          </div>
        }</>
}