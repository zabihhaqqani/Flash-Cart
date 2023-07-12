import axios from "axios";

export const addToWishlistHandler = async (product, dispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { status, data } = await axios.post(
      `/api/user/wishlist`,
      { product },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (status === 201) {
      dispatch({
        type: "SET_WISHLIST_PRODUCTS",
        payload: data?.wishlist,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
