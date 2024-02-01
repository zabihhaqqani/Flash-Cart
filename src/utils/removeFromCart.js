import axios from "axios";

export const removeFromCartHandler = async (dispatch, itemId) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { status, data } = await axios.delete(`/api/user/cart/${itemId}`, {
      headers: {
        authorization: encodedToken,
      },
    });
    if (status === 200) {
      dispatch({
        type: "SET_CART_PRODUCTS",
        payload: data?.cart,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
