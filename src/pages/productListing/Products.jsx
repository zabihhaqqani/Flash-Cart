import { useFilterContext } from "../../contexts/FilterContext";
import { useProductContext } from "../../contexts/ProductsContext";
import { Filters } from "../filters/Filters";
import "./Products.css";
import ProductCard from "../../components/productCard/ProductCard";

export const Products = () => {
  const { products } = useProductContext();
  const { sort, range, inputValue, category } = useFilterContext();

  const sortAndFilterProducts = (
    products,
    { sort, category, range, inputValue }
  ) => {
    return [...products]
      .filter(
        (product) =>
          // Category filter
          (category.length === 0 || category.includes(product.category)) &&
          // Range filter
          (range <= 0 || range <= product.rating) &&
          // InputValue filter
          (inputValue.length === 0 ||
            product.name.toLowerCase().includes(inputValue.toLowerCase()) ||
            product.category.toLowerCase().includes(inputValue.toLowerCase()))
      )
      .sort((a, b) =>
        // Sorting logic
        sort === "low-to-high"
          ? a.price - b.price
          : sort === "high-to-low"
          ? b.price - a.price
          : 0
      );
  };

  const sortedProducts = sortAndFilterProducts(products, {
    sort,
    category,
    range,
    inputValue,
  });

  return (
    <div className="body-container">
      <Filters />
      <div className="main">
        <div className="card-container">
          {sortedProducts.length > 0 ? (
            sortedProducts?.map((product) => {
              const { _id, name, price, category, url, rating } = product;
              return (
                <ProductCard
                  key={_id}
                  name={name}
                  price={price}
                  category={category}
                  url={url}
                  rating={rating}
                  product={product}
                  _id={_id}
                />
              );
            })
          ) : (
            <h3>No Products Found!</h3>
          )}
        </div>
      </div>
    </div>
  );
};
