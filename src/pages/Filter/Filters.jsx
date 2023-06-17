import { useFilterContext } from "../../contexts/FilterContext";

import "../Filter/Filters.css";

export function Filters() {
  const {
    clearFilters,
    updateFilterValue,
    handleCategoryChange,
    handleSortChange,
    minRating,
    maxRating,
    valueRating,defaultRange,values,range,
    category,
    sort

  } = useFilterContext();

  return (
    <>
      <div className="filters-container">
        <h4 style={{display:"inline"}}>Filters</h4>
        <button className="clear-all-filters-btn" onClick={e => clearFilters(e)}>Clear All </button>
        <div className="range-container">
          <label htmlFor="range">
            <h4>Rating: </h4>
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
            // defaultValue="0"
             id="range"
            name="range"
            step="0.5"
            onChange={e => updateFilterValue(e)}
          />

          {/* <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        /> */}
        </div>
        <div className="checkboxes-container">
          <h4>Category</h4>
          <label className="category-checkboxes" htmlFor="Laptop">
          <input
            type="checkbox"
            value="Laptop"
            id="Laptop"
            checked={category.includes("Laptop")}
            onChange={e => handleCategoryChange(e, "Laptop")}
          />Laptop</label>
          <label htmlFor="Phone">
          <input
            type="checkbox"
            value="Phone"
            id="Phone"
            checked={category.includes("Phone")}
            onChange={e => handleCategoryChange(e, "Phone")}
          />Phone</label>
          <label htmlFor="Headphones">
          <input
            type="checkbox"
            value="Headphones"
            id="Headphones"
            checked={category.includes("Headphones")}
            onChange={e => handleCategoryChange(e, "Headphones")}
          />Headphones</label>
        </div>
        <div className="sort-by-price-container">
     <h4>Sort By Price</h4>
          <label htmlFor="low-to-high">
            <input
              type="radio"
              name="price"
              value="low-to-high"
              id="low-to-high"
             checked={sort==="low-to-high"}

              onChange={e => handleSortChange(e, "low-to-high")}
            />
            Low to High
          </label>
          <label htmlFor="high-to-low">
            <input
              type="radio"
              name="price"
              value="high-to-low"
              id="high-to-low"
             checked={sort==="high-to-low"}

              onChange={e => handleSortChange(e, "high-to-low")}
            />
            High to Low
          </label>
        </div>
      </div>
    </>
  );
}
