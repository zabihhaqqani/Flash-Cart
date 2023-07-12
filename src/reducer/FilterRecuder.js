export default function FilterReducer(state, action) {
  switch (action.type) {
    case "PAGE_LOADS":
      return {
        ...state,
      };
    case 'SORT':
      return {
        ...state,
        sort: action.payload,
      };
   
      case "CATEGORY":
      
      return {
        ...state,
        checkedCheckbox: !state.checkedCheckbox,
        category: action.payload.isChecked
          ? [...state.category, action.payload.option]
          : state.category.length > 0
          ? state.category?.filter(
              categoryname => categoryname !== action.payload.option
            )
          : [],
      };
    case "RANGE":
      return {
        ...state,
        range: action.payload,
      };
    case "CLEAR_ALL_FILTERS":
      return {
        ...state,
        sort: "",
        category: [],
        range: 0,
        clearFilters: action.payload,
        categoryname: ["Laptop", "Phone", "Headphones"],
        valueRating: 0,
        inputValue:''
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
    default:
      return state;
  }
}
