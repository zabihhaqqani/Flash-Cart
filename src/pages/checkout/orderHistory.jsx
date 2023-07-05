import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../../contexts/OrderContext";
import "./orderHistory.css";
export function OrderHistory() {
  const { orderState } = useOrderContext();
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <div
        style={{ marginTop: "1rem" }}
        className="inner-user-detail-container"
      >
        <p onClick={() => navigate("/account-details/userdetails")}>
          Profile Information
        </p>
        <p onClick={() => navigate("/account-details/userdetails/address")}>
          Addresses
        </p>
        <p
          style={{ backgroundColor: "#FC4C51", color: "white" }}
          onClick={() => navigate("/order-history")}
        >
          {" "}
          Order History
        </p>
      </div>
      <div className="order-history-container">
        <div>
          {orderState?.orderHistory?.length <= 0 ? (
            <p style={{ textAlign: "center", margin: "1rem" }}>
              No Orders Placed!
            </p>
          ) : (
            <div
              className="user-detail-address-order"
              style={{ textAlign: "left" }}
            >
              {orderState?.orderHistory?.map((item) => {
                const { delivery, price, orderProducts } = item;
                return (
                  <div className="order-history-card">
                    <p>
                      {" "}
                      <strong>Items Ordered:</strong>{" "}
                      {orderProducts?.map((item) => (
                        <div key={item.id}>
                          <p>
                            {" "}
                            <strong> Order ID: </strong>
                            {item._id}
                          </p>
                          <p>
                            {" "}
                            Name: {item.name} - {item.category}
                          </p>
                        </div>
                      ))}
                    </p>
                    <p>Delivery Charge: ₹{delivery}</p>
                    <p>Total Amount: ₹{price}</p>
                    <strong>Delivery To:</strong>
                    <p>{orderState?.addressDetails?.userName}</p>
                    <p>{orderState?.addressDetails?.city}</p>
                    <p>{orderState?.addressDetails?.state}</p>
                    <p>{orderState?.addressDetails?.country}</p>
                    <p>{orderState?.addressDetails?.pincode}</p>
                    <p>{orderState?.addressDetails?.mobileNumber}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
