import { useState } from "react";
import { useProductContext } from "../../contexts/ProductsContext";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

export const  AddressForm = ({ setAddAddress }) =>{
  const { dispatch } = useProductContext();
  const [address, setAddress] = useState({
    id: uuid(),
    userName: "",
    houseNumber: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    mobileNumber: "",
    type: "",
  });

  const addressHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NEW_ADDRESS",
      payload: address,
    });
    setAddAddress(false);
  };

  return (
    <div className="login-form-container-address">
      <form className="login-form-address" onSubmit={addressHandler}>
        <h3>Enter Address Details: </h3>
        <input
          style={{ margin: "1rem 0rem" }}
          placeholder="Enter Name"
          type="text"
          required
          name="userName"
          value={address.userName}
          onChange={(e) =>
            setAddress((data) => ({
              ...data,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          style={{ margin: "1rem 0rem" }}
          placeholder="Enter House No., Road, Colony"
          type="text"
          required
          name="houseNumber"
          value={address.houseNumber}
          onChange={(e) =>
            setAddress((addressForm) => ({
              ...addressForm,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          style={{ margin: "1rem 0rem" }}
          placeholder="Enter City"
          type="text"
          required
          name="city"
          value={address.city}
          onChange={(e) =>
            setAddress((addressForm) => ({
              ...addressForm,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          style={{ margin: "1rem 0rem" }}
          placeholder="Enter State"
          type="text"
          required
          name="state"
          value={address.state}
          onChange={(e) =>
            setAddress((addressForm) => ({
              ...addressForm,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          style={{ margin: "1rem 0rem" }}
          placeholder="Enter Country"
          type="text"
          required
          name="country"
          value={address.country}
          onChange={(e) =>
            setAddress((addressForm) => ({
              ...addressForm,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          style={{ margin: "1rem 0rem" }}
          placeholder="Enter Pincode"
          type="number"
          required
          name="pincode"
          value={address.pincode}
          onChange={(e) =>
            setAddress((addressForm) => ({
              ...addressForm,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <input
          style={{ margin: "1rem 0rem" }}
          placeholder="Enter Mobile Number"
          type="number"
          required
          name="mobileNumber"
          value={address.mobileNumber}
          onChange={(e) =>
            setAddress((addressForm) => ({
              ...addressForm,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <div>
          <label htmlFor="home">Home</label>
          <input
            type="radio"
            name="type"
            id="home"
            value="home"
            checked={address.type === "home"}
            onChange={(e) =>
              setAddress((addressForm) => ({
                ...addressForm,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label htmlFor="work">Work</label>
          <input
            type="radio"
            name="type"
            id="work"
            value="work"
            checked={address.type === "work"}
            onChange={(e) =>
              setAddress((addressForm) => ({
                ...addressForm,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <button
            style={{ backgroundColor: "green" }}
            className="add-to-cart-btn"
            type="submit"
            onClick={() => toast.success("New Address Added!")}
          >
            Add
          </button>
          <button
            style={{ backgroundColor: "red" }}
            className="add-to-cart-btn"
            onClick={() => setAddAddress(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
