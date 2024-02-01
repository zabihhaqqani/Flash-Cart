export const  AuthReducer = (state, action) =>{
  switch (action.type) {
    case "IS_LOGGED_IN_TRUE":
      return {
        ...state,
        isUserLoggedIn: action.payload,
      };
    case "IS_LOGGED_IN_FALSE":
      return {
        ...state,
        isUserLoggedIn: action.payload,
      };
      case "SET_USER":
        return {
          ...state,
          user: action.payload,
        };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
}
