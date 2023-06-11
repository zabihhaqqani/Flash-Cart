import { useState } from "react";
import { useFilterContext } from "../../contexts/FilterContext";
import { useProductContext } from "../../contexts/ProductsContext";
import { useWishlistContext } from "../../contexts/WishlistContext";
import { Filters } from "../Filter/Filters";
import "../Products/Products.css";
import { useCartContext } from "../../contexts/CartContext";

export function Products() {
  const { products, isLoading } = useProductContext();
  const { sort,range,inputValue,categorySelection,category } = useFilterContext();
  const {addToWishlist,iconName} = useWishlistContext()
  const {addToCart,isAddedToCart} = useCartContext()

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
    const sortedProducts = [...products]?.map(product=>product)
    return sortedProducts
  }
 
  
  const sortedProductsByPrice = sortByPrice(products, sort);
  const sortedProductsByRange = sortByRange(sortedProductsByPrice, range);
  const sortedBySearch = sortBySearch(sortedProductsByRange, inputValue);
  const featuredProducts = sortByTypes(sortedBySearch, categorySelection);

  const clearFilter = clearAllFilter(featuredProducts)

  const sortedProducts = sortByCategory(sortedBySearch, category);


  

  // console.log(name)
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
                    <i style={{color:"red"}}  onClick={()=>addToWishlist(product)} className={iconName}>
                      </i>                    
                    <h3>{name}</h3>
                    <p>₹{price}</p>
                    <p>₹{category}</p>
                    <button onClick={(e)=>addToCart(product,e,_id)} value="Add to Cart" className="add-to-cart-btn"> {isAddedToCart}Add to Cart</button>
                  </div>
                );
              })}
          </div>
        }
      </div>

    </>
  );
}
