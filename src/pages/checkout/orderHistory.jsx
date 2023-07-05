import { useNavigate } from "react-router-dom";
import { useOrderContext } from "../../contexts/OrderContext";
import "./orderHistory.css";
export function OrderHistory() {
  const { orderState } = useOrderContext();
  const navigate = useNavigate();
  console.log(orderState?.orderHistory?.address);
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
                const { delivery, price, orderProducts, address } = item;
                console.log(address);
                return (
                  <div className="order-history-card">
                    <div>
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
                    </div>
                    <p>Delivery Charge: ₹{delivery}</p>
                    <p>Total Amount: ₹{price}</p>
                    <strong>Delivery To:</strong>
                    <p>{address?.name}</p>
                    <p> {address?.city}</p>
                    <p> {address?.country}</p>
                    <p> {address?.pincode}</p>

                    {/* <OrderAddress data={orderState?.addressDetails} /> */}
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
