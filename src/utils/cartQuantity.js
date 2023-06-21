import axios from "axios";

export const setCartQuantity = async (dispatch, itemId, type) => {
  
  try {
    const encodedToken = localStorage.getItem("token");
    const { status, data } = await axios.post(
      `api/user/cart/${itemId}`,
      { action: { type } },
      {
        headers: {
          authorization: encodedToken,
        },
      }
      );
      
    if (status === 200) {
      dispatch({ type: "SET_CART_PRODUCTS",payload: data?.cart});
    }
  } catch (error) {
    console.log(error);
  }
};
