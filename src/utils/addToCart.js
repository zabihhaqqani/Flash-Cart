import axios from "axios";

export const addToCartHandler = async (product, dispatch) => {
  try {
    const encodedToken = localStorage.getItem("token");
    const { status, data } = await axios.post(
      `/api/user/cart`,
      { product },
      {
        headers: {
          authorization: encodedToken,
        },
      }
    );
    if (status === 201) {
      dispatch({
        type: "SET_CART_PRODUCTS",
        payload: data?.cart,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
