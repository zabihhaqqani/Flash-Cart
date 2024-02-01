import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";
import "./Login.css";

export const  Login = () =>{
  const navigate = useNavigate();
  const { loginUser } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const guestUserData = {
    email: "mdzabihhaqqani@gmail.com",
    password: "haqqani",
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!userData.email.trim() || !userData.password.trim()) {
      toast.warning("Enter valid Credentials!");
    } else {
      loginUser(userData);
    }
  };

  const loginAsGuest = (e) => {
    e.preventDefault();
    setUserData(guestUserData);
    loginUser(guestUserData);
  };

  return (
    <div className="login-form-contianer">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-container">
        <input
          id="email"
          value={userData.email}
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setUserData((data) => ({ ...data, email: e.target.value }))
          }
          required
        />

        <input
          id="password"
          value={userData.password}
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          minLength="8"
          maxLength="10"
          onChange={(e) =>
            setUserData((data) => ({ ...data, password: e.target.value }))
          }
          required
        />
        <i
          onClick={() => setShowPassword(!showPassword)}
          className={`fa-regular fa-${!showPassword ? "eye-slash" : "eye"}`}
          id="show-hide-btn"
        ></i>
        </div>
        <button
          style={{ backgroundColor: "rgb(0, 150, 255)" }}
          className="add-to-cart-btn"
          onClick={loginHandler}
        >
          Login
        </button>
        <button className="add-to-cart-btn" onClick={loginAsGuest}>
          Login as Guest
        </button>
        <button onClick={() => navigate("/signup")}>Create New Account</button>
      </form>
    </div>
  );
}
