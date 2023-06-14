import { createContext, useContext, useEffect, useReducer, useState } from "react";
// import { useProductContext } from "./ProductsContext";
import FilterReducer from "../reducer/FilterRecuder";
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
    valueRating:0,
    checkedCheckbox: false,
    products: [],
    inputValue: "",
    categorySelection: "",
    checkbox1:false,
  });


  
  useEffect(() => {});

  const handleSortChange = (e) => {
    const clickedSort = e.target.value
    dispatch({ type: "SORT", payload: clickedSort });
  };

  const handleCategoryChange = (e, option,) => {
    let isChecked = e.target.checked;
    dispatch({ type: "CATEGORY", payload: {option,isChecked} });
  };


  const updateFilterValue = (e) => {
    const value = e.target.value
    dispatch({type:"RANGE",payload:value})
  }
  const clearFilters = (e) => {
    const value = e.target.innerText;
  
    dispatch({type:"CLEAR_ALL_FILTERS",payload:value})
  }
   const searchFilter = (e) => {
      const inputValue = e.target.value
      dispatch({type:"SEARCH_FILTER",payload:{inputValue,products}})
    }
// let maxRating = 5
// let minRating = 0
  return (
    <FilterContext.Provider value={{ ...state, dispatch,clearFilters,updateFilterValue,handleCategoryChange,handleSortChange,searchFilter}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
