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

        // MaxRangeValue: "5",
      };
    case "CLEAR_ALL_FILTERS":
      //  filters: {
      //         ...state.filters,
      //         text: "",
      //         category: "all",
      //         company: "all",
      //         color: "all",
      //         maxPrice: 0,
      //         price: state.filters.maxPrice,
      //         minPrice: state.filters.maxPrice,
      return {
        ...state,
        sort: "",
        category: [],
        range: 0,

        clearFilters: action.payload,
        categoryname: ["Laptop", "Phone", "Headphones"],
        // checkbox1: true,
        valueRating: 0,
        // maxRating: 5,
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
