import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../../contexts/OrderContext";
import { useProductContext } from "../../contexts/ProductsContext";
import "./Checkout.css";
import { AddressCheckout } from "./AddressCheckout";
import { toast } from "react-toastify";

import clearCartItems from "../../utils/removeAllFromCart";

export const  Checkout = () => {
  const { cartData, discount } = useProductContext();
  const { orderState, orderDispatch } = useOrderContext();
  const { dispatch } = useProductContext();
  const navigate = useNavigate();
  const deliveryCharge = 200;
  const totalAmt = cartData?.reduce(
    (total, curr) => total + curr.price * curr.qty - discount + deliveryCharge,
    0
  );
  const orderData = {
    price: totalAmt,
    delivery: deliveryCharge,
    orderProducts: [...cartData],
    address: {
      name: orderState?.addressDetails?.userName,
      city: orderState?.addressDetails?.city,
      state: orderState?.addressDetails?.state,
      country: orderState?.addressDetails?.country,
      pincode: orderState?.addressDetails?.pincode,
    },
  };
  return (
    <div>
      <h3 style={{ margin: "1rem" }}>Checkout Page</h3>
      <div className="checkout-container-main">
        {cartData?.length > 0 ? <AddressCheckout /> : ""}

        {cartData?.length > 0 ? (
          <div className="checkout-card-container">
            <h3>Order Details:</h3>
            <div className="checkout-card-container-p">
              <p>Price ({cartData?.length} items) :</p>
              <p>
              $
                {cartData?.reduce(
                  (total, curr) => total + curr.price * curr.qty - discount,
                  0
                )}
              </p>
            </div>
            <div className="checkout-card-container-p">
              <p>Delivery Charges: </p>
              <p>+{deliveryCharge}</p>
            </div>
            <div className="checkout-card-container-p">
              <p>
                <strong>Total Price : </strong>{" "}
              </p>
              <p>
                <strong>${totalAmt}</strong>
              </p>
            </div>
            {orderState?.addressDetails && (
              <div style={{ textAlign: "left" }}>
                <hr />
                {orderState?.addressDetails && <h4>Delivery Address:</h4>}

                <p>{orderState?.addressDetails?.userName}</p>
                <p>{orderState?.addressDetails?.city}</p>
                <p>{orderState?.addressDetails?.state}</p>
                <p>{orderState?.addressDetails?.country}</p>
                <p>{orderState?.addressDetails?.pincode}</p>
              </div>
            )}

            {orderState?.addressDetails === undefined ? (
              <p style={{ margin: "1rem" }}>Add Address To Place Order</p>
            ) : (
              <button
                onClick={() => {
                  orderDispatch({
                    type: "SET_ORDER_HISTORY",
                    payload: orderData,
                  });
                  toast.success("Order Placed!");

                  clearCartItems(dispatch, cartData);

                  navigate("/order-history");
                }}
                className="place-order-btn"
              >
                Place Order
              </button>
            )}
          </div>
        ) : (
          <h3 style={{ margin: "1rem" }}>No Items in Checkout!</h3>
        )}
      </div>
    </div>
  );
}
