
export  function CartReducer(state,action) {
    switch (action.type) {
      
      case "ADD_TO_CART":
        return {
          ...state,
          cartItems: [
            ...state.cartItems.filter(
              product => product._id !== action.payload._id
            ),
            action.payload,
          ],
         
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cartItems: [
            ...state.cartItems.filter(
              product => product._id !== action.payload._id
            ),
          ],
       
        };
        // case "ADDED_TO_CART":
        //     console.log("hi");
        //     return{
        //         ...state,

        //     }
      default:
        return state;
    }
}