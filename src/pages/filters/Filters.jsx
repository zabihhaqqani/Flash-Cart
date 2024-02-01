import { useState } from "react";
import { useFilterContext } from "../../contexts/FilterContext";

import "./Filters.css";
import { products } from "../../backend/db/products";

export function Filters() {
  const {
    clearFilters,
    updateFilterValue,
    handleCategoryChange,
    handleSortChange,
    range,
    category,
    sort,
  } = useFilterContext();

  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      <div
        className={`${
          !showFilters ? "filters-container" : "filter-container-mobile"
        }`}
      >
        <div className="filter-container-header">
          <h4>FILTERS:</h4>
          <span
            className="clear-all-filters-btn"
            onClick={(e) => clearFilters(e)}
          >
            Clear All
          </span>
          <span
            className="close-filter-btn"
            onClick={() => setShowFilters(!showFilters)}
          >
            X
          </span>
        </div>
        <div className="range-container">
          <label htmlFor="range">
            <h4>RATING: </h4>
          </label>
          <div className="rating-range">
            0<span>2.5</span>
            <span>5</span>
          </div>
          <input
            type="range"
            min="0"
            max="5"
            value={range}
            id="range"
            name="range"
            step="0.5"
            onChange={(e) => updateFilterValue(e)}
          />
        </div>
        <div className="checkboxes-container">
          <h4>CATEGORY</h4>
          <label className="category-checkboxes" htmlFor="Laptop">
            <input
              type="checkbox"
              value="Laptop"
              id="Laptop"
              checked={category.includes("Laptop")}
              className="input"
              onChange={(e) => handleCategoryChange(e, "Laptop")}
            />
            Laptop
          </label>
          <label htmlFor="Phone">
            <input
              type="checkbox"
              value="Phone"
              id="Phone"
              className="input"
              checked={category.includes("Phone")}
              onChange={(e) => handleCategoryChange(e, "Phone")}
            />
            Phone
          </label>
          <label htmlFor="Headphones">
            <input
              type="checkbox"
              value="Headphones"
              id="Headphones"
              className="input"
              checked={category.includes("Headphones")}
              onChange={(e) => handleCategoryChange(e, "Headphones")}
            />
            Headphones
          </label>
        </div>
        <div className="sort-by-price-container">
          <h4>SORT BY PRICE</h4>
          <label htmlFor="low-to-high">
            <input
              type="radio"
              name="price"
              value="low-to-high"
              id="low-to-high"
              className="input"
              checked={sort === "low-to-high"}
              onChange={(e) => handleSortChange(e, "low-to-high")}
            />
            Low to High
          </label>
          <label htmlFor="high-to-low">
            <input
              type="radio"
              name="price"
              value="high-to-low"
              id="high-to-low"
              className="input"
              checked={sort === "high-to-low"}
              onChange={(e) => handleSortChange(e, "high-to-low")}
            />
            High to Low
          </label>
        </div>
      </div>

      <span
        className="material-symbols-outlined"
        onClick={() => setShowFilters(!showFilters)}
        id="filters-btn"
      >
        filter_alt
      </span>
    </div>
  );
}
