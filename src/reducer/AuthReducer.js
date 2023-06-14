export function AuthReducer(state, action) {
  switch (action.type) {
    case "LOGIN_AS_GUEST":
      return {
        ...state,
        email: "adarshbalika@gmail.com",
        password: "adarshbalika",
      };
    case "USER_EMAIL":
      return {
        ...state,
        email: action?.payload,
      };
    case "USER_PASSWORD":
      return {
        ...state,
        password: action?.payload,
      };

    case "USER_LOGIN":
      return {
        ...state,
        email: action?.payload,
        password: action?.payload,
      };
    case "USER_DATA":
      console.log(action.payload.encodedToken);
      return {
        ...state,
   
      };
    default:
      return state;
  }
}
