import "./Category.css";
import { useFilterContext } from "../../contexts/FilterContext";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../contexts/ProductsContext";

export const  Category = () => {
  const { categoriesData } = useProductContext();
  const { dispatch } = useFilterContext();
  const navigate = useNavigate();

  const categorySelector = (categoryName) => {
    dispatch({ type: "CATEGORY_SELECTOR", payload: categoryName });
  };

  return (
    <div className="category-container">
      <h2>Categories</h2>
      <div className="category-cards">
        {categoriesData?.map((category) => {
          const { _id, categoryName, description, url } = category;
          return (
            <div
              className="category-card"
              key={_id}
              onClick={() => {
                categorySelector(categoryName);
                navigate("/products");
              }}
            >
              <img src={url} alt={categoryName} />
              <h3>{categoryName}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
