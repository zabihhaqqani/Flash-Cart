import { IsItemInCart } from "../../utils/isItemInCart";
import { useNavigate } from "react-router-dom";
import { addToCartHandler } from "../../utils/addToCart";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlist";
import { useProductContext } from "../../contexts/ProductsContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import ProductCard from "../../components/productCard/ProductCard";

export const Wishlist = () => {
  const { dispatch, cartData, wishListData, getSingleProduct } =
    useProductContext();
  const { isUserLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  return (
    <>
      <div>
        {wishListData?.length <= 0 ? (
          ""
        ) : (
          <h3 style={{ margin: "1rem", padding: "0" }}>
            My WishList ({wishListData?.length})
          </h3>
        )}
        <div className="main">
          <div className="card-container">
            {wishListData?.length > 0 ? (
              wishListData?.map((product) => {
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
              <h3>Your Wishlist is Empty!</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
