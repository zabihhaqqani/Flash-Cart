import { createContext, useContext, useEffect, useReducer } from "react";
// import { useProductContext } from "./ProductsContext";
import FilterReducer from "../reducer/FilterReducer";
import { useProductContext } from "./ProductsContext";

const initialState = {
  sort: "low-to-high",
  category: "Laptop",
  range: 100,
  clearFilters: [],
  checkedCheckbox: false,
  minRating: "5",
};
const FilterContext = createContext(initialState);

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(FilterReducer, {
    sort: "",
    category: [],
    range: 0,
    clearFilters: "",
    minRating: 0,
    maxRating: 5,
    valueRating: 0,
    checkedCheckbox: false,
    products: [],
    inputValue: "",
    categorySelection: "",
    checkbox1: false,
    currentColor: [],
  });

  useEffect(() => {});

  const handleSortChange = (e) => {
    const clickedSort = e.target.value;
    dispatch({ type: "SORT", payload: clickedSort });
  };

  const handleCategoryChange = (e, option) => {
    // let isChecked = e.target.checked;
    if (state?.category.includes(option)) {
      dispatch({
        type: "CATEGORY",
        payload: state?.category.filter((c) => c !== option),
      });
    } else {
      dispatch({ type: "CATEGORY", payload: [...state?.category, option] });
    }
  };

  const updateFilterValue = (e) => {
    const value = e.target.value;
    dispatch({ type: "RANGE", payload: value });
  };

  const clearFilters = (e) => {
    const value = e.target.innerText;
    dispatch({ type: "CLEAR_ALL_FILTERS", payload: value });
  };

  const searchFilter = (e) => {
    const inputValue = e.target.value;
    dispatch({ type: "SEARCH_FILTER", payload: { inputValue, products } });
  };

  const colorHandler = (color) => {
    // Check if the color is already in the currentColor array
    if (state?.currentColor.includes(color)) {
      // If it is, remove the color from the array
      dispatch({
        type: "SET_COLOR",
        payload: state?.currentColor.filter((c) => c !== color),
      });
    } else {
      // If it's not, add the color to the array
      dispatch({ type: "SET_COLOR", payload: [...state?.currentColor, color] });
    }
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        dispatch,
        clearFilters,
        updateFilterValue,
        handleCategoryChange,
        handleSortChange,
        searchFilter,
        colorHandler,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
