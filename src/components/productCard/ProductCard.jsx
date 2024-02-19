import { useProductContext } from "../../contexts/ProductsContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import AddToCart from "../buttons/AddToCart";
import AddToWishlist from "../buttons/AddToWishlist";
import "./ProductCard.css";

const ProductCard = ({ _id, name, price, category, url, rating, product }) => {
  const { getSingleProduct, wishListData } = useProductContext();
  const { isUserLoggedIn } = useAuthContext();
  const { dispatch, cartData } = useProductContext();
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <AddToWishlist
        wishListData={wishListData}
        _id={_id}
        isUserLoggedIn={isUserLoggedIn}
        dispatch={dispatch}
        product={product}
        navigate={navigate}
      />
      <div
        className="product-img-container"
        onClick={() => getSingleProduct(_id)}
      >
        <img src={url} alt={category} className="product-image" />
      </div>
      <div onClick={() => getSingleProduct(_id)}>
        <h3>{name}</h3>
        {/* <p>{category}</p> */}
        <p className="offer-price">${(price - price * 0.1).toFixed(0)}</p>
        <p className="actual-price">${price}</p>
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

      <AddToCart
        isUserLoggedIn={isUserLoggedIn}
        cartData={cartData}
        _id={_id}
        product={product}
        dispatch={dispatch}
      />
    </div>
  );
};

export default ProductCard;
