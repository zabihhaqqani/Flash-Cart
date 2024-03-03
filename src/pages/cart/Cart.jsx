import { useNavigate } from "react-router-dom";
import CartCard from "../../components/cartCard/CartCard";
import { useAuthContext } from "../../contexts/AuthContext";
import { useProductContext } from "../../contexts/ProductsContext";
import "./Cart.css";

export const Cart = () => {
  const { dispatch, discount, cartData, wishListData, getSingleProduct } =
    useProductContext();
  const { isUserLoggedIn } = useAuthContext();

  const navigate = useNavigate();

  return (
    <div className="cart-checkout-container">
      {cartData?.length > 0 && (
        <h3 className="title">My Cart ({cartData?.length})</h3>
      )}
      <div className="cart-container">
        <div>
          {cartData?.length > 0 ? (
            cartData?.map((product) => (
              <CartCard key={product._id} product={product} />
            ))
          ) : (
            <h3 className="title">Your Cart is Empty!</h3>
          )}
        </div>
        <div style={{ display: "flex" }}>
          {cartData?.length > 0 && (
            <div className="checkout-card">
              <hr />
              <h3>Price Details:</h3>
              <hr />
              {cartData?.map((product) => (
                <div className="inner-card-cart" key={product._id}>
                  <p>{product.name}:</p>
                  <p>${product.price * product.qty}</p>
                </div>
              ))}
              <div className="inner-card-cart">
                <p>Discount:</p>
                <p>-${discount}</p>
              </div>
              <hr />
              <div className="inner-card-cart">
                <p>Total Amount:</p>
                <p>
                  $
                  {cartData?.reduce(
                    (total, curr) => total + curr.price * curr.qty - discount,
                    0
                  )}
                </p>
              </div>
              <hr />
              <button
                className="checkout-btn"
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
