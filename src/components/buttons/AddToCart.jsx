import React from "react";
import { toast } from "react-toastify";
import { IsItemInCart } from "../../utils/isItemInCart";
import { addToCartHandler } from "../../utils/addToCart";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ isUserLoggedIn, cartData, _id, product, dispatch }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
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
  };

  return (
    <button
      onClick={handleClick}
      value="Add to Cart"
      className="product-btn"
      style={{
        backgroundColor: cartData?.find((item) => item._id === _id)
          ? "#0096FF"
          : "Add to Cart",
        color: cartData?.find((item) => item._id === _id) ? "white" : "",
      }}
    >
      <span className="material-symbols-outlined">shopping_cart</span>
      {cartData?.find((item) => item._id === _id)
        ? "Go to Cart"
        : "Add to Cart"}
    </button>
  );
};

export default AddToCart;
