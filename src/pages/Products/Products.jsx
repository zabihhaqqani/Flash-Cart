import { useEffect, useState } from "react";
import { useFilterContext } from "../../contexts/FilterContext";
import { useProductContext } from "../../contexts/ProductsContext";
import { Filters } from "../Filter/Filters";
import "../Products/Products.css";
import { useNavigate } from "react-router";
import { addToCartHandler } from "../../utils/addToCart";
import { IsItemInCart } from "../../utils/isItemInCart";
import { addToWishlistHandler } from "../../utils/addToWishlist";
import { isItemInWishlList } from "../../utils/isIteminWishlist";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlist";
import { useAuthContext } from "../../contexts/AuthContext";

import { toast } from "react-toastify";
import { Loader } from "../../utils/Loader";
import "../Products/Products.css";

export function Products() {
  const { products } = useProductContext();
  const { sort, range, inputValue, category } = useFilterContext();

  const { isUserLoggedIn } = useAuthContext();
  const { getSingleProduct, wishListData } = useProductContext();

  const sortByPrice = (products, sort) => {
    const sortedProducts = [...products]?.sort((a, b) =>
      sort === "low-to-high"
        ? a.price - b.price
        : sort === "high-to-low"
        ? b.price - a.price
        : products
    );
    return sortedProducts;
  };

  const sortByCategory = (products, category) => {
    const sortedProducts = [...products]?.filter((product) =>
      category.length > 0 ? category.includes(product.category) : product
    );
    return sortedProducts;
  };

  const sortByRange = (products, range) => {
    const sortedProducts = [...products]?.filter((product) =>
      range > 0 ? range <= product.rating : product
    );
    return sortedProducts;
  };
  const sortBySearch = (products, input) => {
    const sortedProducts = [...products]?.filter(
      (product) =>
        product.name.toLowerCase().includes(input.toLowerCase()) ||
        product.category.toLowerCase().includes(input.toLowerCase())
    );
    return sortedProducts;
  };

  const sortedProductsByPrice = sortByPrice(products, sort);
  const sortedProductsByRange = sortByRange(sortedProductsByPrice, range);
  const sortedBySearch = sortBySearch(sortedProductsByRange, inputValue);

  const sortedProducts = sortByCategory(sortedBySearch, category);

  const navigate = useNavigate();

  const { dispatch, cartData } = useProductContext();
  const [showLoader, setShowLoader] = useState();

  useEffect(() => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 500);
  }, []);

  // const

  return (
    <div className="body-container">
      <Filters />
      <div className="category-container">
        {showLoader && <Loader />}
        {
          <div className="categories-container">
            {sortedProducts.length > 0 &&
              sortedProducts?.map((product) => {
                const { _id, name, price, category, url, rating } = product;
                return (
                  <div className="category-card" key={_id}>
                    {wishListData?.find((item) => item._id === _id) ? (
                      <i
                        style={{ color: "red" }}
                        onClick={() => {
                          if (isUserLoggedIn) {
                            removeFromWishlistHandler(dispatch, _id);
                            toast.success("Product removed from Wishlist!");
                          }
                        }}
                        className="fa-solid fa-heart"
                      ></i>
                    ) : (
                      <i
                        style={{ color: "blue" }}
                        onClick={(e) => {
                          if (isUserLoggedIn) {
                            if (isItemInWishlList(wishListData, _id)) {
                              navigate("/wishlist");
                            } else {
                              addToWishlistHandler(product, dispatch, e);
                              toast.success("Product added to Wishlist!");
                            }
                          } else {
                            navigate("/login");
                            toast.warning("Login to access Wishlist!");
                          }
                        }}
                        className="fa-regular fa-heart"
                      ></i>
                    )}
                    <div
                      className="inner-box-products"
                      onClick={() => getSingleProduct(_id)}
                    >
                      <p>
                        <img height="180px" width="210px" src={url} alt="" />
                      </p>
                      <h3>{name}</h3>
                      <p>
                        MRP: <strong> ₹{price}</strong>
                      </p>
                      <p>{category}</p>
                      <p>
                        Rating: {rating}
                        <i
                          style={{ color: "orange" }}
                          className="fa-solid fa-star"
                        ></i>
                      </p>
                    </div>

                    <button
                      onClick={(e) => {
                        if (isUserLoggedIn) {
                          if (IsItemInCart(cartData, _id)) {
                            navigate("/cart");
                          } else {
                            addToCartHandler(product, dispatch, e);

                            toast.success("Product added to Cart!");
                          }
                        } else {
                          toast.warning("Login to access Cart!");
                          navigate("/login");
                        }
                      }}
                      value="Add to Cart"
                      className="add-to-cart-btn"
                      style={{
                        backgroundColor: cartData?.find(
                          (item) => item._id === _id
                        )
                          ? "#0096FF"
                          : "Add  to Cart",
                      }}
                    >
                      {cartData?.find((item) => item._id === _id)
                        ? "Go to Cart"
                        : "Add  to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        }
      </div>
    </div>
  );
}
