import { useProductContext } from "../../contexts/ProductsContext";
import { EditAddress } from "./EditAddress";
import { useState } from "react";
import { AddressForm } from "./AddressForm";
import "./address.css";
import { useNavigate } from "react-router-dom";

export function Address() {
  const { addressData, dispatch } = useProductContext();
  const [addAddress, setAddAddress] = useState(false);
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

        <p
          style={{ backgroundColor: "#FC4C51", color: "white" }}
          onClick={() => navigate("/account-details/userdetails/address")}
        >
          Addresses
        </p>

        <p onClick={() => navigate("/order-history")}> Order History</p>
      </div>

      <button
        style={{ backgroundColor: "green" }}
        className="add-new-address"
        onClick={() => setAddAddress(true)}
      >
        Add New Address
      </button>

      <div className="address-container-all-main">
        <div className="address-container-main">
          <div className="all-user-detail-container"></div>
          {addAddress && <AddressForm setAddAddress={setAddAddress} />}
          {addressData?.length === 0 && (
            <h4 style={{ margin: "1rem" }}>No Addresses!</h4>
          )}

          {addressData?.map((data) => {
            const {
              id,
              userName,
              city,
              state,
              country,
              pincode,
              mobileNumber,
              isEdit,
            } = data;

            return (
              <div className="user-detail-address" key={id}>
                <p>
                  <strong>{userName}</strong>
                </p>
                <p>{city}</p>
                <p>{state}</p>
                <p>{country}</p>
                <p>{pincode}</p>
                <p>{mobileNumber}</p>
                {isEdit && <EditAddress editId={id} />}
                <button
                  style={{ backgroundColor: "green" }}
                  className="add-to-cart-btn"
                  onClick={() =>
                    dispatch({ type: "EDIT_ADDRESS", payload: id })
                  }
                >
                  Edit
                </button>

                <button
                  className="add-to-cart-btn"
                  onClick={() =>
                    dispatch({ type: "DELETE_ADDRESS", payload: id })
                  }
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
