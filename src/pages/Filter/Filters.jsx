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
    valueRating,defaultRange,values,
    category,
    sort

  } = useFilterContext();

  return (
    <>
      <div className="filters-container">
        <button onClick={e => clearFilters(e)}>Clear All Filters</button>
        <div className="range-container">
          <label htmlFor="range">
            <strong>Rating: </strong>
          </label>
          <div className="rating-range">
            0<span>2.5</span>
            <span>5</span>
          </div>
          <input
            type="range"
            min="0"
            max="5"
            defaultValue="0"
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
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>Category</h3>
          <label htmlFor="Laptop"></label>Laptop
          <input
            type="checkbox"
            value="Laptop"
            id="Laptop"
            // checked={state.checkbox1}
            checked={category.includes("Laptop")}
            onChange={e => handleCategoryChange(e, "Laptop")}
          />
          <label htmlFor="Headphones"></label>Phone
          <input
            type="checkbox"
            value="Phone"
            id="Phone"
            checked={category.includes("Phone")}
            onChange={e => handleCategoryChange(e, "Phone")}
          />
          <label htmlFor="Headphones"></label>Headphones
          <input
            type="checkbox"
            value="Headphones"
            id="Headphones"
            checked={category.includes("Headphones")}

            onChange={e => handleCategoryChange(e, "Headphones")}
          />
        </div>

        <div>
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
