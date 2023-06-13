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
    valueRating,
    category,
    sort

  } = useFilterContext();

  return (
    <>
      <div className="filters-container">
        <button onClick={e => clearFilters(e)}>Clear All Filters</button>
        <div className="range-container">
          <label for="range">
            <strong>Rating: </strong>
          </label>
          <div className="rating-range">
            0<span>2.5</span>
            <span>5</span>
          </div>
          <input
            type="range"
            min={minRating}
            max={maxRating}
            // value={ }
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
          <label for="Laptop"></label>Laptop
          <input
            type="checkbox"
            value="Laptop"
            id="Laptop"
            // checked={state.checkbox1}
            checked={category.includes("Laptop")}
            onChange={e => handleCategoryChange(e, "Laptop")}
          />
          <label for="Laptop"></label>Phone
          <input
            type="checkbox"
            value="Phone"
            id="Phone"
            checked={category.includes("Phone")}
            onChange={e => handleCategoryChange(e, "Phone")}
          />
          <label for="Laptop"></label>Headphones
          <input
            type="checkbox"
            value="Headphones"
            id="Headphones"
            checked={category.includes("Headphones")}

            onChange={e => handleCategoryChange(e, "Headphones")}
          />
        </div>

        <div>
          <label for="low-to-high">
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
          <label for="high-to-low">
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
