const FilterReducer = (state, action)=> {
  switch (action.type) {
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        sort: "",
        category: [],
        range: 0,
        clearFilters: action.payload,
        categoryname: ["Laptop", "Phone", "Headphones"],
        valueRating: 0,
        inputValue: "",
      };
    case "PAGE_LOADS":
      return {
        ...state,
      };
    case "SORT":
      return {
        ...state,
        sort: action.payload,
      };

    case "CATEGORY":
      return {
        ...state,
        category: action.payload,
      };

    case "RANGE":
      return {
        ...state,
        range: action.payload,
      };

    case "SEARCH_FILTER":
      return {
        ...state,
        inputValue: action.payload.inputValue,
      };
    case "CATEGORY_SELECTOR":
      return {
        ...state,
        categorySelection: action.payload,
        category: [action.payload],
      };
    case "SET_COLOR":
      return {
        ...state,
        currentColor: action.payload,
      };

    default:
      return state;
  }
}




export default FilterReducer