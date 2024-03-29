import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../contexts/AuthContext";
import { useProductContext } from "../../contexts/ProductsContext";
import { addToWishlistHandler } from "../../utils/addToWishlist";
import { isItemInWishlList } from "../../utils/isIteminWishlist";
import { removeFromCartHandler } from "../../utils/removeFromCart";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlist";
import { setCartQuantity } from "../../utils/cartQuantity";
import "./CartCard.css";
import AddToWishlist from "../buttons/AddToWishlist";

const CartCard = ({ product }) => {
  const { dispatch, discount, cartData, wishListData, getSingleProduct } =
    useProductContext();
  const { isUserLoggedIn } = useAuthContext();

  const navigate = useNavigate();
  const handleQuantity = (productId, type) => {
    if (isUserLoggedIn) {
      setCartQuantity(dispatch, productId, type);
      toast.success(
        `Product Quantity ${type === "increment" ? "Increased" : "Decreased"}!`
      );
    }
  };

  const handleRemove = (productId) => {
    if (isUserLoggedIn) {
      removeFromCartHandler(dispatch, productId);
      toast.success("Product removed from Cart!");
    } else {
      toast.warning("Login to access Cart!");
      navigate("/login");
    }
  };

  const handleWishlist = (productId) => {
    if (isItemInWishlList(wishListData, productId)) {
      navigate("/wishlist");
    } else {
      addToWishlistHandler(getSingleProduct(productId), dispatch);
      toast.success("Product added to Wishlist!");
    }
  };

  return (
    <div className="cart-card">
      <img src={product.url} alt={product.name} />
      <AddToWishlist
        wishListData={wishListData}
        _id={product?._id}
        isUserLoggedIn={isUserLoggedIn}
        dispatch={dispatch}
        product={product}
        navigate={navigate}
      />

      <div className="cart-card-details">
        <h3>{product.name}</h3>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong> Rating: {product.rating}</strong>
          <i style={{ color: "orange" }} className="fa-solid fa-star"></i>
        </p>
        <div className="quantity-controls">
          <p>
            <strong>Quantity:</strong>
          </p>
          <button
            onClick={() => handleQuantity(product._id, "decrement")}
            disabled={product.qty <= 1}
          >
            -
          </button>
          <p className="cart-qty-number">{product.qty}</p>
          <button onClick={() => handleQuantity(product._id, "increment")}>
            +
          </button>
        </div>
        <button className="cart-btn" onClick={() => handleRemove(product._id)}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
};

export default CartCard;
