export function OrderReducer(state, action) {
  switch (action.type) {
    case "SET_ADDRESS_DETAILS":
        return {
          ...state,
          addressDetails:action.payload
        };
        case "SET_ORDER_HISTORY" :
            return {
              ...state,
              orderHistory: [...state?.orderHistory, action?.payload],
            };
    default:
      return state;
  }
}
