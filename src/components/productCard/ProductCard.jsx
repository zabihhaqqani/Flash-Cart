import { addToCartHandler } from "../../utils/addToCart";
import { IsItemInCart } from "../../utils/isItemInCart";
import { addToWishlistHandler } from "../../utils/addToWishlist";
import { isItemInWishlList } from "../../utils/isIteminWishlist";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlist";
import { toast } from "react-toastify";
import { useProductContext } from "../../contexts/ProductsContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard = ({ _id, name, price, category, url, rating, product }) => {
  const { getSingleProduct, wishListData } = useProductContext();
  const { isUserLoggedIn } = useAuthContext();
  const { dispatch, cartData } = useProductContext();
  const navigate = useNavigate();

  const wishlistIcon = wishListData?.find((item) => item._id === _id) ? (
    <i
      onClick={() => {
        if (isUserLoggedIn) {
          removeFromWishlistHandler(dispatch, _id);
          toast.success("Product Removed from Wishlist!");
        }
      }}
      className="fa-solid fa-heart wishlist-icon"
    ></i>
  ) : (
    <i
      onClick={(e) => {
        if (isUserLoggedIn) {
          if (isItemInWishlList(wishListData, _id)) {
            navigate("/wishlist");
          } else {
            addToWishlistHandler(product, dispatch, e);
            toast.success("Product Added to Wishlist!");
          }
        } else {
          navigate("/login");
          toast.warning("Login to Access Wishlist!");
        }
      }}
      className="fa-regular fa-heart wishlist-icon"
    ></i>
  );

  return (
    <div className="product-card">
      {wishlistIcon}
      <div
        className="product-img-container"
        onClick={() => getSingleProduct(_id)}
      >
        <LazyLoadImage
          alt={name}
          // height="200px"
          src={url} // use normal <img> attributes as props
          effect="blur"
          // width="100%"
          className="product-image"
          placeholderSrc={url}
        />
        {/* <img src={url} alt={category} className="product-image" /> */}
      </div>
      <div onClick={() => getSingleProduct(_id)}>
        <h3>{name}</h3>
        {/* <p>{category}</p> */}
        <p className="offer-price"> 
         ${price}
        </p>
        <p className="actual-price"> 
         ${price}
        </p>
      </div>
      <span>
        {Array.from({ length: 5 }, (_, index) => (
          <i
            key={index}
            className={`fa-solid rating-icon ${
              index + 1 <= Math.floor(rating) // Full star
                ? "fa-star"
                : index < rating // Half-filled star
                ? "fa-star-half-stroke"
                : "fa-star-empty" // Empty star
            }`}
          ></i>
        ))}
      </span>

      <button
        onClick={(e) => {
          if (isUserLoggedIn) {
            if (IsItemInCart(cartData, _id)) {
              navigate("/cart");
            } else {
              addToCartHandler(product, dispatch, e);
              toast.success("Product added to Cart!");
            }
          } else {
            toast.warning("Login to access Cart!");
            navigate("/login");
          }
        }}
        value="Add to Cart"
        className="product-btn"
        style={{
          backgroundColor: cartData?.find((item) => item._id === _id)
            ? "#0096FF"
            : "Add  to Cart",
         color:cartData?.find((item) => item._id === _id) ?"white" : ""}}
      >
        <span className="material-symbols-outlined">shopping_cart</span>  
        {cartData?.find((item) => item._id === _id)
          ? "Go to Cart"
          : "Add  to Cart"}
     </button>
    </div>
  );
};

export default ProductCard;
