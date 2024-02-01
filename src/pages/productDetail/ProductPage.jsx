import { useProductContext } from "../../contexts/ProductsContext";
import "../productListing/Products.css";
import ProductDetail from "../../components/productDetail/ProductDetail";
import "./ProductPage.css";

export const ProductPage = () => {
  const { singleProduct } = useProductContext();

  return (
    <div className="product-page">
      {singleProduct?.length > 0 &&
        singleProduct?.map((product) => {
          const { _id, name, price, category, url, rating, deliveryInDays } =
            product;
          return (
            <ProductDetail
              key={_id}
              name={name}
              price={price}
              category={category}
              url={url}
              rating={rating}
              deliveryInDays={deliveryInDays}
              _id={_id}
              product={product}
            />
          );
        })}
    </div>
  );
};
