import { useNavigate } from "react-router-dom";
import { addToCartHandler } from "../../utils/addToCart";
import { IsItemInCart } from "../../utils/isItemInCart";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlist";
import { isItemInWishlList } from "../../utils/isIteminWishlist";
import { addToWishlistHandler } from "../../utils/addToWishlist";
import { useAuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import { useProductContext } from "../../contexts/ProductsContext";
import "./ProductDetail.css";

const ProductDetail = ({
  _id,
  name,
  price,
  category,
  url,
  rating,
  deliveryInDays,
  product,
}) => {
  const navigate = useNavigate();
  const { dispatch, cartData, wishListData } = useProductContext();
  const { isUserLoggedIn } = useAuthContext();
  return (
    <div className="product-detail-container">
      {wishListData?.find((item) => item._id === _id) ? (
        <i
          onClick={() => {
            if (isUserLoggedIn) {
              removeFromWishlistHandler(dispatch, _id);
              toast.success("Product removed from Wishlist!");
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
                toast.success("Product added to Wishlist!");
              }
            } else {
              navigate("/login");
              toast.warning("Login to access Wishlist!");
            }
          }}
          className="fa-regular fa-heart wishlist-icon"
        ></i>
      )}

      <div className="product-detail-card">
        <img src={url} alt={category} className="product-image" />
      </div>
      <div>
        <h3>{name}</h3>
        <p>
          <strong>Price: </strong>${price}
        </p>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>
          <strong>Rating: </strong>
          {rating}
        </p>
        <p>
          <strong>Delivery: </strong>
          {deliveryInDays} Days
        </p>
        <p>
          <i className="fa-solid fa-tag"></i> Fastest Delivery
        </p>
        <p>
          {" "}
          <i className="fa-solid fa-tag"></i> Inclusive of All Taxes
        </p>
        <p>
          <i className="fa-solid fa-tag"></i> Cash On Delivery
        </p>

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
          }}
        >
          {cartData?.find((item) => item._id === _id)
            ? "Go to Cart"
            : "Add  to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
