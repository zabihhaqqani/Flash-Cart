import { useProductContext } from "../../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";
import { addToCartHandler } from "../../utils/addToCart";
import { IsItemInCart } from "../../utils/isItemInCart";
import { removeFromWishlistHandler } from "../../utils/removeFromWishlist";
import { isItemInWishlList } from "../../utils/isIteminWishlist";
import { addToWishlistHandler } from "../../utils/addToWishlist";
import { useAuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";
import "../Products/Products.css";

export function ProductPage() {
  const { singleProduct } = useProductContext();

  const navigate = useNavigate();
  const { dispatch, cartData, wishListData } = useProductContext();
  const { isUserLoggedIn } = useAuthContext();
  return (
    <>
      {
        <div className="categories-container">
          {singleProduct?.length > 0 &&
            singleProduct?.map((product) => {
              const {
                _id,
                name,
                price,
                category,
                url,
                rating,
                deliveryInDays,
              } = product;
              return (
                <div
                  style={{ width: "300px" }}
                  className="category-card"
                  key={_id}
                >
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
                    style={{ textAlign: "left", padding: "1rem" }}
                    className="inner-box-products"
                  >
                    <p>
                      <img height="180px" width="210px" src={url} alt="" />
                    </p>
                    <h3>{name}</h3>
                    <p>₹{price}</p>
                    <p>
                      <strong>Category:</strong> {category}
                    </p>
                    <p>
                      Rating: {rating}
                      <i
                        style={{ color: "orange" }}
                        className="fa-solid fa-star"
                      ></i>
                    </p>
                    <p>Delivery: {deliveryInDays} Days</p>
                    <p>
                      <i className="fa-solid fa-tag"></i> Fastest Delivery
                    </p>
                    <p>
                      {" "}
                      <i className="fa-solid fa-tag"></i> Inclusive of All Taxes
                    </p>
                    <p>
                      <i className="fa-solid fa-tag"></i> Cash On Delivery
                      Available
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
    </>
  );
}
