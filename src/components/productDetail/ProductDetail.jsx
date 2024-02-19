import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useProductContext } from "../../contexts/ProductsContext";
import "./ProductDetail.css";
import AddToWishlist from "../buttons/AddToWishlist";
import AddToCart from "../buttons/AddToCart";

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
      <AddToWishlist
        wishListData={wishListData}
        _id={_id}
        isUserLoggedIn={isUserLoggedIn}
        dispatch={dispatch}
        product={product}
        navigate={navigate}
      />
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

        <AddToCart
          isUserLoggedIn={isUserLoggedIn}
          cartData={cartData}
          _id={_id}
          product={product}
          dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
