export default function WishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      
      return {
        ...state,
        wishListProducts: [
          ...state.wishListProducts.filter(
            product => product._id !== action.payload._id
          ),
          action.payload,
        ],
        // iconName: "fa-solid fa-heart",
      };
      case "REMOVE_FROM_WISHLIST" :
        console.log(action.payload._id)
        return{
            ...state,
            wishListProducts:[...state.wishListProducts.filter(product=> product._id !== action.payload._id)]
        }
    default:
      return state;
  }
}
