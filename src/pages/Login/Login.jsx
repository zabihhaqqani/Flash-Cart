import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";
// import "./login.css"

export function Login() {
  const navigate = useNavigate();
  const { loginUser } = useAuthContext();

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
      // toast.success("Log In Successful!")
      loginUser(userData);
    }
  };

  const loginAsGuest = (e) => {
    e.preventDefault();
    setUserData(guestUserData);
    loginUser(guestUserData);
    toast.success("Log In Successful!");
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="login-form-contianer">
        <form className="login-form">
          <h3>Log In</h3>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            value={userData.email}
            type="email"
            placeholder="Enter your email"
            onChange={(e) =>
              setUserData((data) => ({ ...data, email: e.target.value }))
            }
            required
          />

          <label htmlFor="password">Password: </label>
          <input
            id="password"
            value={userData.password}
            type={showPassword ? "text" : "password"}
            placeholder="***************"
            onChange={(e) =>
              setUserData((data) => ({ ...data, password: e.target.value }))
            }
            required
          />

          <span
            className="show-hide-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "hide" : "show"}
          </span>
          <button
            style={{ backgroundColor: "blue" }}
            className="add-to-cart-btn"
            onClick={loginHandler}
          >
            Login
          </button>
          <button className="add-to-cart-btn" onClick={loginAsGuest}>
            Login as Guest
          </button>
          <button
            style={{ backgroundColor: "black" }}
            className="add-to-cart-btn"
            onClick={() => navigate("/signup")}
          >
            Create New Account
          </button>
        </form>
      </div>
    </>
  );
}
