import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import "./userDetails.css";

export function UserDetails() {
  const { user, userLogout } = useAuthContext();
  const navigate = useNavigate();
  return (
    <div className="user-details-container">

      <div className="all-user-detail-container">
        <div className="inner-user-detail-container">
        <p style={{backgroundColor:"#FC4C51",color:"white"}}>Profile Information</p>
        <p onClick={() => navigate("/account-details/userdetails/address")}>
          Addresses
        </p>
        <p> Order History</p>
        </div>
      </div>
      <div className="user-detail-container">
        <p>
          <strong>Name: </strong>
          {user.firstName}
        </p>
        <p>
          <strong>Email:</strong>
          {user.email}
        </p>
        <button className="add-to-cart-btn" style={{margin:"1rem 0rem"}} onClick={userLogout}>Logout</button>
      </div>
    </div>
  );
}
