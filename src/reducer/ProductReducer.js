// import { PureComponent } from "react/cjs/react.production.min";
// import { ProductsContext } from "../ProductsContext";


export default function ProductReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "API_DATA":
       return {
        ...state,
        isLoading: false,
        products: action.payload.products,
       
      };
      
      case "UPDATE_CHECKBOX_VALUE":
          return {
            ...state
          
          }
    
    default:
      return state;
  }
  // return state
}
