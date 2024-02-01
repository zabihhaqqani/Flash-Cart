export default function ProductReducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_CATEGORIES":
      return {
        ...state,
        categoriesData: action.payload,
      };
    case "SET_CART_PRODUCTS": {
      return {
        ...state,
        cartData: action.payload,
      };
    }
    case "SET_WISHLIST_PRODUCTS": {
      return {
        ...state,
        wishListData: action.payload,
      };
    }

    case "SET_ADDRESS": {
      return {
        ...state,
        addressData: "",
      };
    }
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
        products: action.payload,
      };

    case "UPDATE_CHECKBOX_VALUE":
      return {
        ...state,
      };
    case "EDIT_ADDRESS":
      return {
        ...state,
        addressData: state?.addressData?.map((data) =>
          data.id === action.payload ? { ...data, isEdit: true } : data
        ),
      };

    case "EDITED_ADDRESS":
      return {
        ...state,
        addressData: state?.addressData?.map((address) =>
          address.id === action.payload[1] ? { ...action.payload[0] } : address
        ),
      };
    case "CANCEL_ADDRESS":
      return {
        ...state,
        addressData: state?.addressData?.map((data) =>
          data.id === action.payload ? { ...data, isEdit: false } : data
        ),
      };
    case "DELETE_ADDRESS":
      return {
        ...state,
        addressData: state?.addressData?.filter(
          (data) => data.id !== action.payload
        ),
      };
    case "ADD_NEW_ADDRESS":
      return {
        ...state,
        addressData: [...state?.addressData, action.payload],
      };
    case "SHOW_SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: [action.payload],
      };

    default:
      return state;
  }
}
