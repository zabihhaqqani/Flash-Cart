import { useState } from "react";
import { useFilterContext } from "../../contexts/FilterContext";
import { useProductContext } from "../../contexts/ProductsContext";
// import { useWishlistContext } from "../../contexts/WishlistContext";
import { Filters } from "../Filter/Filters";
import "../Products/Products.css";
// import { useCartContext } from "../../contexts/CartContext";
import { Navigate, useNavigate } from "react-router";
import { addToCartHandler } from "../../utils/addToCart";
import { IsItemInCart } from "../../utils/isItemInCart";
import { addToWishlistHandler } from "../../utils/addToWishlist";
import { isItemInWishlList } from "../../utils/isIteminWishlist";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlist";
import { useAuthContext } from "../../contexts/AuthContext";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
  
  
export function Products() {
  const { products, isLoading } = useProductContext();
  const { sort, range, inputValue, categorySelection, category } =
    useFilterContext();
  // const { addToWishlist, iconName, removeFromWishlist, wishListProducts } =
  //   useWishlistContext();
  // const { addToCart, cartButton, cartItems } = useCartContext();
  const { showSingleProduct } = useProductContext();
  const { isUserLoggedIn } = useAuthContext();
  const {getSingleProduct,wishListData} = useProductContext()

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
    const sortedProducts = [...products]?.filter(product =>
      category.length > 0 ? category.includes(product.category) : product
    );
    return sortedProducts;
  };

  const sortByRange = (products, range) => {
    const sortedProducts = [...products]?.filter(product =>
      range > 0 ? range <= product.rating : product
    );
    return sortedProducts;
  };
  const sortBySearch = (products, input) => {
    const sortedProducts = [...products]?.filter(
      product =>
        product.name.toLowerCase().includes(input.toLowerCase()) ||
        product.category.toLowerCase().includes(input.toLowerCase())
    );
    return sortedProducts;
  };
  const sortByTypes = (products, name) => {
    const sortedProducts = [...products]?.filter(
      product => product.category === name
    );
    return sortedProducts;
  };

  const clearAllFilter = () => {
    const sortedProducts = [...products]?.map(product => product);
    return sortedProducts;
  };

  const sortedProductsByPrice = sortByPrice(products, sort);
  const sortedProductsByRange = sortByRange(sortedProductsByPrice, range);
  const sortedBySearch = sortBySearch(sortedProductsByRange, inputValue);
  const featuredProducts = sortByTypes(sortedBySearch, categorySelection);

  const clearFilter = clearAllFilter(featuredProducts);

  const sortedProducts = sortByCategory(sortedBySearch, category);

  const navigate = useNavigate();

  // console.log(name)
  // const { cartDispatch } = useCartContext();
  // const { wishlistDispatch } = useWishlistContext();
  const location = useLocation();
  const {dispatch,cartData} = useProductContext()
  return (
    <>
      <div className="category-container">
        <Filters />
        {isLoading && <h1>loading........</h1>}
        {
          <div className="categories-container">
            {sortedProducts.length > 0 &&
              sortedProducts?.map(product => {
                const { _id, name, price, category } = product;
                return (
                  <div
                    style={{ maxHeight: "50vh" }}
                    className="category-card"
                    key={_id}
                  >
                    {wishListData?.find(item => item._id === _id) ? (
                      <i
                        style={{ color: "red" }}
                        onClick={() =>
                          removeFromWishlistHandler(dispatch, _id)
                        }
                        className="fa-solid fa-heart"
                      ></i>
                    ) : (
                      <i
                        style={{ color: "blue" }}
                        onClick={e => {
                          if (isUserLoggedIn) {
                            if (isItemInWishlList(wishListData, _id)) {
                              navigate("/wishlist");
                            } else {
                              addToWishlistHandler(
                                product,
                                dispatch,
                                e
                              );
                            }
                          } else {
                            navigate("/login");
                          }
                        }}
                        className="fa-regular fa-heart"
                      ></i>
                    )}
                    <div onClick={() => getSingleProduct(_id)}>
                      <h3>{name}</h3>
                      <p>₹{price}</p>
                      <p>₹{category}</p>
                    </div>

                    <button
                      onClick={e => {
                        if (isUserLoggedIn) {
                          if (IsItemInCart(cartData, _id)) {
                            navigate("/cart");
                          } else {
                            addToCartHandler(product, dispatch, e);
                            toast.success("Product added to Cart!")
                          }
                        } else {
                          navigate("/login");
                        }
                      }}
                      value="Add to Cart"
                      className="add-to-cart-btn"
                    >
                      {cartData?.find(item => item._id === _id)
                        ? "Go to Cart"
                        : "Add  to Cart"}
                    </button>
                  </div>
                );
              })}
          </div>
        }
      </div>
    </>
  );
}
