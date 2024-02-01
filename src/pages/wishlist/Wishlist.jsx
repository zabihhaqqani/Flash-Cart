import { IsItemInCart } from "../../utils/isItemInCart";
import { useNavigate } from "react-router-dom";
import { addToCartHandler } from "../../utils/addToCart";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlist";
import { useProductContext } from "../../contexts/ProductsContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

export const  Wishlist = ()=> {
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
          <h3 style={{ margin: "1rem" }}>
            My WishList ({wishListData?.length})
          </h3>
        )}
        {
          <div className="categories-container">
            {wishListData?.length <= 0 ? (
              <h3 style={{ margin: "1rem" }}>
                You don't have any product in your wishlist
              </h3>
            ) : (
              wishListData?.map((product) => {
                const { _id, name, price, category, url, rating } = product;
                return (
                  <div className="category-card" key={_id}>
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
                    <div
                      className="inner-box-products"
                      onClick={() => getSingleProduct(_id)}
                    >
                      <p>
                        <img height="180px" width="210px" src={url} alt="" />
                      </p>
                      <h3>{name}</h3>
                      <p>₹{price}</p>
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
                        if (IsItemInCart(cartData, _id)) {
                          navigate("/cart");
                        } else {
                          addToCartHandler(product, dispatch, e);
                          toast.success("Product added to Cart!");
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
              })
            )}
          </div>
        }
      </div>
    </>
  );
}
