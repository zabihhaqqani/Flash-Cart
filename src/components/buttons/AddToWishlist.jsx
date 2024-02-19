import React from "react";
import { toast } from "react-toastify";
import { addToWishlistHandler } from "../../utils/addToWishlist";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlist";
import { isItemInWishlList } from "../../utils/isIteminWishlist";

const AddToWishlist = ({
  wishListData,
  _id,
  isUserLoggedIn,
  dispatch,
  product,
  navigate,
}) => {
  const handleRemoveFromWishlist = () => {
    if (isUserLoggedIn) {
      removeFromWishlistHandler(dispatch, _id);
      toast.success("Product Removed from Wishlist!");
    }
  };

  const handleAddToWishlist = (e) => {
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
  };

  return (
    <i
      onClick={
        wishListData?.find((item) => item._id === _id)
          ? handleRemoveFromWishlist
          : handleAddToWishlist
      }
      className={`fa-${
        wishListData?.find((item) => item._id === _id) ? "solid" : "regular"
      } fa-heart wishlist-icon`}
    ></i>
  );
};

export default AddToWishlist;
