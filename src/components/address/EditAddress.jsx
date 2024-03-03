import { useState } from "react";
import { useProductContext } from "../../contexts/ProductsContext";
import { toast } from "react-toastify";

export const EditAddress = ({ editId }) => {
  const { dispatch, addressData } = useProductContext();
  const [editAddress, setEditAddress] = useState({
    id: editId,
    userName: addressData?.find(({ id }) => id === editId)?.userName,
    houseNumber: addressData?.find(({ id }) => id === editId)?.houseNumber,
    city: addressData?.find(({ id }) => id === editId)?.city,
    state: addressData?.find(({ id }) => id === editId)?.state,
    country: addressData?.find(({ id }) => id === editId)?.country,
    pincode: addressData?.find(({ id }) => id === editId)?.pincode,
    mobileNumber: addressData?.find(({ id }) => id === editId)?.mobileNumber,
  });

  const addressHandler = (e) => {
    e.preventDefault(e);
  };
  return (
    <div className="address-container">
      <form onSubmit={(e) => addressHandler(e)}>
        <h3>Edit Address</h3>
        <input
          type="text"
          placeholder="Enter Name"
          required
          name="userName"
          value={editAddress.userName}
          onChange={(e) =>
            setEditAddress((editAddress) => ({
              ...editAddress,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Enter City Name"
          required
          name="city"
          value={editAddress.city}
          onChange={(e) =>
            setEditAddress((editAddress) => ({
              ...editAddress,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Enter State Name"
          required
          name="state"
          value={editAddress.state}
          onChange={(e) =>
            setEditAddress((editAddress) => ({
              ...editAddress,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Enter Country Name"
          required
          name="country"
          value={editAddress.country}
          onChange={(e) =>
            setEditAddress((editAddress) => ({
              ...editAddress,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Enter State Name"
          required
          name="pincode"
          value={editAddress.pincode}
          onChange={(e) =>
            setEditAddress((editAddress) => ({
              ...editAddress,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Enter Mobile Number"
          required
          name="mobileNumber"
          value={editAddress.mobileNumber}
          onChange={(e) =>
            setEditAddress((editAddress) => ({
              ...editAddress,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <div>
          <button
            className="btn"
            type="submit"
            onClick={() => {
              dispatch({
                type: "EDITED_ADDRESS",
                payload: [editAddress, editId],
              });
              toast.success("Address Updated!");
            }}
          >
            Edit
          </button>
          <button
            className="btn"
            type="submit"
            onClick={() =>
              dispatch({ type: "CANCEL_ADDRESS", payload: editId })
            }
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
