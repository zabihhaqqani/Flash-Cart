import axios from "axios";

export const removeFromWishlistHandler = async (dispatch, itemId) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { status, data } = await axios.delete(`/api/user/wishlist/${itemId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (status === 200) {
      dispatch({
        type: "SET_WISHLIST_PRODUCTS",
        payload: data?.wishlist,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
