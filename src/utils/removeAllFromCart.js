import { removeFromCartHandler } from "./removeFromCart";

const clearCartItems = (dispatch, cartData) => {
  for (const item of cartData) {
    removeFromCartHandler(dispatch, item?._id);
  }
};

export default clearCartItems;
