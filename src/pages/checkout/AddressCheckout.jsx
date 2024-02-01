import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import "./address.css"
import { useProductContext } from "../../contexts/ProductsContext";
import { AddressForm } from "../address/AddressForm";
import { EditAddress } from "../address/EditAddress";
import { useOrderContext } from "../../contexts/OrderContext";

export const  AddressCheckout = () => {
  const navigate = useNavigate();
  const { addressData, state } = useProductContext();
  const { orderDispatch } = useOrderContext();

  const [selectedAddress, setSelectedAddress] = useState(state?.address[0]);

  const [addAddress, setAddAddress] = useState(false);

  useEffect(() => {
    orderDispatch({
      type: "SET_ADDRESS_DETAILS",
      payload: selectedAddress,
    });
  }, [selectedAddress]);

  return (
    <div>
      <div className="address-container-main">
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
              <input
                checked={selectedAddress?.id === id}
                onChange={() =>
                  setSelectedAddress(
                    addressData?.find((product) => product?.id === id)
                  )
                }
                type="radio"
                name="selected-address"
              />
              <p>
                <strong>{userName}</strong>
              </p>
              <p>{city}</p>
              <p>{state}</p>
              <p>{country}</p>
              <p>{pincode}</p>
              <p>{mobileNumber}</p>
              {isEdit && <EditAddress editId={id} />}
            </div>
          );
        })}
      </div>
      <div>
        <button
          className="add-new-address-checkout"
          onClick={() => {
            navigate("/account-details/userdetails/address");
          }}
        >
          Add New Address
        </button>
      </div>
    </div>
  );
}
